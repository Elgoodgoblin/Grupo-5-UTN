import { useState } from "react";

export const useForm = (formaInicial = {}) => {

    const [formState, setFormState] = useState(formaInicial);


    const onInputChange = (e) => {
        const nombre = e.target.nombre;
        const valor = e.target. valor;

        setFormState({
            ...formState,
            [nombre]: valor,     
        });

    };

    const onResetForm = () => {
        setFormState(formaInicial)
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };
};