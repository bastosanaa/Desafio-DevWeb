import React, { useState } from "react";
import InputContainer from "./components/InputContainer";
import './App.css'
import './Reset.css'
import './components/InputContainer.css'

function App() {
  const [countPrimes, setCountPrimes] = useState()
  const [inputNumber, setInputNumber] = useState()
  const [timeExecution, setTimeExecution] = useState()

  const handleCountPrimes = (countPrimes) => {
      setCountPrimes(countPrimes);
  };

  const handleInputNumber = (inputNumber) => {
      setInputNumber(inputNumber);
  };

  const handleTimeExecution = (timeExecution) => {
    console.log(timeExecution, "time");
    setTimeExecution(timeExecution);
  }

  return(

    <div className="App">
        <div className="App_container">
          <h1 className="App_title">Calculadora de Primos<span className="title_underline">_</span></h1>
          <h2 className="App_description">Insira um número para calcular seus primos antecessores</h2>
          <InputContainer shareCountPrimes={handleCountPrimes} shareInputNumber={handleInputNumber} shareTimeExecution={handleTimeExecution}/>
          {(countPrimes || countPrimes in [0,1,2]) ? ((inputNumber && countPrimes > 0) ? <h2 className="App_output_message">O número de primos que antecendem {inputNumber} é {countPrimes}</h2> : <h2 className="App_output_message">Esse número nao possui primos antecessores</h2>) : <h2></h2>}
          {timeExecution && <h3 className="time_execution">Tempo de execução {timeExecution} nanosegundos</h3>}
        </div>
      </div>
  )
}


export default App;
