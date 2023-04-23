import dummy from '../db/data.json'
import {useParams} from "react-router-dom";
import Word from "./Word";

export default function Day() {
    // dummy.words
    // 단어의 날짜가 1인 요소들만 출력
    const { day } = useParams(); // 얘가 문자임
    const wordList = dummy.words.filter(word => (
        word.day === Number(day)
    ))

    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                {wordList.map(word => (
                    <Word word={word} key={word.id} />
                ))}
                </tbody>
            </table>
        </>
    )
}