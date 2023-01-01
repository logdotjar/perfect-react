# What is "Component"?
<u>왜 리액트에서 중요한 개념일까?</u><br>
**모든 사용자 인터페이스는 컴포넌트로 구성되어있기 때문이다.<br>(Because all use interfaces in the end are made up of components.)**
<br>
1. 재사용성은 컴포넌트의 특징 중 하나이다.
2. 컴포넌트는 아주 작은 단위로도 나눌 수 있다. 
3. 모든 사용자 인터페이스는 컴포넌트로 나눌 수 있다 ex) 입력창, 버튼, 출력 값이 될 아이템 
4. 모든 종류의 웹 응용프로그램은 이렇게 컴포넌트로 나뉠 수 있다.
<br>
   
>**리액트는 이런 컴포넌트에 관한 모든 것을 가리킨다.**<br>
각각의 컴포넌트를 구축하고 리액트에게 최종 사용자 인터페이스에서 어떻게 구성할것인지 명령을 내릴수있다.<br>

### Why Components?
<u>왜 컴포넌트를 일까?</u>
- 재사용성(Reusability)
  - 재사용가능한 블록은 반복을 피할 수 있게  해준다. *  (Don't repeat yourself)
    
- 우려되는 과, 분리(Separation of Concerns)
    - 코드 베이스를 작고 관리 가능한 단위로 유지할 수 있게 해주며, 모든 HTML과 자바스크립트 로직 그리고 사용자 인터페이스가 들어있는 커다란 파일로 존재하는것이 아니다.
    - 각각의 컴포넌트는 명확한 사용성과 목적에집중할 수 있다.
    - 유지 관리하기 쉬운 작은 단위의 코드로 유지되게 하는 것이다.
    - (Don't do too many things in one and the same place)
    
    
**프로그래밍의 관점에서** 여러개의 작은 함수를 사용하며, 코드를 잘게 나누어 필요에 따라 인터페이스를 구축한다.  <br>(Split big chunks of code into multiple smaller functions)
<br>
### How Is A Component Built?
<u>컴포넌트는 어떻게 만들어질까?</u>

사용자 인터페이스 구 = HTML + CSS + Javascript<br>
리액트로 작업할때 컴포넌트를 구축해서
구축한 컴포넌트에 HTML,CSS,Javascript 를 결합하고 
전체 사용자 인터페이스를 구축하기 위해 이 컴포넌트를 결합한다.<br>
대부분의 리액트 컴포넌트는 HTML 과 Javasript 를 결합하는 것에 관한  것으로 CSS는 그 중요도가 상대적으로 낮다.<br>


### 리액트는 HTML과 Javascript 그리고 CSS로 구성된 재사용가능하고 반응하는 컴포넌트를 만들수 있게 한다.<br>
(React allows you to create **re-usable and reactive components** consisting of **HTML and Javascript**(and CSS))
<br>


이러한 컴포넌트를 만들기 위해서 리액트는 ***선언적 접근방식(Declarative Approach)*** 을 사용한다.<br>
리액트는 목표상태 또는 다양한 상황에 따라 다른 목표 상태를 정의하는것이 아주 중요한다.<br>
(Define the desired target states and let React figure out the actual Javascript DOM instructions)<br><br>
리액트는 실제 웹페이지에서 어떤 요소가 추가,삭제,업데이트 되어야 하는지 해결하는 것이다.<br>
자바스크립트에서 하는것처럼 직접 구체적인 DOM을 업데이트하는 지침들을 작성할 필요가 없다.<br>
대신, ***리액트에서는 최종 상태와 어떤상황에서 어떤 상태가 사용되어야 하는지 정의하면 된다.*** 
그리고 리액트는 이 모든 작업을 숨어서 처리한다.


### Build your own, custom HTML Elements
<u>리액트는 자신만의 HTML 요소를 만들고 결합해서 사용자 인터페이스를 구축할 수 있다.
</u>

