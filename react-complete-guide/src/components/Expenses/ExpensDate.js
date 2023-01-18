//ExpenseDate를 ExpenseItem의 컴포넌트로 사용
import './ExpenseDate.css'

const ExpenseDate = (props) => {
    //JSX문법 중괄호 사이에 중괄호구문, 로직을 기재하기 보다는 깔끔한 코드관리를 위해서 변수나 상수를 생성
    //date객체이기때문에 expenseDate로 바로 출력불가능
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date.getFullYear();
    // const month = props.date?.toLocaleString("en-US", { month: "long" });
    // const day = props.date?.toLocaleString("en-US", { day: "2-digit" });
    // const year = props.date?.getFullYear();

    console.log("here!",month,day,year);

    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );

}

export  default  ExpenseDate;