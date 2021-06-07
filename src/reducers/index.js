import { combineReducers } from 'redux';

const initialState = {

    cars: [
        {brand: 'BMW', horsepower: '240', color: 'black', index: 0},
        {brand: 'Audi', horsepower: '560', color: 'blue', index: 1},
        {brand: 'Mercedes', horsepower: '330', color: 'silver', index: 2},
    ]
}

const carsReducer = () => {
    return initialState.cars;
    // return [
    //     {brand: 'BMW', horsepower: '240', color: 'black', index: 0},
    //     {brand: 'Audi', horsepower: '560', color: 'blue', index: 1},
    // ]
};

// console.log("carsReducer()", carsReducer);

const carSelectedReducer = (carSelected = null, action) => {
    if (action.type === 'CAR_SELECTED') {
        return action.payload;
    }
    return carSelected;
};

const changePowerReducer = (state = initialState.cars, action) => {
    if (action.type === 'CAR_CHANGE_POWER') {
        console.log("change power");
        const i = action.index;
        console.log("action.index",action.index)
        return [
            ...state.slice(0, i),
            {...state[i], horsepower: action.payload},
            ...state.slice(i + 1)
        ]
    }
    return state;
}


// reducer is a global state
export default combineReducers({
    cars: carsReducer,
    carSelected: carSelectedReducer,
    changePower: changePowerReducer,
})