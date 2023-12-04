import React from 'react'

export const AgregarNota = () => {
  return (
    <form>
        <input type="text" className='input-add'  name='description' value="Aprender Php" placeholder='¿Que Tarea quieres agregar?'/>

        <button className="btn-add" type='submit'>Añadir</button>
    </form>
  )
}


