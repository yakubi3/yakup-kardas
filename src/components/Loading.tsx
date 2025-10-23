import { motion } from 'framer-motion'
import './Loading.css'

const Loading = () => {
  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section className="loading-content">
        <div className="loading-text">
          <span style={{ '--i': 0 } as React.CSSProperties}>L</span>
          <span style={{ '--i': 1 } as React.CSSProperties}>O</span>
          <span style={{ '--i': 2 } as React.CSSProperties}>A</span>
          <span style={{ '--i': 3 } as React.CSSProperties}>D</span>
          <span style={{ '--i': 4 } as React.CSSProperties}>I</span>
          <span style={{ '--i': 5 } as React.CSSProperties}>N</span>
          <span style={{ '--i': 6 } as React.CSSProperties}>G</span>
        </div>
        <div className="loading-subtitle">Portfolio Yükleniyor...</div>
      </section>
      
      <footer className="loading-copyright">
        &copy; 2025 Yakup Kardaş - Makine Mühendisi
      </footer>
    </motion.div>
  )
}

export default Loading
