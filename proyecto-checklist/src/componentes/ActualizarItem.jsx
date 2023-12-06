import React, { useState, useRef } from 'react'
import { MdModeEdit } from "react-icons/md";

export const ActualizarItem = ({nota, handleUpdateNota}) => {

  const [disabled, setDisabled] = useState(true)

  const focusInputRef = useRef();


  const onFormSubmit = e => {
    e.preventDefault()

    setDisabled(!disabled)

    focusInputRef.current.focus()
  };


  return (
    <form onSubmit={onFormSubmit}>
        <input 
        type="text" 
        className={`input-update ${
          nota.done ? 'text-decoration-dashed' : ''
      }`}  
        name='description' 
        value={nota.description} 
        placeholder='¿Que Tarea quieres agregar?'/>
        readOnly={disabled}
        ref={focusInputRef}

        <button className="btn-edit" type='submit'><MdModeEdit /></button>
    </form>
  )
}

export default ActualizarItem
