export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';

export const addRate = ({author, comment, rate}) => (
    {
        type: ADD,
        payload: {
            author,
            comment,
            id: Math.floor(Math.random() * 10000),
            rate,
        }
    }
);

export const deleteRate = id => (
    {
        type: DELETE,
        payload: {
            id,
        }
    }
);

// uzyto destrukturyzacji danych wejsciowych
export const editRate = (data) => (
    {
        type: EDIT,
        payload: {
            ...data
        }
    }
)



