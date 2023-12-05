import React from 'react'
import ListaItems from './ListaItems'

export const ListaNotas = ({
  notas, 
  handleUpdateNota, 
  handleDeleteNota,
  handleCompleteNota,
}) => {
  return (
    <ul>
      {notas.map(nota => (
      <ListaItems 
        key={nota.id}
        nota={nota}
        handleUpdateNota={handleUpdateNota}
        handleDeleteNota={handleDeleteNota}
        handleCompleteNota={handleCompleteNota}
        />
        ))}
        
    </ul>
  )
}


