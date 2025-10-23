import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS configuration
      // Önce EmailJS hesabınızdan Service ID, Template ID ve Public Key almanız gerekiyor
      // https://www.emailjs.com/ adresinden ücretsiz hesap oluşturabilirsiniz
      
      if (formRef.current) {
        await emailjs.sendForm(
          'YOUR_SERVICE_ID', // EmailJS Service ID'nizi buraya ekleyin
          'YOUR_TEMPLATE_ID', // EmailJS Template ID'nizi buraya ekleyin
          formRef.current,
          'YOUR_PUBLIC_KEY' // EmailJS Public Key'inizi buraya ekleyin
        )
      }
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // 5 saniye sonra success mesajını gizle
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Email gönderim hatası:', error)
      setSubmitStatus('error')
      
      // 5 saniye sonra error mesajını gizle
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          İletişim
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <p className="text-center text-xl dark:text-white/90 text-gray-800 mb-8">
              Benimle iletişime geçmek isterseniz aşağıdaki formu kullanabilir veya 
              doğrudan iletişim bilgilerimden ulaşabilirsiniz.
            </p>

            {/* Contact Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block dark:text-white/80 text-gray-700 mb-2 font-medium">İsim</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 dark:bg-white/10 bg-white dark:border-white/20 border-gray-300 border rounded-lg dark:text-white text-gray-900 dark:placeholder-white/40 placeholder-gray-500 focus:outline-none focus:border-primary-light transition-all"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label className="block dark:text-white/80 text-gray-700 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    name="reply_to"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 dark:bg-white/10 bg-white dark:border-white/20 border-gray-300 border rounded-lg dark:text-white text-gray-900 dark:placeholder-white/40 placeholder-gray-500 focus:outline-none focus:border-primary-light transition-all"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block dark:text-white/80 text-gray-700 mb-2 font-medium">Mesaj</label>
                <textarea
                  required
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 dark:bg-white/10 bg-white dark:border-white/20 border-gray-300 border rounded-lg dark:text-white text-gray-900 dark:placeholder-white/40 placeholder-gray-500 focus:outline-none focus:border-primary-light transition-all resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-primary-light to-primary-medium rounded-full font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span> Gönderiliyor...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Gönder
                  </>
                )}
              </button>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 bg-green-500/20 px-4 py-3 rounded-lg"
                >
                  <FaCheckCircle /> Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağım.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 bg-red-500/20 px-4 py-3 rounded-lg"
                >
                  ⚠️ Mesaj gönderilemedi. Lütfen doğrudan email veya telefon ile iletişime geçin.
                </motion.div>
              )}
            </form>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 border-t border-white/20">
              <div className="text-center md:text-left">
                <p className="text-white/60 mb-1">Email</p>
                <a href="mailto:ykardas364@gmail.com" className="text-primary-light hover:text-white transition-colors">
                  ykardas364@gmail.com
                </a>
              </div>
              <div className="text-center md:text-right">
                <p className="text-white/60 mb-1">Telefon</p>
                <a href="tel:+905527258590" className="text-primary-light hover:text-white transition-colors">
                  +90 552 725 85 90
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
