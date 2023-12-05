import { useEffect, useReducer } from "react"
import { reducerNota } from "../reducerNota"


export const useFuncionalidadNota = ()  => {

    const initialState = [];

    const init = () => {
        return JSON.parse(localStorage.getItem('notas')) || []
    };

    const [notas, dispatch] = useReducer(
        reducerNota, 
        initialState, 
        init
    );

    const notasCount = notas.length
    const pendingNotasCount = notas.filter(notas => !notas.done).length

    useEffect(() => {
        localStorage.setItem('notas', JSON.stringify(notas))
    }, [notas]) 

    const handleNewNota = nota => {
        const action = {
            type: 'Add Nota',
            playload: nota,
        };

        dispatch(action)
    };

    const handleDeleteNota = id => {
        const action = {
            type: 'Delete Nota',
            paypload: id,
        };
        
        dispatch(action);
    };

    const handleCompleteNota = id => {
        const action = {
            type: "Complete Nota",
            paypload: id
        };
        dispatch(action)
    };

    const handleUpdateNota = (id, description) => {
        const action = {
            type: "Update Nota",
            paypload: {
                id,
                description
            },
        };
        dispatch(action)
    } ;
    return{
        notas,
        notasCount,
        pendingNotasCount,
        handleNewNota,
        handleDeleteNota,
        handleCompleteNota,
        handleUpdateNota
    };
};