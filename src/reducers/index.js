import { combineReducers } from 'redux';

const carsReducer = () => {
    return [
        {brand: 'BMW', horsepower: '240', color: 'black'},
        {brand: 'Audi', horsepower: '560', color: 'blue'},
    ]
};

const carSelectedReducer = (carSelected = null, action) => {
    if (action.type === 'CAR_SELECTED') {
        return action.payload;
    }
    return carSelected;
}

// reducer is a global state
export default combineReducers({
    cars: carsReducer,
    carSelected: carSelectedReducer,
})