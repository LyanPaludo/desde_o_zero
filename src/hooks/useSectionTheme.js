import { useState, useEffect } from 'react'

// agora vem o mapa das seções, cada seção vai ter um tema específico:
const SECTION_THEMES = {
  hero:    '#0a0a0f',
  about:   '#0f1a2e',
  work:    '#1a0f2e',
  contact: '#0f2e1a',
}

export function useSectionTheme() {
    const [activeSection, setActiveSection] = useState('hero')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.dataset.section)
                    }
                })
            },
            { threshold: 0.5 } //Isso indica que a seção deve estar 50% visível
        )

        document.querySelectorAll('[data-section]').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return { bgColor: SECTION_THEMES[activeSection] ?? '#0a0a0f' }
}