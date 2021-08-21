import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
const intialState = {
    Transactions: [
        { id: 1, text: "flower", amount: -20 },
        { id: 2, text: "Salary", amount: 2000 },
        { id: 3, text: "Book", amount: -20 },
        { id: 4, text: "Borrow", amount: 200 }
    ]
}


//createContext
export const GlobalContext = createContext(intialState);
//createGlobal provider
export const GlobalProvider = (children) => {
    const [state, dispatch] = useReducer(AppReducer, intialState)
    return (
        <GlobalContext.Provider value={{ Transactions: state.Transactions }}>
            {children}
        </GlobalContext.Provider>

    )

}