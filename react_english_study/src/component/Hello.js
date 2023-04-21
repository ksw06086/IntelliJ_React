// ch01 첫 컴포넌트 만들기
// ex1)
/*const Hello = () => {
    <p>Hello</p>
}
export default Hello;*/

// ex2)
import World from "./World";

// JSX는 하나의 태그만 들어갈 수 있다.
export default function Hello(){
    return (
        <>
            <h1>Hello</h1>
            <World/>
            <World/>
        </>
    );
}