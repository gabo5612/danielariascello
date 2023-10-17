"use client"
import { Context } from "@/app/hooks/hook";
import { useContext } from "react";


export default function Concerts() {
    const context = useContext(Context);
    const limitedConcert= context.concerts.slice(0,3)
    const concerts= limitedConcert.map((concert)=>(
      <div key={concert.id}>
        <div>
          <div>_______</div>
          <div>{concert.day}</div>
          <div>_______</div>
        </div>
        <div>
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
    <div>
        <div>

            <h3>{context.text.nextConcertTitle}</h3>
              {concerts}
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