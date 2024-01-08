
import Image from 'next/image'
import Header from '../../components/Header'
import Work from "../../components/Work"
import Contact from "../../components/Contact"
import About from '../../components/About'
import TechStack from "../../components/TechStack"
import { Josefin_Sans } from 'next/font/google'

const js = Josefin_Sans({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className={js.className}>
     <Header />
     {/* <iframe style={{ borderRadius: "12px", width: "100%", height: "352", frameBorder: "0", allowfullscreen: "", allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture", loading:"lazy"}} src="https://open.spotify.com/embed/track/2F7dO7OCqrxff66epaNPEU?utm_source=generator" /> */}
     <section id="about" ><About/> </section>
     <section id="work" > <Work /></section>
     <section id="contact" > <Contact /></section>
     <section id="tech" > <TechStack /></section>
    </main>
  )
}
