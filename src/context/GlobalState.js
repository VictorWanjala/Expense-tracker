import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer'

//Initial state
const initialState = {
    transactions: [
        {id: 1, text: 'Flower', amount: -20},
        {id: 1, text: 'Salary', amount: 360},
        {id: 1, text: 'Book', amount: -10},
        {id: 1, text: 'Camera', amount: 150},
    ]
}

//Create context
export const GlobalContext = createContext(initialState)

//provider component
export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState)


    return (<GlobalContext.Provider value={
        {transactions: state.transactions}
    }>
        {children}
    </GlobalContext.Provider>)

}