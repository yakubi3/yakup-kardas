import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loading from './components/Loading'

function App() {
  const [isDark, setIsDark] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const html = document.documentElement
    if (isDark) {
      html.classList.add('dark')
      document.body.classList.add('dark')
    } else {
      html.classList.remove('dark')
      document.body.classList.remove('dark')
    }
  }, [isDark])

  useEffect(() => {
    // Loading ekranını 3 saniye sonra kaldır
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <LanguageProvider>
      <AnimatePresence>
        {isLoading && <Loading />}
      </AnimatePresence>
      
      {!isLoading && (
        <div className="min-h-screen">
          <Navbar toggleTheme={toggleTheme} isDark={isDark} />
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </LanguageProvider>
  )
}

export default App
