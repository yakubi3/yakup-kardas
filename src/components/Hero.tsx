import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { useLanguage } from '../i18n/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="section-container">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="relative"
          >
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 md:border-8 border-white/20 shadow-2xl shadow-primary-light/50 animate-glow bg-gradient-to-br from-primary-light to-primary-dark flex items-center justify-center">
              <img
                src="/profile.jpg"
                alt="Yakup Kardaş - Makine Mühendisi"
                className="w-full h-full object-cover"
                loading="eager"
                onError={(e) => {
                  // Eğer fotoğraf bulunamazsa SVG placeholder göster
                  e.currentTarget.src = '/profile.svg'
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-transparent rounded-3xl pointer-events-none"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 max-w-4xl"
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold">
              {t.hero.greeting} <span className="gradient-text">{t.hero.name}</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light dark:text-white text-gray-800">
              {t.hero.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl dark:text-white/90 text-gray-700 max-w-2xl mx-auto px-4 font-medium">
              {t.hero.description}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center w-full px-4"
          >
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-light to-primary-medium rounded-full font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
              aria-label="İletişim bölümüne git"
            >
              {t.hero.contactBtn}
            </a>
            <a
              href="#projects"
              className="px-6 sm:px-8 py-3 sm:py-4 glass-effect rounded-full font-semibold text-white hover:bg-white/20 transition-all duration-300 text-center"
              aria-label="Projeler bölümüne git"
            >
              {t.hero.projectsBtn}
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 sm:gap-6 pt-8"
          >
            <a
              href="https://github.com/yakupkardas"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 glass-effect rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profilim"
            >
              <FaGithub size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/yakup-karda%C5%9F-3a896720a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 glass-effect rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profilim"
            >
              <FaLinkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:ykardas364@gmail.com"
              className="p-3 sm:p-4 glass-effect rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="Email Gönder"
            >
              <FaEnvelope size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="tel:+905527258590"
              className="p-3 sm:p-4 glass-effect rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="Telefon İle Ara"
            >
              <FaPhone size={20} className="sm:w-6 sm:h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
