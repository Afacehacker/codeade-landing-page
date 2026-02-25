import { useEffect } from 'react'

/**
 * Custom hook that adds 'visible' class to elements with 'scroll-reveal' class
 * when they enter the viewport.
 */
export function useScrollReveal() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.12 }
        )

        const elements = document.querySelectorAll('.scroll-reveal')
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])
}
