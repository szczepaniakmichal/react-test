import { ADD, EDIT, DELETE} from "../actions/appActions";

const appReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        case EDIT:
            return state.map(currRate => {
                if (currRate.id !== action.payload.id){
                    return currRate;
                }

                const { author, comment, rate } = action.payload;

                return (
                    {
                        author,
                        comment,
                        id: currRate.id,
                        rate,
                    }
                )
            });
        case DELETE:
            return state.filter(currEl => currEl.id !== action.payload.id);
        default:
            console.warn(`Nie ma akcji typu: ${action.type}`)
            return state;
    }

    return state;
}