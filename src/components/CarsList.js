import React from 'react';
import { connect } from 'react-redux';
import { carSelected } from "../actions";

import CarDetail from './CarDetail';

const CarsList = ({ cars, carSelected }) => {
    const carsList = cars.map(car => (
        <li key={car.brand}>
            <p>{car.brand}</p>
            <p>{car.horsepower}</p>
            <p>{car.color}</p>
            <button onClick={() => carSelected(car)}>details</button>
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
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps, {carSelected: carSelected})(CarsList);