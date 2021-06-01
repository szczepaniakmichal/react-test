import { combineReducers } from 'redux';

const initialState = {
    // cars: {brand: 'BMW', horsepower: '240', color: 'black'},


    cars: [
        {brand: 'BMW', horsepower: '240', color: 'black'},
        {brand: 'Audi', horsepower: '560', color: 'blue'},
        {brand: 'Mercedes', horsepower: '330', color: 'silver'},
    ]
}

const carsReducer = () => {
    return initialState.cars;
    // return [
    //     {brand: 'BMW', horsepower: '240', color: 'black'},
    //     {brand: 'Audi', horsepower: '560', color: 'blue'},
    // ]
};

const carSelectedReducer = (carSelected = null, action) => {
    if (action.type === 'CAR_SELECTED') {
        return action.payload;
    }
    return carSelected;
}

const changePowerReducer = (state = initialState, action) => {
    // console.table(state.cars);
    // console.log("action payload", action.payload);
    if (action.type === 'CAR_CHANGE_POWER') {
        console.log(state)
        return {
            ...state,
            // cars: state.cars.map((car, i) => ({...car, horsepower: action.payload}))


            cars: state.cars && state.cars.map((car, i) => {
                // if (action.payload.index === i) {
                    return {
                        ...car,
                        quantity: action.payload,
                    }
                // }
            })
        }
        // return state;
    }
    return state;
}


// reducer is a global state
export default combineReducers({
    cars: carsReducer,
    carSelected: carSelectedReducer,
    changePower: changePowerReducer,
})