'use client'
import { createContext, useEffect, useState } from "react";
import language0 from '/public/assets/language0.json'
import language1 from '/public/assets/language1.json'
import language2 from '/public/assets/language2.json'
import language3 from '/public/assets/language3.json'
export const Context=createContext()

export const ContextProvider=({children})=>{
    const [language, setLanguage]=useState(0)
    const [text, setText]=useState(language0)
    useEffect(()=>{
        switch(language){
            case 1: setText(language1);
            break;
            case 2: setText(language2);
            break;
            case 3: setText(language3);
            break
            default: setText(language0)
            break
        }
    },[language])
    
    return(
        <Context.Provider value={{
            text, setText,
            language, setLanguage
        }}>
        {children}
        </Context.Provider>
    )
}
