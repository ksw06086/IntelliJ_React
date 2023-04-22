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
import UserName from "./UserName";

// JSX는 하나의 태그만 들어갈 수 있다.
export default function Hello({age}){
    const [name, setName] = useState('Mike')
    const msg = age > 19 ? "성인입니다." : "미성년자입니다."

    return (
        <>
            <h1>state</h1>
            <h2 id = "name">{name}({age}) : {msg}</h2>
            <UserName name={name}/>
            <button onClick={() => {
                setName(name === "Mike" ? "Jane" : "Mike")
            }}>Change</button>
        </>
    );
}