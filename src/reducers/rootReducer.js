import { combineReducers } from 'react-redux';

import { appReducer } from './appReducer'

export const rootReducer = combineReducers(
    {
        rates: appReducer,
    }
)