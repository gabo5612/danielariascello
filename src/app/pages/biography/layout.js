import {Lora, Cinzel_Decorative, Corinthia} from 'next/font/google'
import '../../globals.css'
const lora= Lora({
    subsets:['latin'],
    display:'swap',
    variable:'--font-lora',
    preload:true
  })
  const cinzelDecorative= Cinzel_Decorative({
    subsets:['latin'],
    display:'swap',
    variable:'--font-Cinzel-Decorative',
    weight:  ["400", "700", "900" ] ,
    preload:true
  })
  const corinthia= Corinthia({
    subsets:['latin'],
    display:'swap',
    variable:'--font-Corinthia',
    weight:['400','700'],
    preload:true
  })
export default function layout({children}) {
  return (
    <div className={`${lora.variable} ${cinzelDecorative.variable} ${corinthia.variable}`}>{children}</div>
  )
}
