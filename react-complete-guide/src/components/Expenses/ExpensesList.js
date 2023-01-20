import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

//렌더링을 위한 별개의 로직을 사용하여 다른 JSX 코드(h2)를 반환한다.
const ExpensesList = (props) => {
    let expensesContent =  <p>No expneses found</p>;

    if(props.items.length === 0){
       return <h2 className="expenses-list__fallback">Found no expenses</h2>
    }

    return <ul className="expenses-list">
        { props.items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))}
    </ul>
};

export  default  ExpensesList;