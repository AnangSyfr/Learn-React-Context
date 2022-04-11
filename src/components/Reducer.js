import { useReducer, useState } from "react";

const reducer = (state, action) => {
    // action itu dari parameter onClick
    console.log(state);
    switch (action.type) {
        case "increment":
            return { ...state, counter: state.counter + action.payload };
        case "decrement":
            return { ...state, counter: state.counter - action.payload };
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
    counter: 0,
    theme: "dark",
};

const Reducer = () => {
    // const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
                -
            </button>{" "}
            <span>{state.counter}</span>{" "}
            <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
                +
            </button>
            <br />
            <span>{state.theme}</span>
            <button onClick={() => dispatch({ type: "toggleTheme" })}>
                Change Theme
            </button>
        </div>
    );
};

export default Reducer;
