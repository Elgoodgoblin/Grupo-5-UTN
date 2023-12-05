import React from 'react'
import './App.css';
import {AgregarNota} from './componentes/AgregarNota';//Esta se llama en el video TodoAdd
import { ListaNotas } from './componentes/ListaNotas';//Este se llama TodoList
import { useFuncionalidadNota } from './customHooks/funcionalidadNota';

function App() {
  const { 
    notas,
    notasCount,
    pendingNotasCount,
    handleNewNota,
    handleDeleteNota,
    handleCompleteNota,
    handleUpdateNota 
  } = useFuncionalidadNota();
  
  return (
    <>

        <div className='card-no-ta'>
            <h1>Lista de Tareas</h1>
            <div className="counter-notas">
                <h3>N° Tareas: {notasCount}</h3>
                <h3>Pendientes: {pendingNotasCount}</h3>
            </div>
            <div className="add-nota">
                <h3>Agregar Tarea</h3>
                <AgregarNota handleNewNota={handleNewNota}/>
            </div>
            <ListaNotas 
            notas={notas}
            handleUpdateNota={handleUpdateNota}
            handleDeleteNota={handleDeleteNota}
            handleCompleteNota={handleCompleteNota}
            />

        </div>


    </>

  );
}

export default App;
