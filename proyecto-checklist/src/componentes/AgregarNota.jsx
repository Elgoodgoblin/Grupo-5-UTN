import React from 'react'

export const AgregarNota = () => {

  const onFormSubmit = e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={onFormSubmit}>
        <input 
        type="text" 
        className='input-add' 
        name='description' 
        value="Aprender Php" 
        placeholder='¿Que Tarea quieres agregar?'/>

        <button className="btn-add" type='submit'>Añadir</button>
    </form>
  )
}


