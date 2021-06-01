export const carSelected = (car) => {
    return {
        type: 'CAR_SELECTED',
        payload: car,
    }
};

export const changePower = (horsePower) => {
    console.log("changePower", horsePower);
    return {
        type: 'CAR_CHANGE_POWER',
        payload: horsePower,
    }
}