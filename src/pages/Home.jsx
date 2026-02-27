import PageTransition from '../layouts/PageTransition'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <PageTransition>

            <section data-section="projeto">
                <h1 className={styles.titulos}>SOBRE O PROJETO</h1>
            </section>

            <section data-section="sobre">
                <h1 className={styles.titulos}>SOBRE O AUTOR</h1>
            </section>

            <section data-section="temas">
                <h1 className={styles.titulos}>TEMAS ATUAIS</h1>
            </section>

            <section data-section="sugestoes">
                <h1 className={styles.titulos}>SUGESTÕES</h1>
            </section>

        </PageTransition>
    )
}