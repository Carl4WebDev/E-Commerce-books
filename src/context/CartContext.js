import { createContext, useContext, useReducer } from "react"
import { CartReducers } from "../reducers/CartReducers";

const cartInitialState = {
    cartList: [],
    total: 0,
}

const CartContext = createContext(cartInitialState); // convert cartInitialState to context to be used as a global variable later

export const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(CartReducers, cartInitialState);

    

    function addToCart(product) {
        const updatedList = state.cartList.concat(product);
        const updatedTotal = state.total + product.price;

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products:updatedList,
                total: updatedTotal
            }  
        })
    }

    function removeFromCart(product) {
        const updatedList = state.cartList.filter( item => item.id !== product.id);
        const updatedTotal = state.total - product.price;

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products:updatedList,
                total: updatedTotal,
            }  
        })
    }

    
    function clearCart(product) {

        dispatch({
            type: "CLEAR_CART",
            payload: {
                products: [],
                total: 0
            }  
        })
    }

    const value  = {
        cartList: state.cartList ,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart
    }

    return (
        <CartContext.Provider value={value} >
            {children}
        </CartContext.Provider>
    )
} 

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}