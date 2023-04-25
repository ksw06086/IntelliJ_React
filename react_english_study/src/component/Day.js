import dummy from '../db/data.json'
import {useParams} from "react-router-dom";
import Word from "./Word";
import {useEffect, useState} from "react";

export default function Day() {
    // dummy.words
    // 단어의 날짜가 1인 요소들만 출력
    const { day } = useParams(); // 얘가 문자임
    const [words, setWords] = useState([])

    // useEffect안에 변수를 사용했는데 그럼 변할 수 있는 값인데 한번만 실행되다보니
    // 변경되어도 반영이 안된다고 하여 경고가 나옴 그래서 아래에 day를 배열에 넣어줘서
    // 변경이 되면 반영될 수 있도록 해주어야 함
    useEffect(() => {
        fetch(`http://localhost:3001/words?day=${day}`)
            .then(res => {
                return res.json();
            }).then(data => {
                setWords(data)
            })
    }, [day])

    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                {words.map(word => (
                    <Word word={word} key={word.id} />
                ))}
                </tbody>
            </table>
        </>
    )
}