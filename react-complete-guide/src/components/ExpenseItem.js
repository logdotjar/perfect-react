// 특정 파일이 있다고 알려야함 - CSS파일을 고려할수있도
import './ExpenseItem.css';



function ExpenseItem(){

    const expenseDate = new Date(2023,1,5);
    const expenseTitle = "Car insurance";
    const expenseAmount = 293.45;

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            {/*date객체이기때문에 expenseDate로 바로 출력불가능*/}
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">
                    {expenseAmount}
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;