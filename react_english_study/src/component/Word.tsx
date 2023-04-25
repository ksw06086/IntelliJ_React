import React, {useState} from "react";

// 이렇게 쓰면 비효율적임 any를 남발하면 안됨
interface IProps { // 이걸 사용하면 안에 어떤 것들이 들어있는지 알수 있고 쓸 수 있어서 오류날 경우가 줄어든다.
    // word: any;
    word: IWord;
}
export interface IWord{
    id: number;
    day: string;
    eng: string;
    kor: string;
    isDone: boolean;
}

export default function Word({word:w}: IProps) {
    const [isShow, setIsShow] = useState(false)
    const [word, setWord] = useState(w)
    const [isDone, setIsDone] = useState(word.isDone)

    function toggleShow() {
        setIsShow(!isShow)
    }
    // isDone 상태 데이터 수정
    function toggleDone() {
        fetch(`http://localhost:3001/words/${word.id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone,
            }),
        }).then(res => {
            if(res.ok){
                setIsDone(!isDone)
            }
        })
    }

    // 삭제 기능
    function del() {
        if(window.confirm("삭제하시겠습니까?")){
            fetch(`http://localhost:3001/words/${word.id}`,{
                method: "DELETE",
            }).then(res => {
                if(res.ok){
                    setWord({
                        ...word,
                        id:0,
                    })
                }
            })
        }

        if(word.id === 0){
            return null;
        }
    }

    return (
        <tr className={isDone?"off":""}>
            <td>
                <input type={"checkbox"} checked={isDone}
                onChange={toggleDone}/>
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow}>{isShow?"뜻 숨기기":"뜻 보기"}</button>
                <button className={"btn_del"} onClick={del}>삭제</button>
            </td>
        </tr>
    )
}