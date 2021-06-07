import React from 'react';
import { connect } from 'react-redux';
import { carSelected } from "../actions";
import { changePower } from '../actions';

import CarDetail from './CarDetail';

const CarsList = ({ cars, carSelected, changePower }) => {
// const CarsList = (props) => {
//     console.log("this.props", props)
    const carsList = cars.map(car => (
        <li key={car.brand}>
            <p>{car.brand}</p>
            <p>{car.horsepower}</p>
            <p>{car.color}</p>
            <p>{car.quantity && car.quantity}</p>

            <button onClick={() => carSelected(car)}>details</button>
            <input onChange={(e) => changePower(e.target.value, car.index)} type="number"/>
        </li>
    ))

    return (
        <>
            <ul>
            {carsList}
        </ul>
            <CarDetail />
        </>

    )
}

const mapStateToProps = (state) => {
    console.log("state in cars list", state);
    return {
        cars: state.changePower,
    }
}

export default connect(mapStateToProps, {
    carSelected: carSelected,
    changePower: changePower,
})(CarsList);