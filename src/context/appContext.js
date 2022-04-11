import { createContext, useContext, useReducer } from "react";
import { useState, useEffect } from "react";
export const AppContext = createContext({
    empty: true,
});

export const useAppContext = () => {
    return useContext(AppContext);
};

const reducer = (state, action) => {
    switch (action.type) {
        case "updateUser":
            return { ...state, user: action.payload };
        case "toggleTheme":
            return {
                ...state,
                theme: state.theme === "dark" ? "light" : "dark",
            };
        default:
            throw new Error("unexpected action");
    }
};

const initialState = {
    user: {},
    theme: "dark",
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const user = {
            nama: "Anang",
            avatar: "https://picsum.photos/seed/picsum/200/300",
        };
        dispatch({
            type: "updateUser",
            payload: user,
        });
    }, []);

    const appContextValue = [state, dispatch];

    return (
        <AppContext.Provider value={appContextValue}>
            {children}
        </AppContext.Provider>
    );
};
