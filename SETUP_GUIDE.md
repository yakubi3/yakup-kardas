# 🚀 Portfolio Kurulum Rehberi

## ✅ Yapılan İyileştirmeler

### 1. **Stil ve Tasarım İyileştirmeleri**
- ✨ Tailwind Config genişletildi (animasyonlar, renkler, font)
- 🎨 Glass-effect, gradient-text ve section-container stilleri eklendi
- 🌊 Float ve glow animasyonları eklendi
- 📱 Smooth scroll davranışı eklendi
- 🎯 Responsive tasarım optimizasyonları

### 2. **İçerik Düzeltmeleri**
- 📚 "Senior Makine Mühendisi" → "Stajyer Makine Mühendisi" (gerçekçi)
- 📅 Tarih ve deneyim bilgileri tutarlı hale getirildi
- ✍️ Hakkımda metni daha profesyonel hale getirildi
- 🎓 Eğitim bilgileri detaylandırıldı
- 💡 Yetenekler gerçekçi seviyelere ayarlandı

### 3. **Fonksiyonel İyileştirmeler**
- 🔄 Smooth scroll navigasyon eklendi
- 📧 EmailJS entegrasyonu (yapılandırma gerekli)
- ✅ Form validasyonu ve durum yönetimi
- 🎯 Loading ve success/error state'leri

### 4. **SEO ve Accessibility**
- 🔍 Meta tags (description, keywords, author)
- 🌐 Open Graph ve Twitter Card tags
- ♿ ARIA labels tüm interaktif elementlere eklendi
- 🖼️ Alt text'ler tüm görsellere eklendi
- 📱 Semantic HTML kullanımı

### 5. **Mobil Optimizasyonlar**
- 📱 Responsive text boyutları (text-3xl sm:text-5xl md:text-7xl)
- 🔲 Responsive görsel boyutları
- 📐 Flex-col sm:flex-row yapıları
- 💫 Mobil dostu touch hedefleri
- 🎯 Optimized spacing ve padding

## 🛠️ Kurulum Adımları

### 1. Node.js Kurulumu
Portfolio projenizi çalıştırmak için Node.js gereklidir:

1. [Node.js İndirme Sayfası](https://nodejs.org/) 
2. **LTS (Long Term Support)** versiyonunu indirin (18.x veya 20.x)
3. İndirilen dosyayı çalıştırın ve kurulum sihirbazını takip edin
4. Kurulum tamamlandıktan sonra PowerShell'i **YENİDEN BAŞLATIN**
5. Kontrol edin:
```powershell
node --version
npm --version
```

### 2. Proje Bağımlılıklarını Kurma
```powershell
cd c:\Users\Public\portfolio-pro
npm install
```

### 3. EmailJS Kurulumu (İletişim Formu İçin)

İletişim formunu aktif etmek için:

1. **EmailJS Hesabı Oluşturma**
   - [EmailJS](https://www.emailjs.com/) sitesine gidin
   - "Sign Up" ile ücretsiz hesap oluşturun
   - Email adresinizi doğrulayın

2. **Email Service Bağlama**
   - Dashboard → Email Services → "Add New Service"
   - Gmail, Outlook veya istediğiniz servisi seçin
   - Email hesabınızı bağlayın
   - **Service ID**'yi not edin (örn: `service_abc123`)

3. **Email Template Oluşturma**
   - Dashboard → Email Templates → "Create New Template"
   - Template içeriği:
   ```
   Konu: {{from_name}} Portfolio Sitesinden Mesaj

   Gönderen: {{from_name}}
   Email: {{reply_to}}

   Mesaj:
   {{message}}
   ```
   - **Template ID**'yi not edin (örn: `template_xyz789`)

4. **Public Key Alma**
   - Dashboard → Account → API Keys
   - **Public Key**'i kopyalayın (örn: `user_1A2B3C4D5E6F`)

5. **Projeye Entegre Etme (.env ile)**
   - Proje kök dizininde `.env.example` dosyası var.
   - Aynı dizinde `.env` oluşturun ve değerleri girin:
   ```dotenv
   VITE_EMAILJS_SERVICE_ID=service_abc123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=user_1A2B3C4D5E6F
   ```
   - Sonra dev server'ı yeniden başlatın: `npm run dev`

**Not:** EmailJS tarafında template'in "To" adresini kendi mailiniz (örn: `ykardas364@gmail.com`) olacak şekilde ayarlayın.

### 4. Profil Fotoğrafı Ekleme
- `public/profile.jpg` dosyasını kendi fotoğrafınızla değiştirin
- Önerilen boyut: 800x800 piksel, kare format
- Format: JPG, PNG veya WebP

### 5. Geliştirme Sunucusunu Başlatma
```powershell
npm run dev
```
Tarayıcınızda: http://localhost:5173

### 6. Production Build Oluşturma
```powershell
npm run build
```
Build dosyaları `dist/` klasöründe oluşturulur.

## 🎨 Kişiselleştirme

### Renk Teması Değiştirme
`tailwind.config.js` dosyasında:
```javascript
colors: {
  primary: { 
    DEFAULT: "#4a90c9",  // Ana renk
    dark: "#1e3a5f",     // Koyu ton
    medium: "#2c5f8d",   // Orta ton
    light: "#60a5db"     // Açık ton
  },
}
```

### Kişisel Bilgileri Güncelleme
1. `src/components/Hero.tsx` - İsim, unvan, sosyal medya
2. `src/components/About.tsx` - Hakkımda metni
3. `src/components/Experience.tsx` - Eğitim ve deneyim
4. `src/components/Skills.tsx` - Yetenekler ve seviyeler
5. `src/components/Projects.tsx` - Projeler
6. `src/components/Contact.tsx` - İletişim bilgileri

## 🚀 Deploy (Yayınlama)

### Vercel ile Deploy (Önerilen)
1. [Vercel](https://vercel.com) hesabı oluşturun
2. GitHub'a projeyi push edin
3. Vercel'de "Import Project" → GitHub repo seçin
4. Deploy! 🎉

### Netlify ile Deploy
1. `npm run build` komutu ile build oluşturun
2. [Netlify](https://netlify.com) hesabı oluşturun
3. "New site from Git" veya `dist` klasörünü drag & drop
4. Deploy! 🎉

## ❓ Sık Karşılaşılan Sorunlar

### "npm komut bulunamadı"
- Node.js kurulmamış veya PATH'e eklenmemiş
- PowerShell'i yeniden başlatın
- Node.js'i yeniden kurun

### Bağımlılık hataları
```powershell
rm -r node_modules
rm package-lock.json
npm install
```

### Port zaten kullanımda
```powershell
npm run dev -- --port 3001
```

## 📞 Destek

Herhangi bir sorun yaşarsanız:
- Email: ykardas364@gmail.com
- GitHub Issues: Repository'de issue açabilirsiniz

## 🎯 Checklist

Başlamadan önce kontrol edin:
- [ ] Node.js kuruldu mu? (`node --version`)
- [ ] Bağımlılıklar kuruldu mu? (`npm install`)
- [ ] Profil fotoğrafı eklendi mi? (`public/profile.jpg`)
- [ ] EmailJS yapılandırıldı mı? (opsiyonel)
- [ ] Kişisel bilgiler güncellendi mi?
- [ ] Geliştirme sunucusu çalışıyor mu? (`npm run dev`)

---

✨ **Hazırsınız! Başarılar dilerim!** ✨
