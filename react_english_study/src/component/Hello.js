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
    return (
        <>
            <h1 style={
                {
                    color: '#f00',
                    borderRight: '12px solid #000',
                    marginBottom: '30px',
                    opacity: 1,
                }
            }
            >Hello</h1>
            <div className={styles.box}>Hello</div>
        </>
    );
}