// 특정 파일이 있다고 알려야함 - CSS파일을 고려할수있도
import './ExpenseItem.css';


// 매개변수 props : 얻을 모든 값을 갖고있는 객체
/*
* props객체에서 key-value로 이루어진 파일포맷을 얻는데 리액트에 의해 자동할당된다.
* 얻을 객체의 key는 정의된 속성 이름 title,date,amount가 된다. => App.js ExpenseItem 에 정의되어있음
* 매개변수(props)에 접근하고 그다음 title 프로퍼티로 이동.
*
* */
function ExpenseItem(props){

    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            {/*date객체이기때문에 expenseDate로 바로 출력불가능*/}
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">
                    ${props.amount}
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;