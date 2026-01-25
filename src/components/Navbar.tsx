import { motion } from 'framer-motion'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

interface NavbarProps {
  toggleTheme: () => void
  isDark: boolean
}

const Navbar = ({ toggleTheme, isDark }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isResumeMenuOpen, setIsResumeMenuOpen] = useState(false)
  const [isMobileResumeOpen, setIsMobileResumeOpen] = useState(false)
  const resumeMenuRef = useRef<HTMLDivElement | null>(null)
  const { language, setLanguage, t } = useLanguage()

  const cvUrl = `${import.meta.env.BASE_URL}cv.pdf`

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!resumeMenuRef.current) return
      if (resumeMenuRef.current.contains(event.target as Node)) return
      setIsResumeMenuOpen(false)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsResumeMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const navItems = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.contact, href: '#contact' },
  ]

  const handleLanguageChange = (next: 'tr' | 'en') => {
    if (next === language) return
    setLanguage(next)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold gradient-text"
          >
            YAKUP KARDAŞ
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="dark:text-white/90 text-gray-800 hover:text-primary-light dark:hover:text-white transition-colors duration-300 font-medium cursor-pointer"
              >
                {item.name}
              </a>
            ))}

            {/* Resume Dropdown */}
            <div className="relative" ref={resumeMenuRef}>
              <button
                type="button"
                onClick={() => setIsResumeMenuOpen((open) => !open)}
                className="dark:text-white/90 text-gray-800 hover:text-primary-light dark:hover:text-white transition-colors duration-300 font-medium cursor-pointer"
                aria-haspopup="menu"
                aria-expanded={isResumeMenuOpen}
                aria-label={t.nav.resume}
              >
                {t.nav.resume}
              </button>

              {isResumeMenuOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-3 w-44 rounded-xl glass-effect border border-white/10 overflow-hidden shadow-xl"
                >
                  <a
                    href={cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 dark:text-white/90 text-gray-800 hover:bg-white/10 transition-all"
                    role="menuitem"
                    onClick={() => setIsResumeMenuOpen(false)}
                    aria-label={t.nav.resumeView}
                  >
                    {t.nav.resumeView}
                  </a>
                  <a
                    href={cvUrl}
                    download
                    className="block px-4 py-3 dark:text-white/90 text-gray-800 hover:bg-white/10 transition-all"
                    role="menuitem"
                    onClick={() => setIsResumeMenuOpen(false)}
                    aria-label={t.nav.resumeDownload}
                  >
                    {t.nav.resumeDownload}
                  </a>
                </div>
              )}
            </div>

            {/* Language Toggle */}
            <div
              role="group"
              aria-label="Dil seçimi"
              className="flex items-center rounded-full glass-effect border border-white/10 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => handleLanguageChange('tr')}
                className={`px-3 py-1.5 text-sm font-semibold transition-colors ${
                  language === 'tr'
                    ? 'bg-primary-light/25 text-primary-dark dark:text-white'
                    : 'dark:text-white/80 text-gray-800 hover:bg-white/10'
                }`}
                aria-pressed={language === 'tr'}
              >
                TR
              </button>
              <button
                type="button"
                onClick={() => handleLanguageChange('en')}
                className={`px-3 py-1.5 text-sm font-semibold transition-colors ${
                  language === 'en'
                    ? 'bg-primary-light/25 text-primary-dark dark:text-white'
                    : 'dark:text-white/80 text-gray-800 hover:bg-white/10'
                }`}
                aria-pressed={language === 'en'}
              >
                EN
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full glass-effect hover:bg-white/20 transition-all duration-300"
            >
              {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-400" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <div
              role="group"
              aria-label="Dil seçimi"
              className="flex items-center rounded-full glass-effect border border-white/10 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => handleLanguageChange('tr')}
                className={`px-2 py-1 text-xs font-semibold transition-colors ${
                  language === 'tr'
                    ? 'bg-primary-light/25 text-primary-dark dark:text-white'
                    : 'dark:text-white/80 text-gray-800 hover:bg-white/10'
                }`}
                aria-pressed={language === 'tr'}
              >
                TR
              </button>
              <button
                type="button"
                onClick={() => handleLanguageChange('en')}
                className={`px-2 py-1 text-xs font-semibold transition-colors ${
                  language === 'en'
                    ? 'bg-primary-light/25 text-primary-dark dark:text-white'
                    : 'dark:text-white/80 text-gray-800 hover:bg-white/10'
                }`}
                aria-pressed={language === 'en'}
              >
                EN
              </button>
            </div>
            <button onClick={toggleTheme} className="p-2 rounded-full glass-effect">
              {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-400" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-effect border-t border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}

            <button
              type="button"
              onClick={() => setIsMobileResumeOpen((open) => !open)}
              className="w-full text-left block px-3 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              aria-expanded={isMobileResumeOpen}
              aria-label={t.nav.resume}
            >
              {t.nav.resume}
            </button>

            {isMobileResumeOpen && (
              <div className="pl-3 space-y-1">
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                  onClick={() => {
                    setIsMobileResumeOpen(false)
                    setIsOpen(false)
                  }}
                  aria-label={t.nav.resumeView}
                >
                  {t.nav.resumeView}
                </a>

                <a
                  href={cvUrl}
                  download
                  className="block px-3 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                  onClick={() => {
                    setIsMobileResumeOpen(false)
                    setIsOpen(false)
                  }}
                  aria-label={t.nav.resumeDownload}
                >
                  {t.nav.resumeDownload}
                </a>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
