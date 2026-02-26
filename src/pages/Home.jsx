import PageTransition from '../layouts/PageTransition'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <PageTransition>

            <section data-section="hero">
                <h1 className={styles.tituloUm}>Hero</h1>
            </section>

            <section data-section="about">
                <h1 className={styles.tituloDois}>About</h1>
            </section>

            <section data-section="work">
                <h1 className={styles.tituloTres}>Work</h1>
            </section>

            <section data-section="contact">
                <h1 className={styles.tituloQuatro}>Contact</h1>
            </section>

        </PageTransition>
    )
}