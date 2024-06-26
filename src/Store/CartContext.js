import { createContext,useReducer } from "react";

export const CartContext=createContext({
    items:[],
    addItem:(item)=>{},
    removeItem:(id)=>{}
})

function cartReducer(state,action){
   if(action.type==='ADD_ITEM'){
     
    const existingCartIndexItem=state.items.findIndex((item)=>item.id===action.item.id)
     let updatedItems=[...state.items]

     if(existingCartIndexItem>-1){
        const updatedItem={
            ...state.items[existingCartIndexItem],
            quantity:state.items[existingCartIndexItem].quantity+1
        }
        
        updatedItems[existingCartIndexItem]=updatedItem;
     }else{
       updatedItems.push({...action.item,quantity:1})
     }

     return {...state,items:updatedItems}
   }
   if(action.type==='REMOVE_ITEM'){
    
    const existingCartIndexItem=state.items.findIndex((item)=>item.id===action.id);
    let existingCartItem=state.items[existingCartIndexItem]

    let updatedItems=[...state.items]
    
    if(state.items.quantity===1){
        updatedItems.splice(existingCartIndexItem,1)
    }else{
    const updatedItem={
        ...existingCartItem,
        quantity:existingCartItem.quantity-1
    }
     
    updatedItems[existingCartIndexItem]=updatedItem;
    }

    return {...state,items:updatedItems}
   }
   return state;
}

function CartContextProvider({children}){
    const [cartState, dispatchCartAction] = useReducer(cartReducer, { items: [] });

    function addItem(item) {
      dispatchCartAction({ type: 'ADD_ITEM', item });
    }
  
    function removeItem(id) {
      dispatchCartAction({ type: 'REMOVE_ITEM', id });
    }
  
    const cartContext = {
      items: cartState.items,
      addItem,
      removeItem
    };

    console.log(cartContext)
 return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}
export default CartContextProvider;