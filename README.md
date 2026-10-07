# 🎁 SecretGift

### ✨ Modern Secret Santa & New Year Gift Draw App

SecretGift, arkadaşlar, aile üyeleri veya çalışma arkadaşları arasında kolayca **Secret Santa / yılbaşı hediye çekilişi** oluşturmayı sağlayan modern ve responsive bir React web uygulamasıdır.

Katılımcıları ekleyebilir, düzenleyebilir veya silebilir; ardından tek tıkla gizli bir çekiliş oluşturabilir ve herkes kendi eşleşmesini özel olarak görüntüleyebilir.

<br>

## 🌐 Live Demo

**SecretGift – Live Demo**

agent-6ac6216bdac465376938f5--yilbasicekilisidir.netlify.app

<br>

## ✨ Features

- 🎀 Katılımcı ekleme
- ✏️ Katılımcı bilgilerini düzenleme
- 🗑️ Katılımcı silme
- 🎲 Rastgele Secret Santa çekilişi
- 🚫 Kişinin kendisiyle eşleşmesini engelleme
- 🔐 Kişisel çekiliş sonucunu gizli görüntüleme
- 💾 LocalStorage ile verilerin saklanması
- ⚠️ Aynı kişinin birden fazla kez eklenmesini engelleme
- 🔄 Katılımcı listesi değiştiğinde eski çekiliş sonucunu temizleme
- 📱 Responsive / mobil uyumlu tasarım
- 🌸 Açık pembe ve yılbaşı temalı modern kullanıcı arayüzü

<br>

## 🖥️ Screens

### 🏠 Home

Modern, açık pembe ve yılbaşı temalı ana sayfa.

### 👥 Participants

Katılımcıların eklenebildiği, düzenlenebildiği ve silinebildiği yönetim ekranı.

### 🎁 Draw

Çekilişin oluşturulduğu ve katılımcıların kendi gizli eşleşmelerini görüntüleyebildiği ekran.

<br>

## 🛠️ Technologies

| Technology | Usage |
|---|---|
| ⚛️ React | Frontend geliştirme |
| 🟨 JavaScript | Uygulama mantığı |
| 🎨 Tailwind CSS | UI ve responsive tasarım |
| 🧭 React Router | Sayfa yönlendirme |
| ⚡ Vite | Development & build |
| 💾 LocalStorage | Tarayıcı üzerinde veri saklama |
| 🔧 Git | Versiyon kontrolü |
| 🐙 GitHub | Proje yönetimi |
| 🚀 Netlify | Deployment |

<br>
## EKRAN GÖRÜNTÜSÜ
 <img width="935" height="632" alt="Ekran görüntüsü 2026-10-07 132549" src="https://github.com/user-attachments/assets/23e9a28c-836f-45d7-a90b-03ac585c7274" />
 <br>
 <img width="1117" height="583" alt="Ekran görüntüsü 2026-10-07 132533" src="https://github.com/user-attachments/assets/04d4456b-05e4-40a5-8afc-62ffcf5fe795" />
<br>
 <img width="1112" height="760" alt="Ekran görüntüsü 2026-10-07 132525" src="https://github.com/user-attachments/assets/dddeb902-be84-4aca-bcf6-bd3fc8532434" />



## 📁 Project Structure

```text
secret-gift/
│
├── public/
│   └── _redirects
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ParticipantForm.jsx
│   │   ├── ParticipantList.jsx
│   │   └── ParticipantCard.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Participants.jsx
│   │   └── Draw.jsx
│   │
│   ├── interfaces/
│   │   └── participant.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

<br>

## 🚀 Getting Started

Projeyi bilgisayarınızda çalıştırmak için:

### 1. Repository'yi klonlayın

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Proje klasörüne gidin

```bash
cd secret-gift
```

### 3. Paketleri yükleyin

```bash
npm install
```

### 4. Development server'ı başlatın

```bash
npm run dev
```

Uygulama local olarak çalışmaya başlayacaktır.

<br>

## 📦 Production Build

Production build oluşturmak için:

```bash
npm run build
```

Build çıktısı `dist` klasöründe oluşturulur.

<br>

## 🎯 How It Works

### 1️⃣ Katılımcıları Ekle

Çekilişe katılacak kişilerin isimleri sisteme eklenir.

### 2️⃣ Çekilişi Başlat

Sistem katılımcıları rastgele eşleştirir.

Her katılımcının kendisiyle eşleşmesi engellenir.

### 3️⃣ Sonucunu Gör

Katılımcı kendi adını seçerek yalnızca **kendi Secret Santa sonucunu** görüntüler.

### 4️⃣ Yeni Çekiliş

Katılımcı listesi değiştirildiğinde önceki çekiliş sonucu otomatik olarak temizlenir.

<br>

## 💡 Project Highlights

Bu proje ile aşağıdaki frontend geliştirme konuları uygulanmıştır:

- React component yapısı
- React Hooks (`useState`, `useEffect`)
- React Router
- Props kullanımı
- Form yönetimi
- CRUD işlemleri
- LocalStorage kullanımı
- Rastgele veri oluşturma
- Conditional rendering
- Responsive Web Design
- Tailwind CSS ile modern UI geliştirme
- Git & GitHub workflow
- Netlify deployment

<br>

## 📱 Responsive Design

SecretGift farklı ekran boyutlarında kullanılabilecek şekilde tasarlanmıştır.

- 💻 Desktop
- 💻 Laptop
- 📱 Mobile
- 📲 Tablet

<br>

## 🎓 Project Purpose

SecretGift, **Web Geliştirme; Yapay Zeka Proje Yönergesi** kapsamında geliştirilmiş bir frontend projesidir.

Projenin amacı; modern JavaScript framework kullanımı, React temel prensipleri, CRUD işlemleri, responsive tasarım, GitHub kullanımı ve web uygulaması deployment süreçlerini uygulamalı olarak geliştirmektir.

<br>

## 👩‍💻 Developer

**Şevval Havva Ada**

Computer Engineering

<br>

---

### 🎁 SecretGift

**Create the draw. Keep it secret. Make someone smile. ✨**
