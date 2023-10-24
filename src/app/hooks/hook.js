'use client'
import { createContext, useEffect, useState } from "react";
import englishPack from '/public/assets/englishPack.json'
import englishConcerts from '/public/assets/englishConcerts.json'
import spanishPack from '/public/assets/spanishPack.json'
import spanishConcerts from '/public/assets/spanishConcerts.json'
import frenchPack from '/public/assets/frenchPack.json'
import frenchConcerts from '/public/assets/frenchConcerts.json'
import germanPack from '/public/assets/germanPack.json'
import germanConcerts from '/public/assets/germanConcerts.json'
import useSound from 'use-sound';
export const Context=createContext()
/*
const date =new Date()
const day= date.getDate().toString()
const month= date.getMonth()
const year=  date.getFullYear()

const formattedDate = day+ month + year
*/


export const ContextProvider=({children})=>{
    const [language, setLanguage]=useState(0)
    const [text, setText]=useState(englishPack)
    const [concerts, setConcerts]=useState(englishConcerts)
    const [play, {pause}] = useSound('/sounds/Faure.mp3');
    const [isPlaying, setIsPlaying]=useState(false)
    const [menuIsOpen, setMenuIsOpen]=useState(false)

    useEffect(()=>{
        switch(language){
            case 1: setText(spanishPack);
                    setConcerts(spanishConcerts)
            break;r
            case 2: setText(frenchPack);
                    setConcerts(frenchConcerts)
            break;
            case 3: setText(germanPack);
                    setConcerts(germanConcerts)
            break
            default: setText(englishPack)
                    setConcerts(englishConcerts)
            break
        }
    },[language])

    const handlePlaying=()=>{
        if(isPlaying){
          pause()
          setIsPlaying(!isPlaying)

      
        }else{
          play()
          setIsPlaying(!isPlaying)
  
        }
      }
      const handleMenu=()=>{
        setMenuIsOpen(!menuIsOpen)
      }
    return(
        <Context.Provider value={{
            text, setText,
            language, setLanguage,
            concerts, setConcerts,
            isPlaying, setIsPlaying,
            handlePlaying, handleMenu,
            menuIsOpen, setMenuIsOpen
        }}>
        {children}
        </Context.Provider>
    )
}
