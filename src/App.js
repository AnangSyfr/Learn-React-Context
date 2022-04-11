import React, { useEffect, useState } from "react";
import BtnToggle from "./components/BtnToggle";
import DisplayTheme from "./components/DisplayTheme";
import Navbar from "./components/Navbar";
import NavbarUser from "./components/NavbarUser";
import Setting from "./components/Setting";
import { AppContext, AppProvider } from "./context/appContext";
import { ThemeProvider } from "./context/themeContext";

const App = () => {
    return (
        <>
            <AppProvider>
                <ThemeProvider>
                    <Navbar>Test</Navbar> |
                    <br />
                    <Navbar>
                        <NavbarUser />
                        <Setting />
                    </Navbar>
                    <DisplayTheme />
                    <BtnToggle />
                </ThemeProvider>
            </AppProvider>
        </>
    );
};

export default App;
