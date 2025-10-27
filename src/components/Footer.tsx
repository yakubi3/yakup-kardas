import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass-effect border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-white/60 text-sm">
            © {currentYear} Yakup Kardaş. Tüm hakları saklıdır.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/yakupkardas"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-effect hover:bg-white/20 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/yakup-karda%C5%9F-3a896720a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-effect hover:bg-white/20 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:ykardas364@gmail.com"
              className="p-2 rounded-full glass-effect hover:bg-white/20 transition-all hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>

          

        </div>
      </div>
    </footer>
  )
}

export default Footer
