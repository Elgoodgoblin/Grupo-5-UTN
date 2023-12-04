import React from 'react'
import { MdModeEdit } from "react-icons/md";

const ActualizarItem = () => {
  return (
    <form>
        <input type="text" className='input-update '  name='description' value="Aprender Php" placeholder='¿Que Tarea quieres agregar?'/>

        <button className="btn-edit" type='submit'><MdModeEdit /></button>
    </form>
  )
}

export default ActualizarItem
