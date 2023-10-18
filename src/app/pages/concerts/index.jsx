"use client"
import { Context } from "@/app/hooks/hook";
import Link from "next/link";
import { useContext } from "react";


export default function Concerts() {
    const context = useContext(Context);
    const limitedConcert= context.concerts.slice(0,3)
    const concerts= limitedConcert.map((concert)=>(
      <div key={concert.id}>
        <div className="flex">
          <div>_______</div>
          <div>{concert.day}</div>
          <div>_______</div>
        </div>
        <div className="flex flex-col items-center">
          <span>{concert.month}</span>
          <span>{concert.place}</span>
        {concert.person1 && <span>{concert.person1}</span>}
        {concert.person2 && <span>{concert.person2}</span>}
        {concert.person3 && <span>{concert.person3}</span>}
        {concert.person4 && <span>{concert.person4}</span>}
        </div>
       
      </div>
    ))
  return (
    <div className="flex justify-center bg-gradient-radial from-gradiant1 from-20% via-gradiant2 via-60% to-gradiant3 to-70% mt-[-1px]">
        <div className=" bg-nextConcertbg bg-cover  bg-center w-11/12 rounded-lg">
          <div className="flex items-center flex-col bg-white/75 w-full rounded-lg">
            <h3 className="font-lora text-2xl font-bold ">{context.text.nextConcertTitle}</h3>
              {concerts}

              <Link href="/concerts">{context.text.concertsButton}</Link>
              </div>
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