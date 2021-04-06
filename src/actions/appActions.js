export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';

const addRate = ({author, comment, rate}) => (
    {
        type: ADD,
        payload: {
            author,
            comment,
            rate,
        }
    }
);

const deleteRate = id => (
    {
        type: DELETE,
        payload: {
            id,
        }
    }
);

// uzyto destrukturyzacji danych wejsciowych
const editRate = (data) => (
    {
        type: EDIT,
        payload: {
            ...data
        }
    }
)



