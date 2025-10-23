import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaLightbulb } from 'react-icons/fa'

const experiences = [
  {
    icon: <FaGraduationCap />,
    title: 'Gaziantep Üniversitesi',
    subtitle: '2020 - 2025 (Devam Ediyor)',
    type: 'Eğitim',
    description: 'Makine Mühendisliği - Lisans\n\nİlgili Dersler:\n• Mekanik Tasarım ve CAD\n• Malzeme Bilimi ve Mühendisliği\n• İmalat Yöntemleri ve Teknolojileri\n• Mekanizma Analizi\n• Termodinamik ve Akışkanlar Mekaniği',
  },
  {
    icon: <FaBriefcase />,
    title: 'Stajyer Makine Mühendisi',
    subtitle: 'Yaz 2023',
    type: 'Staj Deneyimi',
    description: '• Üretim süreçlerinin gözlemlenmesi ve analizi\n• CAD yazılımları ile teknik çizim çalışmaları\n• Kalite kontrol süreçlerine katılım\n• Ekip çalışması ve teknik dokümantasyon',
  },
  {
    icon: <FaLightbulb />,
    title: 'Güneş Enerjisi Sistemleri Araştırması',
    subtitle: '2023 - Günümüz',
    type: 'Araştırma Projesi',
    description: 'Yenilenebilir enerji kaynakları ve güneş enerjisi sistemleri üzerine akademik araştırma ve geliştirme çalışmaları. Enerji verimliliği, sürdürülebilir teknolojiler ve temiz enerji çözümleri üzerine çalışmalar.',
  },
]

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Deneyim & Eğitim
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
