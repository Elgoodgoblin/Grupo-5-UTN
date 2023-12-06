import React from 'react'
import { PiTrashFill } from "react-icons/pi";
import ActualizarItem from './ActualizarItem';

const ListaItems = ({
  nota, 
  handleUpdateNota, 
  handleDeleteNota,
  handleCompleteNota,
}) => {
  return (
    <div>
      <li>
            <span
              onClick={() => handleCompleteNota(nota.id)}
            >
                <label 
                className={`container-done ${nota.done ? 'active' : ''}`}
                ></label>
            </span>
            <ActualizarItem nota={nota} handleUpdateNota={handleUpdateNota} />
            <button className='btn-delete' onClick={() => handleDeleteNota(nota.id)}>
              <PiTrashFill />
            </button>
        </li>
       
    </div>
  )
}

export default ListaItems
