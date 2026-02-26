import { useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaLightbulb, FaBolt } from 'react-icons/fa'
import { useLanguage } from '../i18n/LanguageContext'

type ExperienceItem = {
  icon: ReactNode
  title: string
  subtitle: string
  type: string
  description: string
  logoSrc?: string
  fallbackLogoSrc?: string
  logoAlt?: string
  badgeWrapperClassName?: string
  logoClassName?: string
}

const ExperienceBadge = ({ item }: { item: ExperienceItem }) => {
  const [logoSrc, setLogoSrc] = useState(item.logoSrc)
  const [logoFailed, setLogoFailed] = useState(false)

  if (logoSrc && !logoFailed) {
    return (
      <div
        className={
          item.badgeWrapperClassName ??
          'w-12 h-12 flex items-center justify-center dark:bg-white/90 dark:rounded-xl dark:p-1'
        }
      >
        <img
          src={logoSrc}
          alt={item.logoAlt ?? ''}
          className={item.logoClassName ?? 'w-full h-full object-contain object-center'}
          loading="lazy"
          onError={() => {
            if (item.fallbackLogoSrc && logoSrc !== item.fallbackLogoSrc) {
              setLogoSrc(item.fallbackLogoSrc)
              return
            }
            setLogoFailed(true)
          }}
        />
      </div>
    )
  }

  return <div className="text-4xl text-primary-light">{item.icon}</div>
}

const Experience = () => {
  const { t } = useLanguage()

  const strLogoJpgSrc = `${import.meta.env.BASE_URL}img/str-enerji-logo.jpg`
  const gazisehirLogoPngSrc = `${import.meta.env.BASE_URL}img/gazisehir-enerji-logo.png`
  const gaziantepUniversityLogoSrc = `${import.meta.env.BASE_URL}img/gaziantep-university-mark.svg`
  const airlabWordmarkSrc = `${import.meta.env.BASE_URL}img/airlab-wordmark.svg`

  const experiences: ExperienceItem[] = [
    {
      icon: <FaBriefcase />,
      title: t.experience.airlabTitle,
      subtitle: t.experience.airlabSubtitle,
      type: t.experience.work,
      description: t.experience.airlabDesc,
      logoSrc: airlabWordmarkSrc,
      logoAlt: t.experience.airlabTitle,
      badgeWrapperClassName: 'w-20 h-10 flex items-center justify-center rounded-md overflow-hidden',
      logoClassName: 'w-full h-full object-contain object-center',
    },
    {
      icon: <FaBriefcase />,
      title: t.experience.gazisehirTitle,
      subtitle: t.experience.gazisehirSubtitle,
      type: t.experience.fullTime,
      description: t.experience.gazisehirDesc,
      logoSrc: gazisehirLogoPngSrc,
      logoAlt: t.experience.gazisehirTitle,
    },
    {
      icon: <FaBolt />,
      title: t.experience.strTitle,
      subtitle: t.experience.strSubtitle,
      type: t.experience.founder,
      description: t.experience.strDesc,
      logoSrc: strLogoJpgSrc,
      logoAlt: t.experience.strTitle,
    },
    {
      icon: <FaGraduationCap />,
      title: t.experience.edu1Title,
      subtitle: t.experience.edu1Subtitle,
      type: t.experience.education,
      description: t.experience.edu1Desc,
      logoSrc: gaziantepUniversityLogoSrc,
      logoAlt: t.experience.edu1Title,
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
                <div className="mt-2 w-12 h-12 flex items-center justify-center">
                  <ExperienceBadge item={exp} />
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
