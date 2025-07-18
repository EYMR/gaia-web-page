"use client";

import React from "react";
import {
    ThemeProvider,
    CssBaseline,
    createTheme,
    StyledEngineProvider,
} from "@mui/material";

/* ——— Tema MUI centralizado ——— */
const theme = createTheme({
    palette: {
        primary: {main: "#16a34a"}, // Verde marca
        secondary: {main: "#ffffff"},
    },
    typography: {
        fontFamily: "var(--font-geist-sans)",
    },
});

/* ——— Provider wrapper ——— */
export default function Providers({
                                      children,
                                  }: {
    children: React.ReactNode;
}) {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}