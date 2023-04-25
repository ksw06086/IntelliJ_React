import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export default function DayList(){
    const [days, setDays] = useState([]);

    // 의존성 배열, count가 바뀔 때만 실행됨
    // fetch(API경로) : API 비동기 통신을 위해 사용, Promiss가 반환됨
    // res는 http 응답이고 실제 json은 아님 그래서 json을 사용하면 json으로 변환되고 Promiss를 반환해줌
    useEffect(() => {
        fetch("http://localhost:3001/days")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setDays(data);
            });
    }, [])

    return (
        <>
            <ul className="list_day">
                {days.map(day => (
                    <li key={day.id}>
                        <Link to ={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}