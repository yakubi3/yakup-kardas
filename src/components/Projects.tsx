import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

const Projects = () => {
  const { t } = useLanguage()
  
  const projects = [
    {
      title: t.projects.solarTitle,
      description: t.projects.solarDesc,
      image: '/project1.jpg',
      tags: t.projects.solarTags,
    },
    {
      title: t.projects.cadTitle,
      description: t.projects.cadDesc,
      image: '/project2.jpg',
      tags: t.projects.cadTags,
    },
    {
      title: t.projects.leanTitle,
      description: t.projects.leanDesc,
      image: '/project3.jpg',
      tags: t.projects.leanTags,
    },
  ]
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          {t.projects.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-medium to-primary-dark overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
                  🚀
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold dark:text-white text-gray-900">{project.title}</h3>
                <p className="dark:text-white/75 text-gray-700 line-clamp-3">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-primary-light/20 text-primary-light rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links removed as requested */}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
