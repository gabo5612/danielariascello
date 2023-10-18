"use client"
import { Context } from "@/app/hooks/hook";
import Link from "next/link";
import { useContext } from "react";


export default function Concerts() {
    const context = useContext(Context);
    const limitedConcert= context.concerts.slice(0,3)
    const concerts= limitedConcert.map((concert)=>(
      <div key={concert.id} className="w-10/12">
        <div className="flex justify-center items-center gap-4">
          <div className="w-10/12 border-b border-primary-black"></div>
          <div className="font-cinzel font-extrabold text-3xl font- ">{concert.day}</div>
          <div className="w-10/12 border-b border-primary-black"></div>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-cinzel font-extrabold text-l">{concert.month}</span>
          <span className="font-lora font-bold my-2">{concert.place}</span>
          <div className="mb-4 flex flex-col items-center">
        {concert.person1 && <span className="font-lora text-sm font-medium">{concert.person1}</span>}
        {concert.person2 && <span className="font-lora text-sm font-medium">{concert.person2}</span>}
        {concert.person3 && <span className="font-lora text-sm font-medium">{concert.person3}</span>}
        {concert.person4 && <span className="font-lora text-sm font-medium">{concert.person4}</span>}
        </div>
        </div>
       
      </div>
    ))
  return (
    <div className="flex justify-center bg-gradient-radial from-gradiant1 from-30% via-gradiant2 via-70% to-gradiant3 to-80% mt-[-1px] pb-12">
        <div className=" bg-nextConcertbg bg-cover  bg-center w-11/12 rounded-lg">
          <div className="flex items-center flex-col bg-white/75 w-full rounded-lg">
            <h3 className="font-lora text-2xl font-bold my-4">{context.text.nextConcertTitle}</h3>
              {concerts}

              <Link href="/concerts" className="bg-primary-black px-14 py-5 m-4 text-primary-white rounded-lg text-lg font-lora font-semibold">{context.text.concertsButton}</Link>              </div>
        </div>
    </div>
  )
}
/*
 <button onClick={()=> context.setLanguage(0)}>English</button>
<button onClick={()=> context.setLanguage(1)}>Spanish</button>
<button onClick={()=> context.setLanguage(2)}>French</button>
<button onClick={()=> context.setLanguage(3)}>Germna</button>
*/