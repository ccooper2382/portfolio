import Image from 'next/image'
import styles from './page.module.css'
import profilePic from '/public/profilepic/TagonLogoLayered.png'
import htmlJsCss
    from '/public/toolboxLogos/png-clipart-website-development-html-cascading-style-sheets-javascript-css3-html-logo-web-design-text.png'
import reactLogo from '/public/toolboxLogos/222-2224705_react-js-logo.png'
import nextLogo from 'public/toolboxLogos/Getting-Started-with-NextJS.jpg'
import gitLogo from 'public/toolboxLogos/2color-lightbg@2x.png'
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <article className={styles.article__flexContainer}>
                <section className={styles.bio__flexItem}>
                    <h1>Greetings!</h1>
                    <aside>
                        <Image src={profilePic} alt="picture of author" width={100} height={100}/>
                        <p> I&#39;m Caleb, a dedicated web developer with an unconventional journey that has led me from
                            the driver&#39;s
                            seat of a bus to the dynamic world of web development. Let me share a bit about my story and
                            what drives my
                            passion for creating exceptional web experiences.</p>
                    </aside>
                </section>
                <section className={styles.bio__flexItem}>
                    <h1>My Toolbox</h1>
                    <aside>
                        <div>
                            <Image src={htmlJsCss} alt='Html, Css and JavaScript' width='auto' height={100}/>
                            <Image src={reactLogo} alt='React' width='auto' height={100}/>
                        </div>
                        <div>
                            <Image src={nextLogo} alt='NextJs' width='auto' height={100}/>
                            <Image src={gitLogo} alt='Git' width='auto' height={100}/>
                        </div>
                    </aside>

                </section>
            </article>
            <article>
                <h1>Projects</h1>
                <nav className={styles.article__flexContainer}>
                    <section className={styles.project__flexItem}>
                        <h2>
                            <Link href="/Pig">Let&#39;s Play Pig!</Link>
                        </h2>
                        <p>Let&#39;s Play PIG! is a web-based dice game that challenges players to accumulate points by
                            rolling the die.
                            The objective is to reach a total of 100 points to win the game. Rolling a 1 ends the
                            player&#39;s turn and
                            forfeits the points earned during that roll, though it doesn&#39;t erase the entire score
                            from previous turns.</p>

                        <p>This was originally an assignment in my client-side development class that I decided to try
                            to recreate with React.</p>

                        <p>The first challenge I faced was when the state kept resetting when I clicked the roll button
                            to roll the die.
                            The result would flash up for an instant then revert to default. It turned out that I had
                            forgotten that the
                            button element has a default of submit when it is within a form element.</p>

                        <p>I did some experimenting with TailwindCSS. Aside from having trouble getting it to work in
                            the project,
                            it seemed like a useful technology, particularly for speed. However, I ended up using CSS
                            modules instead
                            since, at this point in my education, I&#39;m trying to learn rather than just get things
                            done.</p>

                        <p>I considered using React Router to move between the start, game, and victory pages and back.
                            In the end, I decided against it. Mainly, it just seemed like overkill. For a larger app, it
                            would be a
                            good fit, but in this case, I just created a state element that keeps track of what page
                            should be displayed.</p>

                        <p>Overall, I learned a great deal from this project. I got some good experience with React, CSS
                            modules, and
                            particularly JSON, which had always been a bit arcane to me.</p>

                    </section>
                    <section className={styles.project__flexItem}>
                        <h2>
                            <Link href="/RickAndMorty">Rick and Morty Reference</Link>
                        </h2>
                    </section>
                    <section className={styles.project__flexItem}>
                        <h2>
                            <Link href='/'>This Portfolio</Link>
                        </h2>
                    </section>
                </nav>
            </article>
        </main>
    )
}
