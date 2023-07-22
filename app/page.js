import Image from 'next/image'
import styles from './page.module.css'
import profilePic from '/public/profilepic/TagonLogoLayered.png'
import htmlJsCss from '/public/toolboxLogos/png-clipart-website-development-html-cascading-style-sheets-javascript-css3-html-logo-web-design-text.png'
import reactLogo from '/public/toolboxLogos/222-2224705_react-js-logo.png'
import nextLogo from 'public/toolboxLogos/Getting-Started-with-NextJS.jpg'
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
    <article>
      <section>
        <h1>Greetings!</h1>
        <Image src={profilePic} alt="picture of author" width={100} height={100}/>
        <p> I&#39;m Caleb, a dedicated web developer with an unconventional journey that has led me from the driver&#39;s
          seat of a bus to the dynamic world of web development. Let me share a bit about my story and what drives my
          passion for creating exceptional web experiences.</p>
      </section>
      <section>
        <h1>My Toolbox</h1>
        <aside>
          <Image src={htmlJsCss} alt='Html, Css and JavaScript'/>
          <Image src={reactLogo} alt='React'/>
          <Image src={nextLogo} alt='NextJs'/>
        </aside>

      </section>
    </article>
    <article>
      <h1>Projects</h1>
      <section>
        <Link href="/Pig">Let&#39;s Play Pig!</Link>
      </section>
      <section>
        <Link href="/RickAndMorty">Rick and Morty Reference</Link>
      </section>
      <section>
        <Link href='/'>This Portfolio</Link>
      </section>
    </article>
    </main>
  )
}
