import React, {useReducer, createContext} from 'react';

import contextReducer from './contextReducer';

const initialState= JSON.parse(localStorage.getItem('transactions'))||[{"amount":77,"category":"Lottery","type":"Income","date":"2021-02-14","id":"34f1bba5-6c49-43f1-9a00-8a1d07363e85"},{"amount":55,"category":"Shopping","type":"Expense","date":"2021-02-14","id":"708e9bf9-709b-4ed3-b095-05dc6393cb55"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider=({children})=>{
    const [transactions,dispatch]=useReducer(contextReducer,initialState);
    //Actions Creators
    const deleteTransaction=(id)=> dispatch({type:'DELETE_TRANSACTION',payload:id});
    const addTransaction=(transaction)=> dispatch({type:'ADD_TRANSACTION',payload:transaction});

    const balance=transactions.reduce((acc,currVal)=>currVal.type==='Expense' ?acc-currVal.amount:acc+currVal.amount,0)
    return(
        <ExpenseTrackerContext.Provider 
            value={{
                deleteTransaction,addTransaction
                ,transactions,balance
            }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}