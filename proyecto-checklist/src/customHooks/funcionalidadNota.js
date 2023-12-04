import { useReducer } from "react"
import { reducerNota } from "../reducerNota"


export const funcionalidadNota = ()  => {

    const initialState = []

    const [state, dispatch] = useReducer(reducerNota, initialState, init)
}