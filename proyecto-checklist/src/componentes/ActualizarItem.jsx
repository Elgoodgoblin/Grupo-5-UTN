import React from 'react'
import { MdModeEdit } from "react-icons/md";

export const ActualizarItem = ({nota, handleUpdateNota}) => {
  return (
    <form>
        <input 
        type="text" 
        className='input-update '  
        name='description' 
        value={nota.description} 
        placeholder='¿Que Tarea quieres agregar?'/>

        <button className="btn-edit" type='submit'><MdModeEdit /></button>
    </form>
  )
}

export default ActualizarItem
