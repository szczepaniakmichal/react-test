import { createContext} from "react";

export const contextBbj = {
    url: 'localhost',
    toggleUrl: () => {}
};

export const AppContext = createContext(contextBbj);
