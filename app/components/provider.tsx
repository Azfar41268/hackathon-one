'use client';

import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "../store/store";

export default function Theme_Provider({ children } : { children : React.ReactNode }) {
    return(
        <ThemeProvider attribute="class">
            <Provider store={store}>
                {children}
                <Toaster />
            </Provider>
        </ThemeProvider>
    )
}