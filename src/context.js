import React, { createContext, useContext, useReducer } from "react";

const AlertContext = createContext();

export const useAlert = () => {
    return useContext(AlertContext);
};

const SHOW_ALERT = "show";
const HIDE_ALERT = "hide";

const reducer = (state, action) => {
    switch (action.types) {
        case SHOW_ALERT:
            return { visibles: true };
        case HIDE_ALERT:
            return { visibles: false };
        default:
            return state;
    }
};

export const AlertProvider = ({ children }) => {
    const [stateR, dispatch] = useReducer(reducer, {
        visibles: false,
    });

    const show = () => dispatch({ types: SHOW_ALERT });
    const hide = () => dispatch({ types: HIDE_ALERT });

    return (
        <AlertContext.Provider
            value={{
                visibles: stateR.visibles,
                show,
                hide,
            }}
        >
            {children}
        </AlertContext.Provider>
    );
};