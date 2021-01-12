import React, { useContext } from 'react';

// import GlobleContext

import {GlobleContext} from '../context/GlobleState';

//import Transaction

import {Transaction} from './Transaction.js';


export const TransactionHistory =()=>{

    const {transactions}= useContext(GlobleContext);

    return(
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.map(transaction =>(
                    <Transaction key={transaction.id} transaction={transaction}/>
                ))}
                
            </ul>
        </div>
    )
}

export default TransactionHistory;