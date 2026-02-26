import { Outlet, Link } from 'react-router-dom'
import { useSectionTheme } from '../hooks/useSectionTheme'

export default function RootLayout() {
    const { bgColor } = useSectionTheme()

    return (
        <div
            style={{ backgroundColor: bgColor, transition: 'background-color 0.8s ease'}}
            className="layout-wrapper"  
        >
            <header className="site-header">
                <Link to="/" className="home-link">desde_o_zero</Link>
                {/* futura navbar entra aqui */}
            </header>

            <main>
                <Outlet /> {/*Páginas filhas vão renderizar aqui... */}
            </main>

            <footer className="site-footer">
                <p>© 2025 desde_o_zero — feito com React</p>
            </footer>
        </div>
    )
}