import './App.css';
import Hello from './component/Hello';
import Welcome from "./component/Welcome";
import styles from "./App.module.css"

// 이것이 하나의 컴포넌트, 컴포넌트는 항상 대문자로 시작함
// 함수와 리턴하는 것은 JSX(javascript XML)
function App() {
  return (
    <div className="App">
      <Hello/>
    </div>
  );
}

export default App;
