import { useThemeContext } from "../context/themeContext";

const BtnToggle = () => {
    const [, dispatch] = useThemeContext();
    return (
        <button onClick={() => dispatch({ type: "toggleTheme" })}>
            Toggle Theme
        </button>
    );
};

export default BtnToggle;
