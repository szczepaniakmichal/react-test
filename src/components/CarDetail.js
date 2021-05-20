import React from 'react';
import { connect } from 'react-redux';

const CarDetail = ({ carSelected }) => {
    if (!carSelected) {
        return 'Select a car'
    }
    const { brand, horsepower, color } = carSelected;

    return (
        <>
        <div>Brand: {brand}</div>
        <div>Power in HP: {horsepower}</div>
        <div>Color: {color}</div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        carSelected: state.carSelected,
    }
}

export default connect(mapStateToProps)(CarDetail);