import React, { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export const useAlert = () => {
    return useContext(AlertContext);
};

export const ContextProvider = ({ children }) => {
    const [modal, setModal] = useState(false);

    return (
        <AlertContext.Provider value={{ modal, setModal }}>
            {children}
        </AlertContext.Provider>
    );
};
