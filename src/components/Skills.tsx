import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

const Skills = () => {
  const { t } = useLanguage()
  
  const skills = [
    { name: 'Python', icon: '🐍', logo: '/img/python.png', level: 70, items: t.skills.items.python },
    { name: 'AutoCAD', icon: '📐', logo: '/img/autocad.png', level: 85, items: t.skills.items.autocad },
    { name: 'ANSYS', icon: '🔬', logo: '/img/ansys.png', level: 85, items: t.skills.items.ansys },
    { name: 'Excel', icon: '📊', logo: '/img/excel.png', level: 70, items: t.skills.items.excel },
    { name: 'Word', icon: '📝', logo: '/img/word.png', level: 70, items: t.skills.items.word },
    { name: 'SolidWorks', icon: '⚙️', logo: '/img/solidworks.png', level: 50, items: t.skills.items.solidworks },
    { name: t.skills.items.manufacturing[0], icon: '🏭', logo: null, level: 75, items: t.skills.items.manufacturing.slice(1) },
  ]
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {t.skills.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 animate-float"
            >
              {skill.logo ? (
                <div className="h-20 mb-4 flex items-center justify-center">
                  <img 
                    src={skill.logo} 
                    alt={`${skill.name} Logo`}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      // Logo bulunamazsa emoji göster
                      e.currentTarget.style.display = 'none'
                      const parent = e.currentTarget.parentElement
                      if (parent) {
                        parent.innerHTML = `<div class="text-5xl">${skill.icon}</div>`
                      }
                    }}
                  />
                </div>
              ) : (
                <div className="text-5xl mb-4">{skill.icon}</div>
              )}
              <h3 className="text-xl font-bold mb-3 dark:text-white text-gray-900">{skill.name}</h3>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="h-2 dark:bg-white/10 bg-gray-300 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary-light to-primary-medium rounded-full"
                  />
                </div>
                <p className="text-sm dark:text-white/60 text-gray-600 mt-1">{skill.level}% {t.skills.proficiency}</p>
              </div>

              {/* Items */}
              <div className="space-y-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="inline-block px-3 py-1 text-sm dark:bg-white/10 bg-gray-200 rounded-full dark:text-white/80 text-gray-700 mr-2 mb-2"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
