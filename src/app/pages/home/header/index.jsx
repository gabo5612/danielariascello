"use client";
import { useContext } from "react";
import { Context } from "@/app/hooks/hook";

import PlayButton from "@/app/components/playButton";
import NavBar from "../../../components/navBar";
import VideoBG from "./video";
import HeaderText from "./text";

export default function Header() {
  const context = useContext(Context);

  return (
    <div className="h-screen w-full ">      
     
      <NavBar/>
      <HeaderText/>
      <VideoBG/>
    </div>
  );
}
