// ch01 첫 컴포넌트 만들기
// ex1)
/*const Hello = () => {
    <p>Hello</p>
}
export default Hello;*/

// ex2)
import World from "./World";
import styles from "./Hello.module.css"
import {useState} from "react";

// JSX는 하나의 태그만 들어갈 수 있다.
export default function Hello(){

//    let name = "Mike"
    const [name, setName] = useState('Mike')
    // function changeName(){
    //     setName(name === "Mike" ? "Jane" : "Mike";)
    // }

    return (
        <>
            <h1>state</h1>
            <h2 id = "name">{name}</h2>
            <button onClick={() => {
                setName(name === "Mike" ? "Jane" : "Mike")
            }}>Change</button>
        </>
    );
}