import React, { createContext, useState } from "react";

// export const contextBbj = {
//     url: 'localhost',
//     toggleUrl: () => {}
// };

// export const AppContext = createContext(contextBbj);
export const AppContext = createContext();

const AppProvider = ({children}) => {

    const [url, setUrl] = useState('localhost')
    const toggleUrl = () => {
        setUrl(url === 'localhost' ? 'testbox' : 'localhost')
    }


    return (
        <AppContext.Provider value={{
            url,
            toggleUrl
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;