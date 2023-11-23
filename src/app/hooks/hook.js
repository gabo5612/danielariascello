"use client";
import { createContext, useEffect, useState } from "react";
import englishPack from "/public/assets/englishPack.json";
import englishConcerts from "/public/assets/englishConcerts.json";
import spanishPack from "/public/assets/spanishPack.json";
import spanishConcerts from "/public/assets/spanishConcerts.json";
import frenchPack from "/public/assets/frenchPack.json";
import frenchConcerts from "/public/assets/frenchConcerts.json";
import germanPack from "/public/assets/germanPack.json";
import germanConcerts from "/public/assets/germanConcerts.json";
import useSound from "use-sound";
import Image from "next/image";
export const Context = createContext();
/*
const date =new Date()
const day= date.getDate().toString()
const month= date.getMonth()
const year=  date.getFullYear()

const formattedDate = day+ month + year
hacer una funcion superior que haga persistencia en los datos ya que por el momento no esta manteniendo los datos
*/

export const ContextProvider = ({ children }) => {

  const english = "/assets/us.svg";
  const german = "/assets/german.svg";
  const spanish = "/assets/spain.svg";
  const french = "/assets/france.svg";

  const [language, setLanguage] = useState(0);
  const [text, setText] = useState(englishPack);
  const [languageImg, setLanguageImg] = useState(english);
  const [concerts, setConcerts] = useState(englishConcerts);
  const [matches, setMatches] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [languagePool, setLanguagePool]=useState([english, german, spanish, french])
  const [play, { pause }] = useSound("/sounds/Faure.mp3");
  const [isPlaying, setIsPlaying] = useState(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isHome, setIsHome] = useState(true);
  console.log(isHome)
  const languagePools = languagePool.map((languagePool) => (
    <Image
      key={languagePool}
      alt=""
      src={languagePool}
      height={25}
      width={25}
      onClick={() => handleLanguagePool(languagePool)}
      className="cursor-pointer z-50"
    />
  ));

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMatches(window.matchMedia("(min-width: 768px)").matches);

      const handleMatchChange = (e) => setMatches(e.matches);
      const mediaQueryList = window.matchMedia("(min-width: 768px)");

      mediaQueryList.addEventListener("change", handleMatchChange);

      return () => {
        mediaQueryList.removeEventListener("change", handleMatchChange);
      };
    }
  }, []);

  useEffect(() => {
    switch (language) {
      case 1:
        setText(spanishPack);
        setConcerts(spanishConcerts);
        setLanguageImg(spanish);
        setOpenLanguage(false)
        break;
      case 2:
        setText(frenchPack);
        setConcerts(frenchConcerts);
        setLanguageImg(french);
        setOpenLanguage(false)
        break;
      case 3:
        setText(germanPack);
        setConcerts(germanConcerts);
        setLanguageImg(german);
        setOpenLanguage(false)
        break;
      default:
        setText(englishPack);
        setConcerts(englishConcerts);
        setLanguageImg(english);
        setOpenLanguage(false)
        break;
    }
  }, [language]);


  const handleLanguagePool= (languagePool) =>{
    if(languagePool=== spanish){
      setLanguage(1)
    }else if(languagePool===french){
      setLanguage(2)
    }else if(languagePool===german){
      setLanguage(3)
    }else{
      setLanguage(0)
    }    
  }

  const handlePlaying = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };
  const handleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  const handleHome = (value) => {
    if(value===0){
      setIsHome(true)
    }else{
      setIsHome(false)
    }
  };
  return (
    <Context.Provider
      value={{
        text,
        setText,
        language,
        setLanguage,
        languageImg,
        setLanguageImg,
        concerts,
        setConcerts,
        isPlaying,
        setIsPlaying,
        handlePlaying,
        handleMenu,
        handleHome,
        handleLanguagePool,
        french,
        spanish,
        german,
        english,
        matches,
        setMatches,
        isHome,
        setIsHome,
        menuIsOpen,
        setMenuIsOpen,
        openLanguage,
        setOpenLanguage,
        languagePool, 
        setLanguagePool,
        languagePools
      }}
    >
      {children}
    </Context.Provider>
  );
};
