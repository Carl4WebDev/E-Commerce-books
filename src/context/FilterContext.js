import { createContext, useContext, useReducer } from "react"
import { FilterReducers } from "../reducers"


// Initial state
const filterInitialState = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
}

const FilterContext = createContext(filterInitialState); //convert into context our variable filterInitialState 

export const FilterProvider = ({children}) => { //This is the dynamic part where our App component will depend its content or dynamic value
    

    const [state, dispatch] = useReducer(FilterReducers, filterInitialState)

    function initialProductList(products) {
        // Filling the pruductList
        // function to pass to FilterReducer
        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products: products
            }
        })

    }

    // functions 
    function bestSeller(products) {
        return state.bestSellerOnly ? products.filter(product => product.best_seller === true) : products;
    }
    function inStock(products) {
        return state.onlyInStock ? products.filter(product => product.in_stock === true): products;    
    }
    function sort(products) {
        if( state.sortBy === "lowtohigh") {
            return products.sort((a,b) => Number(a.price) - Number(b.price));
        }
        if(state.sortBy === "hightolow") {
            return products.sort((a,b ) => Number(b.price) - Number(a.price))
        }     
        return products
    }

    function rating(products) {
        if(state.ratings === "4STARABOVE"){
            return products.filter(product => product.rating >= 4 );
        }
        if(state.ratings === "3STARABOVE"){
            return products.filter(product => product.rating >= 3 ); 
        }
        if(state.ratings === "2STARABOVE"){
            return products.filter(product => product.rating >= 2 );
        }
        if(state.ratings === "1STARABOVE"){
            return products.filter(product => product.rating >= 1 ); 
        }
        return products
    }

    
    // filter bar functionality
    const filteredProductList = rating(sort(inStock(bestSeller(state.productList))))
    
    // value to pass to App component
    const value  = {
        state,
        dispatch,
        products: filteredProductList,
        initialProductList
    }

    // passing the value to App component
    return (
        <FilterContext.Provider value={value} >
            {children}
        </FilterContext.Provider>
    )
} 


export const useFilter = () => { // the way to access our dynamic content
    const context = useContext(FilterContext)
    return context
}