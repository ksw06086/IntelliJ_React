import dummy from '../db/data.json'

export default function Day() {
    // dummy.words
    // 단어의 날짜가 1인 요소들만 출력
    const wordList = dummy.words.filter(word => (
        word.day === 1
    ))

    return (
        <table>
            <tbody>
            {wordList.map(word => (
                <tr>
                    <td>{word.eng}</td>
                    <td>{word.kor}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}