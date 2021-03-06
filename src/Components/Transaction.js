import React from 'react'
import { GlobalContext } from '../context/GobalState';
import { useContext } from 'react';

export const Transaction = ({transaction}) => {
    const { deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount < 0 ?'-':'+';
    return (
        <li className={transaction.amount > 0 ? "plus" : "minus"}>
                    {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span>
                    <button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">x</button>
                </li>
    )
}
