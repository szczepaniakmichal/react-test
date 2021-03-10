import React from "react";
import { Route, Redirect } from 'react-router-dom';

export const Admin = () => {
    const permission = false;

    return (
        <Route render={() => (
            <>
                {permission ? (<h3>Panel admina - dzień dobry</h3>) : (<Redirect to='/login'/>)}
            </>

        )} />
    )

}
