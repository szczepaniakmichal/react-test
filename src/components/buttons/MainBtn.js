import React from "react";

import {AppContext} from "../../context/AppContext";

export const MainBtn = (props) => {
    const { name, toggleUrl } = props;

    return (
        <AppContext.Consumer>
            {
                ({url}) => (
                    <button className="btn"
                            onClick={toggleUrl}
                    >
                        {name} {url}
                    </button>
                )
            }
        </AppContext.Consumer>
    )
}

