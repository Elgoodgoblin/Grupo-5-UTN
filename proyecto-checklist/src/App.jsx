import React from 'react'
import './App.css';
import {AgregarNota} from './componentes/AgregarNota';//Esta se llama en el video TodoAdd
import { ListaNotas } from './componentes/ListaNotas';//Este se llama TodoList

import { useState } from 'react';

function App() {
  return (
    <>

        <div className='card-to-do'>
            <h1>Lista de Tareas</h1>
            <div className="counter-todos">
                <h3>N° Tareas: 4</h3>
                <h3>Pendientes: 3</h3>
            </div>
            <div className="add-todo">
                <h3>Agregar Tarea</h3>
                <AgregarNota/>
            </div>
            <ListaNotas />

        </div>


    </>

  )
}

export default App;
