import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section-container" aria-labelledby="about-heading">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Hakkımda
        </h2>
        
        <div className="glass-effect rounded-3xl p-8 md:p-12 space-y-6 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl dark:text-white/95 text-gray-800 leading-relaxed">
            Merhaba! Ben <span className="font-semibold text-primary-light">Yakup Kardaş</span>, 
            Gaziantep Üniversitesi'nde makine mühendisliği okuyan bir öğrenciyim. Mekanik dizayn ve üretim 
            süreçlerine büyük bir ilgi duyuyorum.
          </p>
          
          <p className="text-lg md:text-xl dark:text-white/90 text-gray-700 leading-relaxed">
            CAD/CAM programlarında (SolidWorks, AutoCAD, CATIA) yetkinim var ve üniversite 
            derslerinde edindiğim bilgileri projelerimde uygulamaya çalışıyorum. 
            Özellikle yenilenebilir enerji alanında güneş enerjisi sistemleri üzerine araştırmalar yürütüyorum.
          </p>
          
          <p className="text-lg md:text-xl dark:text-white/90 text-gray-700 leading-relaxed">
            Boş zamanlarımda kitap okumayı ve yeni teknolojileri takip etmeyi seviyorum. 
            Sürdürülebilir enerji çözümleri ve otomasyon sistemleri ile yakından ilgileniyorum.
          </p>
          
          <p className="text-lg md:text-xl dark:text-white/95 text-gray-800 leading-relaxed font-medium">
            🎯 Hedefim, edindiğim bilgi ve becerileri kullanarak sektöre değer katmak, 
            ailemi ve sevdiklerimi gururlandırmak.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default About
