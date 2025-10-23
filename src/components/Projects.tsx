import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Güneş Enerjisi Sistemi',
    description: 'Sürdürülebilir enerji üretimi için güneş enerjisi sistemleri araştırması ve prototip geliştirme.',
    image: '/project1.jpg',
    tags: ['Enerji', 'Araştırma', 'Sürdürülebilirlik'],
    github: '#',
    demo: '#',
  },
  {
    title: 'CAD Tasarım Projesi',
    description: 'SolidWorks kullanarak karmaşık mekanik parçaların 3D modellenmesi ve simülasyonu.',
    image: '/project2.jpg',
    tags: ['CAD', 'SolidWorks', '3D Modeling'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Üretim Optimizasyonu',
    description: 'Lean Manufacturing prensipleriyle üretim süreçlerinin optimize edilmesi.',
    image: '/project3.jpg',
    tags: ['Lean', 'Optimizasyon', 'Üretim'],
    github: '#',
    demo: '#',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Projeler
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

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 dark:bg-white/10 bg-gray-200 rounded-lg dark:hover:bg-white/20 hover:bg-gray-300 transition-all dark:text-white text-gray-800"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-light/20 rounded-lg hover:bg-primary-light/30 transition-all text-primary-light"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
