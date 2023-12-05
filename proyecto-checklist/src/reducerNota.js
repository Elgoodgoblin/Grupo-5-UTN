export const reducerNota = (initialState, action) => {

    switch (action.type) {
        case 'Add Nota':
            return [...initialState, action.payload]

        case 'Delete Nota':
            return initialState.filter(nota => nota.id !== action.payload)

        case 'Complete Nota':
            return initialState.map(nota => {
                if (nota.id === action.payload) {
                    return {
                        ...nota,
                        done: !nota.done
                    }
                }
                return nota;
            });


        case 'Update Nota':
            return initialState.map(nota => {
                if (nota.id === action.payload.id) {
                    return {
                        ...nota,
                        description: action.payload.description,
                    }
                }
                return nota;
            });

        default:
            return initialState
    }

};