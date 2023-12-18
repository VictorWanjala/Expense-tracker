import React from 'react'


export const TransactionList = () => {
  return (
    <div className="transaction-list">
      <h3 className="transaction-history">History</h3>
      <ul className="list">
        <li className="list-item minus">
          <span className="transaction-description">Cash</span> <span>-$400</span>
          <button className="delete-btn">x</button>
        </li>
        </ul>
    </div>
  )
}
