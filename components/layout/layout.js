import Navbar from "../navbar/navbar"
import Head from "next/head"
import path from "../../lib/path"

export default function Layout({children}){
  return(
    <>
     <Head>        
        <title>Space Tourism</title>
        <link rel="icon" type="image/png" href={path('/favicon-32x32.png')} />
      </Head>
      <Navbar/>
      <main>
        { children }
      </main>
    </>
  )
}