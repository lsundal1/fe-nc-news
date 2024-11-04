import { createContext, useState } from "react";

export const LoggedInContext = createContext();

export const LoggedInProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <LoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </LoggedInContext.Provider>
    );
};