import React, { useRef } from "react";

import TestProvider from "./testProvider";
import { AppContext } from "./context/AppContext";

const Gallery = () => {
    const refButton1 = useRef();

    const click = (e) => {
        console.log(e.target)
        refButton1.current.click();

    }

    return (
        <AppContext.Consumer>
            {
                ({url, toggleUrl}) => (
                    <>
                        <button className="btn btn-1"
                                ref={refButton1}
                                onClick={() => console.log("click button 1!!!")}
                        >button 1
                        </button>

                        <button className="btn btn-2"
                                onClick={(e) => click(e)}
                        >
                            button 2
                        </button>

                        <button onClick={toggleUrl} className="btn">btn 3 - change host</button>
                        <TestProvider />
                    </>
                )
            }
        </AppContext.Consumer>
    )
}

export default Gallery;

