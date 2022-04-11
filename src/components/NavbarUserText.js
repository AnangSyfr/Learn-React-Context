import React from "react";
import { useAppContext } from "../context/appContext";

const NavbarUserText = () => {
    const [state] = useAppContext();
    return <div>Hello {state.user.nama}</div>;
};

export default NavbarUserText;
