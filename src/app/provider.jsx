"use client"

import { ContextProvider } from "./hooks/hook"

export default function Provider({children}) {
    return (
        
        <ContextProvider>
            {children}
        </ContextProvider>
    );
}

