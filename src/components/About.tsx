import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

const About = () => {
  const { t } = useLanguage()
  return (
    <section id="about" className="section-container" aria-labelledby="about-heading">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {t.about.title}
        </h2>
        
        <div className="glass-effect rounded-3xl p-8 md:p-12 space-y-6 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl dark:text-white/95 text-gray-800 leading-relaxed">
            {t.about.p1}
          </p>
          
          <p className="text-lg md:text-xl dark:text-white/90 text-gray-700 leading-relaxed">
            {t.about.p2}
          </p>
          
          <p className="text-lg md:text-xl dark:text-white/90 text-gray-700 leading-relaxed">
            {t.about.p3}
          </p>
          
          <p className="text-lg md:text-xl dark:text-white/95 text-gray-800 leading-relaxed font-medium">
            {t.about.p4}
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default About
