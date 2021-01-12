import React, { createContext, useReducer } from 'react';

// improt AppReducer

import AppReducer from './AppReducer';

const intialState ={
    
    transactions: []
}

// Create a globle Context

export const GlobleContext=createContext(intialState);

//Create the Provider for Globle Context

export const GlobleProvider=({children})=>{

    const [state,dispatch]=useReducer(AppReducer,intialState);

    //Add Transaction

    function addTransaction(transaction) {
        dispatch({ 
        type:"ADD_TRANSACTION",
        payload:transaction
    });
    }
    
    //Delete Actions

    function deleteTransaction(id) {
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        });    
    }

    return(
        <GlobleContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
        }}>
            {children}
        </GlobleContext.Provider>)
}
