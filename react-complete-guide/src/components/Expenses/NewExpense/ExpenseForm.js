import React , {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {

    // state 반복대신 하나의 useState에 객체로 전달 -> 단, 개별 업데이트가 아니라 3개 모두 업데이트
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');


    /*
    const [userInput,setUserInput] = useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:'',
    })
     */

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        //유지되어야 하는 데이터를 수동으로 복사
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });

        //호출해서 함수에 함수를 전달해야하는 방식 -> 익명화살표함수로 전달 리액트에서 실행할것
        // setUserInput((prevState)=>{
        //     return{
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     };
        // });

    };


    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    };

    const dateChangeHanlder = (event) => {
        setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    };

    const submitHandler = (event) =>{
        event.preventDefault();

        //입력된 데이 폼이 제출되었을때 객체 형성
        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            data:new Date(enteredDate) // 날짜 문자열 분석해서 날짜 객체로 변
        }
        console.log(expenseData);
    };

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2022-01-01" max="2023-12-31" onChange={dateChangeHanlder}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>

}

export default ExpenseForm;