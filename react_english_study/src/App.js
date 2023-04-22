import './App.css';
import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";

// 이것이 하나의 컴포넌트, 컴포넌트는 항상 대문자로 시작함
// 함수와 리턴하는 것은 JSX(javascript XML)
function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<DayList/>}/>
                <Route path="/day/:day" element={<Day/>}/>
                <Route path={"*"} element={<EmptyPage/>}/>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
