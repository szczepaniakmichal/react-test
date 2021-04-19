import { ADD } from '../actions/appActions';

export const validateAuthorMiddleware = store => next => action => {
    console.log('Jestesmy w middleware, action', action);

    if (action.type === ADD && !action.payload.author.length) {
        console.log('autor nie ma imienia i nazwiska');
        return;
    }

    next(action);
}

// alternative notation

// export const validateAuthorMiddleware = ({dispatch}) => next => ({payload, type}) => {
//
//     if (type === ADD && !payload.author.length) {
//         console.log('autor nie ma imienia i nazwiska');
//         return;
//     }
//
//     next({payload, type});
// }