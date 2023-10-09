import Head from "next/head";
import Provider from "./provider";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Daniel Arias</title>
      </Head>
      <Provider>
        <body>{children}</body>
      </Provider>
    </html>
  )
}
