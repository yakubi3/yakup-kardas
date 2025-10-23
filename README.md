# 🚀 Yakup Kardaş - Profesyonel Portfolyo Sitesi

Modern, responsive ve profesyonel bir portfolyo web sitesi. React, TypeScript, Tailwind CSS ve Framer Motion ile geliştirilmiştir.

## ✨ Özellikler

- ⚡ **Hızlı ve Modern**: Vite build tool ile ultra hızlı geliştirme
- 🎨 **Glassmorphism Design**: Modern cam efekti tasarım
- 🌓 **Dark/Light Mode**: Tema değiştirme özelliği
- 📱 **Tamamen Responsive**: Mobil, tablet ve masaüstü uyumlu
- 🎭 **Smooth Animations**: Framer Motion ile akıcı animasyonlar
- 🎯 **TypeScript**: Tip güvenli kod
- 🎨 **Tailwind CSS**: Utility-first CSS framework
- 📧 **İletişim Formu**: EmailJS entegrasyonu
- 🚀 **SEO Optimized**: Arama motorları için optimize edilmiş

## 🛠️ Teknolojiler

- **Frontend Framework**: React 18
- **Programlama Dili**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email Service**: EmailJS

## 📦 Kurulum

### Ön Gereksinimler

Node.js (v18 veya üzeri) kurulu olmalıdır. Yüklemek için:
1. [Node.js İndir](https://nodejs.org/) (LTS versiyonu önerilir)
2. Kurulumu kontrol edin: `node --version` ve `npm --version`

### Adımlar

1. **Bağımlılıkları yükleyin:**
```bash
npm install
```

2. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

Tarayıcınızda `http://localhost:3000` adresini açın.

3. **Production build oluşturun:**
```bash
npm run build
```

4. **Build'i önizleyin:**
```bash
npm run preview
```

## 📁 Proje Yapısı

```
portfolio-pro/
├── public/
│   └── profile.jpg          # Profil fotoğrafı buraya
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Navigasyon bileşeni
│   │   ├── Hero.tsx         # Ana sayfa hero bölümü
│   │   ├── About.tsx        # Hakkımda bölümü
│   │   ├── Experience.tsx   # Deneyim timeline
│   │   ├── Skills.tsx       # Yetenekler grid
│   │   ├── Projects.tsx     # Proje vitrin
│   │   ├── Contact.tsx      # İletişim formu
│   │   └── Footer.tsx       # Footer
│   ├── App.tsx              # Ana uygulama
│   ├── main.tsx             # Giriş noktası
│   └── index.css            # Global stiller
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🎨 Özelleştirme

### Renkler

`tailwind.config.js` dosyasında renkleri değiştirebilirsiniz:

```javascript
colors: {
  primary: {
    dark: '#1e3a5f',
    medium: '#2c5f8d',
    light: '#4a90c9',
  },
}
```

### Profil Fotoğrafı

`public/profile.jpg` dosyasını kendi fotoğrafınızla değiştirin.

### Kişisel Bilgiler

Her component dosyasında kendi bilgilerinizi güncelleyin:
- `Hero.tsx` - İsim, unvan, sosyal medya linkleri
- `About.tsx` - Hakkımda metni
- `Experience.tsx` - İş deneyimleri
- `Skills.tsx` - Yetenekler
- `Projects.tsx` - Projeler
- `Contact.tsx` - İletişim bilgileri

## 📧 Email Kurulumu

İletişim formunu aktif etmek için EmailJS kullanılmıştır:

1. [EmailJS](https://www.emailjs.com/) hesabı oluşturun (ücretsiz)
2. Email Services → Add New Service → Gmail seçin ve bağlayın
3. Email Templates → Create New Template ile template oluşturun
4. Template içinde `{{from_name}}`, `{{reply_to}}`, `{{message}}` değişkenlerini kullanın
5. Account → API Keys bölümünden Public Key'inizi alın
6. Proje kök dizininde `.env` dosyası oluşturun (`.env.example` referans)
7. `Contact.tsx` dosyasında ilgili değerleri güncelleyin:

```typescript
await emailjs.sendForm(
  'YOUR_SERVICE_ID',    // EmailJS Service ID
  'YOUR_TEMPLATE_ID',   // EmailJS Template ID  
  formRef.current,
  'YOUR_PUBLIC_KEY'     // EmailJS Public Key
)
```

**Not**: EmailJS kurulumu yapmadan da form çalışır, ancak email gönderilemez. Alternatif olarak doğrudan iletişim bilgileri kullanılabilir.

## 🚀 Deploy

### Vercel (Önerilen)

1. GitHub'a push edin
2. [Vercel](https://vercel.com)'e import edin
3. Deploy!

### Netlify

1. `npm run build` çalıştırın
2. `dist` klasörünü Netlify'a yükleyin

## 📝 Lisans

Bu proje kişisel kullanım içindir.

## 👤 Geliştirici

**Yakup Kardaş**
- Email: ykardas364@gmail.com
- LinkedIn: [Yakup Kardaş](https://www.linkedin.com/in/yakup-karda%C5%9F-3a896720a/)
- GitHub: [@yakupkardas](https://github.com/yakupkardas)

---

⭐ Beğendiyseniz yıldız vermeyi unutmayın!
