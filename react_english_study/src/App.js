import './App.css';
import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";

// 이것이 하나의 컴포넌트, 컴포넌트는 항상 대문자로 시작함
// 함수와 리턴하는 것은 JSX(javascript XML)
function App() {
  return (
    <div className="App">
        <Header/>
        <DayList/>
        <Day/>
    </div>
  );
}

export default App;
