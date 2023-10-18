import Head from "next/head";
import Provider from "./provider";
import {Lora} from 'next/font/google'

const lora= Lora({
  subsets:['latin'],
  display:'swap',
  variable:'--font-lora'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lora.variable}`}>
      <Head>
     
        <title>Daniel Arias</title>
      </Head>
      <Provider>
        <body>{children}</body>
      </Provider>
    </html>
  )
}
