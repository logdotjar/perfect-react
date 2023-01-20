import React, {useState} from 'react';
import ExpensesList from "./ExpensesList";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";

import './Expense.css';



const Expenses = (props) => {
    const [filteredYear,setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
    }

    const filterExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

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
                <ExpenseChart expenses={filterExpenses}/>
                <ExpensesList items={filterExpenses}/>
            </Card>
        </div>
    )
}
export default Expenses;