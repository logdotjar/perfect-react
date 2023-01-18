import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";

import './Expense.css';



const Expenses = (props) => {
    const [filteredYear,setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
    }

    const filterExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent =  <p>No expneses found</p>;

    if(filterExpenses.length > 0){
        expensesContent = filterExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {/* 조건식 삼항연산자에서 독립적 2개로 나눔 */}
                {/*
                {filterExpenses.length === 0 && <p>No expneses found</p>}
                {filterExpenses.length > 0  &&
                    filterExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
                */}

                {expensesContent}
            </Card>
        </div>
    )
}
export default Expenses;