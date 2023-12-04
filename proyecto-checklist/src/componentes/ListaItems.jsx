import React from 'react'
import { PiTrashFill } from "react-icons/pi";
import ActualizarItem from './ActualizarItem';

const ListaItems = () => {
  return (
    <div>
      <li>
            <span>
                <label htmlFor='' className='container-done'></label>
            </span>
            <ActualizarItem/>
            <button className='btn-delete'><PiTrashFill /></button>
        </li>
       
    </div>
  )
}

export default ListaItems
