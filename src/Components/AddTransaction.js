import React, { useContext, useState } from 'react';

//import GlobleContext

import {GlobleContext} from '../context/GlobleState';

const AddTransaction =()=>{
    const [description,setDiscription]=useState("");
    const [transactionAmount,setTransactionAmount]=useState(0);
    const {addTransaction}=useContext(GlobleContext);

    const onSubmit= e =>{
        e.preventDefault();

        const newTransaction={
            id: Math.floor(Math.random()*100000000),
            description,
            transactionAmount:+transactionAmount
        }
        addTransaction( newTransaction);
    }

    return(
        <div >
            <h3>Add New Transaction</h3>

            <form onSubmit={onSubmit}>
            
                <div className="form-control">
                <label htmlFor="description">Description</label>
                <input type="text" id="description" 
                       placeholder="Enter transaction description"
                       value={description}
                       onChange={(e) => setDiscription(e.target.value)}
                 />
                </div>
                <div className="form-control" >
                <label htmlFor="transactionamount">Amount<br/>
                (negtive - expence, positive - income)
                </label>
                <input type="number" id="transactionamount" 
                       placeholder="Enter transaction amount"
                       value={transactionAmount}
                       onChange={(e)=>setTransactionAmount(e.target.value)} 
                />
                </div>    
                <button className="btn">
                Add Transaction
            </button>
            </form>
            
        </div>
    )
}
export default AddTransaction;