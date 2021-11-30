import React ,{useContext} from 'react'
import { GlobalContext } from '../context/GobalState'
import { Transaction } from './Transaction'
export const TransactionList = () => {
    const {transactions}=useContext(GlobalContext)
    // console.log(context);
    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction=>(<Transaction key={transaction.id} transaction ={transaction} />))}
                
            </ul>
        </div>
    )
}
