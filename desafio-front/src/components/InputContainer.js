import React from 'react'
import './InputContainer.css'

const InputContainer = () => {
  return (
    <div className='input_container'>
      <input className='input' type="text" />
      <button className='submit_button' type='submit'>Calcular</button>
    </div>
  )
}

export default InputContainer