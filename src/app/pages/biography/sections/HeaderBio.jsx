import { Context } from "@/app/hooks/hook";
import React, { useContext } from "react";

export default function HeaderBio() {
  const context = useContext(Context);
  return (
    <div
      className={
        context.matches
          ? "bg-bioBgDesktop h-[70dvh] bg-center bg-cover"
          : "bg-bioBg h-[100dvh] bg-center bg-cover"
      }
    >
      <div className='bg-dark/25 h-full flex items-center justify-center lg:justify-start lg:pl-24'>
        <h2 className='text-5xl text-primary-white font-cinzel lg:text-[7rem] custom-shadow-text'>{context.text.biography}</h2>
      </div>
    </div>
  );
}
