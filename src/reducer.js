const reducer=(state,action)=>{
    console.log('is',state)
    if(action.type==='CLEAR_CART'){
        return {...state,cart:[]}
    }
    if(action.type==="REMOVE"){
        return {...state,cart:state.cart.filter(cartItem=>{
          return  cartItem.id !== action.payload
        })}
    }
    if(action.type==="INCREASE"){
        let tempCart=state.cart.map(cartItem=>{
            if(cartItem.id===action.payload){
return {...cartItem,amount:cartItem.amount+1}
            }
            return cartItem
        })
        return {...state,cart:tempCart}
    }
    if(action.type==="DECREASE"){
        let tempCart=state.cart.map(cartItem=>{
            if(cartItem.id===action.payload){
return {...cartItem,amount:cartItem.amount-1}
            }
            return cartItem
        }).filter(cartItem=>cartItem.amount !==0)
        return {...state,cart:tempCart}
    }
    if (action.type === 'GET_TOTALS') {
        let { total, amount } = state.cart.reduce(
            
          (cartTotal, cartItem) => {
             
            const { price, amount } = cartItem
            const itemTotal = price * amount
           
    
            cartTotal.total += itemTotal
            cartTotal.amount += amount
            return cartTotal
          },
          {
            total: 0,
            amount: 0,
          }
        )
       
        console.log(total,amount)
        total = parseFloat(total.toFixed(2))
    
        return { ...state, total, amount }
      }
      if(action.type==="loading"){
          return {...state,loading:true}
      }
      if(action.type==="DISPLAY_ITEM"){
          return {...state,cart:action.payload}
      }
    return state
}
export default reducer