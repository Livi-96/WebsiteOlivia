
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

     <section id="about" ><About/> </section>
     <section id="work" > <Work /></section>
     <section id="contact" > <Contact /></section>
     <section id="tech" > <TechStack /></section>
    </main>
  )
}
