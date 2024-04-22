import React, { useState } from "react";
import InputContainer from "./components/InputContainer";
import './App.css'
import './Reset.css'
import './components/InputContainer.css'

function App() {
  return(

    <div className="App">
        <div className="App_container">
          <h1 className="App_title">Calculadora de Primos<span className="title_underline">_</span></h1>
          <h2 className="App_description">Insira um número para calcular seus primos antecessores</h2>
          <InputContainer />
          <h2 className="App_output_message">O número de primos que antecendem X é Y</h2>
          <h3 className="time_execution">Tempo de execução 0.200s</h3>
        </div>
      </div>
  )
}

export default App;
