import React,{useContext} from "react";

// import GlobleContext

import {GlobleContext} from '../context/GlobleState';


export const Transaction=({transaction})=>{
    
    const {deleteTransaction}=useContext(GlobleContext);
    const sign=transaction.transactionAmount < 0 ? '-' : '+';

    return(
        <li className={transaction.transactionAmount < 0 ? 'minus' : 'plus'}>

            {transaction.description}                
            <span>{sign}${Math.abs(transaction.transactionAmount)}</span>
            <button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">X</button>
        </li>
    )
}
