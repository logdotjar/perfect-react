// 특정 파일이 있다고 알려야함 - CSS파일을 고려할수있도
import './ExpenseItem.css';



function ExpenseItem(){
    return (
        <div className="expense-item">
            <div>2023.01.04</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$234.64</div>
            </div>
        </div>
    );
}

export default ExpenseItem;