import React, { useRef, useState } from 'react';
import './InputContainer.css'

function InputContainer({shareCountPrimes, shareInputNumber, shareTimeExecution}) {
  const [number, setNumber] = useState('');
  const inputRef = useRef(null);
  
  const handleChange = () => {
    console.log("valor",inputRef.current.value)
    if (inputRef.current){
      if (inputRef.current.value){
        setNumber(inputRef.current.value);
        shareInputNumber(inputRef.current.value)
      } else {
        setNumber('')
        shareInputNumber('')
        shareCountPrimes('')
        shareTimeExecution('')
      }
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/calculadoraPrimos?number=${number}`);
      const data = await response.json();
      shareCountPrimes(data.countPrimeNumbers)
      shareTimeExecution(data.timeExecution)
    } catch (error){
      console.error("Erro ao calcular primos:", error);
    }
    
  }
  
    return (
      <div className='input_container'>
        <input ref={inputRef} className='input' type="number" value={number} onChange={handleChange} />
        <button className='submit_button' type='button' onClick={handleSubmit} >Calcular</button>
      </div>
    )
  
}

export default InputContainer