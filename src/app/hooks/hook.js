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

  const english = "/assets/us.svg";
  const german = "/assets/german.svg";
  const spanish = "/assets/spain.svg";
  const french = "/assets/france.svg";
  
    const [language, setLanguage]=useState(0)
    const [text, setText]=useState(englishPack)
    const [languageImg, setLanguageImg]=useState(english)
    const [concerts, setConcerts]=useState(englishConcerts)
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      if (typeof window !== 'undefined') { 
        setMatches(window.matchMedia("(min-width: 768px)").matches);
  
        const handleMatchChange = e => setMatches(e.matches);
        const mediaQueryList = window.matchMedia("(min-width: 768px)");
  
        mediaQueryList.addEventListener('change', handleMatchChange);
  
        return () => {
          mediaQueryList.removeEventListener('change', handleMatchChange);
        };
      }
    }, []);
    const [play, {pause}] = useSound('/sounds/Faure.mp3');
    const [isPlaying, setIsPlaying]=useState(false)
    const [menuIsOpen, setMenuIsOpen]=useState(false)
    const [isHome, setIsHome]=useState(true)
    



    useEffect(()=>{
        switch(language){
            case 1: setText(spanishPack);
                    setConcerts(spanishConcerts)
                    setLanguageImg(spanish)
            break;
            case 2: setText(frenchPack);
                    setConcerts(frenchConcerts)
                    setLanguageImg(french)
            break;
            case 3: setText(germanPack);
                    setConcerts(germanConcerts)
                    setLanguageImg(german)
            break
            default: setText(englishPack)
                    setConcerts(englishConcerts)
                    setLanguageImg(english)
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
      const handleHome=()=>{
        setIsHome(!isHome)
      }
    return(
        <Context.Provider value={{
            text, setText,
            language, setLanguage,
            languageImg, setLanguageImg,
            concerts, setConcerts,
            isPlaying, setIsPlaying,
            handlePlaying, handleMenu,
            handleHome, french, spanish, german, english,
            matches,setMatches,
            isHome,setIsHome,
            menuIsOpen, setMenuIsOpen
        }}>
        {children}
        </Context.Provider>
    )
}
