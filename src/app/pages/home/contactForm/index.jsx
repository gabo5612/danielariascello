"use client"
import { Context } from "@/app/hooks/hook";
import { useContext } from "react";
import Form from "./form";


export default function ContactForm() {
  const context = useContext(Context);
  return (
    <div className='bg-primary-black flex flex-col items-center mt-[-1px] pb-2  lg:flex-row-reverse '>
        <div className='w-11/12 flex flex-col justify-center bg-formColor rounded-t-lg h-3/5 md:h-[60vh] lg:rounded-none'>
          <h3 className="text-center font-lora text-2xl font-bold my-4">{context.text.contactTitle}</h3>
         
           <Form/>
         
        </div>
        <div className='bg-formImg  bg-cover bg-top h-[40vh] md:h-[60vh] w-11/12 rounded-b-lg lg:rounded-none'>
      
        </div>
    </div>
  )
}
