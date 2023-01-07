import ExpenseDate from "./ExpensDate";
import Card from "./Card";


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
    //정의된 Card.js를 컴포넌트로 미리정의된 스타일을 자동적으로 갖게한다.
    // 하지만 지정 컴포넌트를 컨텐츠를 감싸는 wrapper로 사용할 수 없다.
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />

            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">
                    ${props.amount}
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;