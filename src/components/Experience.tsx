import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaLightbulb } from 'react-icons/fa'
import { useLanguage } from '../i18n/LanguageContext'

const Experience = () => {
  const { t } = useLanguage()
  
  const experiences = [
    {
      icon: <FaGraduationCap />,
      title: t.experience.edu1Title,
      subtitle: t.experience.edu1Subtitle,
      type: t.experience.education,
      description: t.experience.edu1Desc,
    },
    {
      icon: <FaBriefcase />,
      title: t.experience.intern1Title,
      subtitle: t.experience.intern1Subtitle,
      type: t.experience.internship,
      description: t.experience.intern1Desc,
    },
    {
      icon: <FaLightbulb />,
      title: t.experience.research1Title,
      subtitle: t.experience.research1Subtitle,
      type: t.experience.research,
      description: t.experience.research1Desc,
    },
  ]
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {t.experience.title}
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-effect rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl text-primary-light mt-2">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold dark:text-white text-gray-900">{exp.title}</h3>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary-light/20 text-primary-light">
                      {exp.type}
                    </span>
                  </div>
                  <p className="dark:text-white/70 text-gray-600 mb-4">{exp.subtitle}</p>
                  <p className="dark:text-white/85 text-gray-700 leading-relaxed whitespace-pre-line">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
