// ch01 첫 컴포넌트 만들기
// ex1)
/*const Hello = () => {
    <p>Hello</p>
}
export default Hello;*/

// ex2)
import World from "./World";
import styles from "./Hello.module.css"

// JSX는 하나의 태그만 들어갈 수 있다.
export default function Hello(){

    function showName(){
        console.log("Mike")
    }
    function showAge(age){
        console.log(age)
    }

    function showText(e){
        console.log(e.target.value)
    }

    return (
        <>
            <h1>Hello</h1>
            <button onClick={showName}>Show name</button>
            <button onClick={() => {
                showAge(30)
            }}>Show age</button>
            <input type="text" onChange={(ev) => {
                showText(ev)
            }}/>
        </>
    );
}