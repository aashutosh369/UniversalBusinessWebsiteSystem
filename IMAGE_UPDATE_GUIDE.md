# 🖼️ Developer Guide: How to Add & Replace Images in Universal Business Website System

Yeh guide doosre developer ke liye banayi gayi hai jo is project ko clone karke har ek business section aur preset ke liye suitable images update karega.

---

## 📌 Step 1: Project Clone Aur Setup Kaise Karein

Sabse pehle terminal ya command prompt kholein aur yeh commands run karein:

```bash
# 1. Repository clone karein
git clone https://github.com/aashutosh369/UniversalBusinessWebsiteSystem.git

# 2. Project folder me jayein
cd "Universal Business Website System"

# 3. All dependencies install karein
npm install

# 4. Local development server start karein
npm run dev
```

Server start hone par terminal me link milega (jaise `http://localhost:5173`). Browser me ise khol kar live preview dekhein.

---

## 📁 Step 2: Images Kahan Aur Kaise Update Karni Hain?

Is project me **2 tarike** se images use ki ja sakti hain:

### Option A: Local Images (Best & Recommended ⚡)
1. Project ke `public` folder me ek new folder banayein: `public/images/`
2. Business wise sub-folders bana sakte hain:
   - `public/images/clinic/`
   - `public/images/salon/`
   - `public/images/gym/`
   - `public/images/restaurant/`
   - `public/images/realestate/`
   - `public/images/coaching/`
   - `public/images/consulting/`
   - `public/images/dental/`
3. Ab config files me URL ki jagah relative path dein, jaise:
   `image: "/images/clinic/hero-bg.jpg"`

### Option B: Direct Unsplash / CDN Image URLs 🌐
Agar high-quality online URLs use karne hain (jaise Unsplash, Pexels, Cloudinary):
- Straightaway direct image URL config file me daal dein:
  `image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"`

---

## 🎯 Step 3: Fast Check & File Locations Guide

Yeh wo saari files hain jahan images ke paths change karne hain:

### 1️⃣ Default Business & Common Configurations
| Component / Section | Configuration File Path | Key Name to Modify |
| :--- | :--- | :--- |
| **Hero Background / Banner** | `src/config/businessConfig.js` | `hero.image` |
| **About Section (Main Image)** | `src/config/businessConfig.js` | `about.imageMain` |
| **About Section (Secondary)** | `src/config/businessConfig.js` | `about.imageSecondary` |
| **Services Cards** | `src/data/services.js` | `image` (inside each service object) |
| **Gallery / Showcase** | `src/data/gallery.js` | `image` (inside each item object) |
| **Testimonial Client Avatars** | `src/data/testimonials.js` | `avatar` (inside each item object) |

---

### 2️⃣ Multi-Niche Preset Files (Business-Wise)

Project me multiple business presets hain. Jab user Demo Toolbar se preset badalta hai, toh yeh files load hoti hain. Har business ke liye appropriate high-quality images daalein:

| Business Preset | File Path | Important Image Keys |
| :--- | :--- | :--- |
| 🏥 **Aesthetic Clinic** | `src/config/businesses/clinic.js` | `hero.image`, `about.imageMain`, `about.imageSecondary`, `doctors` array |
| 🦷 **Dental Clinic** | `src/config/businesses/dentalClinic.js` | `hero.image`, `about.imageMain`, `doctors` array |
| 💇‍♀️ **Beauty & Hair Salon** | `src/config/businesses/salon.js` | `hero.image`, `about.imageMain`, `salonTreatments` array |
| 🏋️‍♂️ **Gym & Fitness** | `src/config/businesses/gym.js` | `hero.image`, `about.imageMain`, `trainers` array |
| 🎓 **Coaching & Institute** | `src/config/businesses/coaching.js` | `hero.image`, `about.imageMain`, `courses` array |
| 💼 **Consulting Agency** | `src/config/businesses/consulting.js` | `hero.image`, `about.imageMain`, `services` array |
| 🏡 **Real Estate Agency** | `src/config/businesses/realEstate.js` | `hero.image`, `about.imageMain`, `featuredProperties` array |
| 🍽️ **Restaurant & Lounge** | `src/config/businesses/restaurant.js` | `hero.image`, `about.imageMain`, `featuredMenu` array |

---

## 📐 Recommended Image Specifications & Sizes

Accurate aspect ratios maintain karne se website bilkul professional lagegi:

- **Hero Banner Images**: `1200 x 800 px` (Aspect Ratio ~ `16:9` ya `3:2`)
- **About Section Images**: `800 x 600 px` (Aspect Ratio ~ `4:3`)
- **Service Cards & Property Cards**: `600 x 400 px` (Aspect Ratio ~ `3:2`)
- **Gallery / Showcase Items**: `800 x 600 px` (Aspect Ratio ~ `4:3` ya `16:9`)
- **Doctor / Trainer / Client Avatars**: `300 x 300 px` (Aspect Ratio ~ `1:1` Square)

---

## ⚡ Step 4: How to Save & Push Changes back to GitHub

Jab saari images add ho jayein aur browser (`http://localhost:5173`) me achhi tarah test ho jayein:

```bash
# 1. Changes check karein
git status

# 2. All updated files add karein
git add .

# 3. Commit message likhein
git commit -m "feat: updated high quality section images for all business presets"

# 4. Changes GitHub par push karein
git push origin main
```

---

## ✅ Quality Checklist Before Pushing Code

- [ ] Web app me `npm run dev` karke saari images check kar li hain?
- [ ] Koi broken image link (`404` error) toh nahi hai?
- [ ] Images blurred ya stretched toh nahi lag rahi hain?
- [ ] Local images ka file size 200KB - 500KB se kam rakha hai (Fast page loading ke liye)?
