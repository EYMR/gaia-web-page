"use client";

import {
    createTheme,
    CssBaseline,
    StyledEngineProvider,
    ThemeProvider,
} from "@mui/material";
import React from "react";

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