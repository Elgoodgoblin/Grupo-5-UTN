export const reducerNota = (initialState, action) => {

    switch (action.type) {
        case 'Add Nota':
            return [...initialState, action.payload]

        case 'Delete Nota':
            return initialState.filter(todo => todo.id !== action.payload)

        case 'Complete Nota':
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });


        case 'Update Nota':
            return initialState.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        description: action.payload.description,
                    }
                }
                return todo;
            });

        default:
            return initialState
    }

};