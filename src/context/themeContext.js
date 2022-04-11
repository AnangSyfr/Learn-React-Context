import { createContext, useContext, useReducer } from "react";
export const ThemeContext = createContext({
    empty: true,
});

export const useThemeContext = () => {
    return useContext(ThemeContext);
};

const reducer = (state, action) => {
    switch (action.type) {
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
    theme: "dark",
};

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const themeContextValue = [state, dispatch];

    return (
        <ThemeContext.Provider value={themeContextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
