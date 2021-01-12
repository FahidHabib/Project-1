import React, { useContext } from 'react';

// import globleContext

import {GlobleContext} from '../context/GlobleState';


const Balence = ()=>{

    const {transactions} = useContext(GlobleContext);

    const amounts= transactions.map(transaction=> transaction.transactionAmount );
    console.log(amounts);

    const total= amounts.reduce((acc,item)=> (acc += item),0).toFixed(2);

    return(
        <div className="container">
        <h4>Your Balence</h4>
        <h1>${total}</h1>
        </div>
    )
}

export default Balence;