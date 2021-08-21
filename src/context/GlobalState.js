import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//intial State...
const intialState = {
    transactions: [

        { id: 1, text: "flower", amount: -20 },
        { id: 2, text: "Salary", amount: 2000 },
        { id: 3, text: "Book", amount: -20 },
        { id: 4, text: "Borrow", amount: 200 }
    ]
}



//createcontext
export const GlobalContext = createContext(intialState);
//createGlobalProvider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, intialState)


    //Action
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });

    }
    function AddTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            AddTransaction


        }}>
            {children}

        </GlobalContext.Provider>

    )
}
export default GlobalProvider;