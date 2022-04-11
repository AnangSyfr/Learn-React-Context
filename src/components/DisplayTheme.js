import { useContext } from "react";
import { ThemeContext, useThemeContext } from "../context/themeContext";

const DisplayTheme = () => {
    const [state] = useThemeContext();
    // console.log(context);
    return <div>{state.theme}</div>;
};

export default DisplayTheme;
