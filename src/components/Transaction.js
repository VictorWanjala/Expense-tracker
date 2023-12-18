import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext)


    const sign = transaction.amount < 0 ? '-':'+';
  return (
    <li className={transaction.amount <0? 'list-item minus':'list-item plus'}>
          <span className="transaction-description">
            {transaction.text}</span> 
            <span>{sign}${Math.abs(transaction.amount)}</span>
          <button onClick={()=> deleteTransaction(transaction.id)} className="delete-btn">x</button>
     </li>
  )
}
