import React, { useContext } from 'react';

//import GlobleContext

import {GlobleContext} from '../context/GlobleState';

const BalenceSummry =()=>{

    const {transactions}= useContext(GlobleContext);

    const amounts=transactions.map(transactions=>transactions.transactionAmount);

    const income= amounts
    .filter(item=> item>0)
    .reduce((acc,item) =>(acc +=item),0)
    .toFixed(2);

    const expence=(amounts.filter(item=>item<0).reduce((acc,item)=>(acc +=item),0)* -1
    ).toFixed(2);


    return(
        <div className="inc-exp-container">
            <div >
                <h4>Income</h4>
                <p className="money plus">{income}</p>
            </div>
            <div>
                <h4>Expence</h4>
                <p className="money minus">{expence}</p>
            </div>
        </div>
    )
}
export default BalenceSummry;