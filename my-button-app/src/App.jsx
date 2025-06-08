import React, {useState} from "react";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [inputValue, setInputValue] = useState('')

  const handleClick = () => {
    alert(`Ви натиснули кнопку! Введено: ${inputValue}`)
  }

  return (
    <div>
      <h1>Простий приклад react</h1>
      <Input placeholder="Enter smth" onChange={e => setInputValue(e.target.value)}/>
      <Button text="Click on me" onClick={handleClick}/>
    </div>
  )
}

export default App