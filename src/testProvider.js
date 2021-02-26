import React from "react";

import {AppContext} from "./context/AppContext";

const TestProvider = () => (
    <AppContext.Consumer>
        {
            ({url}) => (
                <div>
                    <span>testProvider: </span>
                    <span>{url}</span>
                </div>

            )
        }
    </AppContext.Consumer>
)

export default TestProvider;