export const carSelected = (car) => {
    return {
        type: 'CAR_SELECTED',
        payload: car,
    }
};

// zobacz 00:23
export const changePower = (horsePower, index) => {
    console.log("changePower", horsePower);
    return {
        type: 'CAR_CHANGE_POWER',
        payload: horsePower,
        index,
    }
}