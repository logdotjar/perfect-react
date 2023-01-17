import React, { useState } from 'react';

import ExpenseDate from "./ExpensDate";
import Card from "../UI/Card";


// 특정 파일이 있다고 알려야함 - CSS파일을 고려할수있도
import './ExpenseItem.css';


// 매개변수 props : 얻을 모든 값을 갖고있는 객체
/*
* props객체에서 key-value로 이루어진 파일포맷을 얻는데 리액트에 의해 자동할당된다.
* 얻을 객체의 key는 정의된 속성 이름 title,date,amount가 된다. => App.js ExpenseItem 에 정의되어있음
* 매개변수(props)에 접근하고 그다음 title 프로퍼티로 이동.
*
* */
const ExpenseItem = (props) => {
    /*
    * 첫번째 : 현재 상태값 , 두번째요소 : 첫번째요소를 업데이트하는 함수 - JS 구조분해할당
    * title - 관리되고있는 값 props.title  초기값 , setTitle : 새로운 title을 설정하기 위해 호출할 함수
    *
    *
    * 새로운 값 할당대신 clickHandler함수를 호출하는것은 어떤변수에 새로운값을 할당하는것이 아니라 이 특별한 변수로 시작하기 때문이고 ,  메모리 어딘가에서 리액트로 관리한다.
    * 새로운 값만 받는것 뿐만아니라, 호출한 컴포넌트함수는 이 state를 업데이트하는 함수이다.
    * 그리고 useState로 상태를 초기화했던곳에서 다시 실행한다.
    *
    *
    * !!!!중요) const 상수를 사용한 이유?
    * 등호를 사용해서 값을 할당하지 않기 때문이다.
    * state를 업데이트할때 새로운 값을 할당하는것이 아니라 state를 업데이트하는 함수를 호출하고,
    * 구체적인 값은 리액트에 의해 어딘가에서 관리가된다.
    * useState를 호출해서 리엑트에게 어떤값을 관리해야한다고 선언하기때문에
    * 변수자체를 볼수는 없고, 함수만 호출한다.
    *
    * */

    const [title,setTitle] = useState(props.title);



    //정의된 Card.js를 컴포넌트로 미리정의된 스타일을 자동적으로 갖게한다.
    // 하지만 지정 컴포넌트를 컨텐츠를 감싸는 wrapper로 사용할 수 없다.
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />

            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${props.amount}
                </div>
            </div>
        </Card>
    );
    //onClick={clickHandler()} 였다면 버튼이 눌릴때가 아닌 이 코드라분석될때 JS가 실행한다.
}

export default ExpenseItem;