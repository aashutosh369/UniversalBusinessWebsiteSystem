# 🖼️ Developer Guide: How to Replace Images in Universal Business Website System

Is project me sabhi business niches ke liye **local image structure** pehle se hi setup kar diya gaya hai:

```
public/images/
├── clinic/
│   ├── hero.jpg
│   ├── about-main.jpg
│   ├── about-secondary.jpg
│   ├── doctor-1.jpg, doctor-2.jpg, doctor-3.jpg
│   ├── service-1.jpg ... service-6.jpg
│   └── gallery-1.jpg ... gallery-4.jpg
├── dental/
│   ├── hero.jpg
│   ├── about-main.jpg
│   ├── doctor-1.jpg, doctor-2.jpg
│   └── service-1.jpg ... service-4.jpg
├── salon/
│   ├── hero.jpg
│   ├── about-main.jpg
│   ├── treatment-1.jpg ... treatment-4.jpg
│   └── stylist-1.jpg, stylist-2.jpg
├── gym/
│   ├── hero.jpg
│   ├── about-main.jpg
│   ├── trainer-1.jpg ... trainer-4.jpg
│   └── program-1.jpg ... program-3.jpg
├── coaching/
│   ├── hero.jpg
│   ├── about-main.jpg
│   ├── course-1.jpg ... course-4.jpg
│   └── mentor-1.jpg, mentor-2.jpg
├── consulting/
│   ├── hero.jpg
│   ├── about-main.jpg
│   └── service-1.jpg ... service-4.jpg
├── realestate/
│   ├── hero.jpg
│   ├── about-main.jpg
│   └── prop-1.jpg ... prop-6.jpg
└── restaurant/
    ├── hero.jpg
    ├── about-main.jpg
    └── dish-1.jpg ... dish-6.jpg
```

---

## 📌 Step 1: Project Setup

```bash
# 1. Repository clone karein
git clone https://github.com/aashutosh369/UniversalBusinessWebsiteSystem.git

# 2. Project folder me enter karein
cd "Universal Business Website System"

# 3. Dependencies install karein
npm install

# 4. Local dev server start karein
npm run dev
```

---

## 🖼️ Step 2: Images Replace Kaise Karein?

Aapko config files me koi bhi URL change karne ki zaroorat nahi hai!

1. Jis business niche ke liye image change karni hai, uske folder me jayein (e.g. `public/images/salon/`).
2. Apni nayi high-resolution image ko **same filename** se save karke overwrite kar dein!
   - Example: Hero image replace karne ke liye `public/images/salon/hero.jpg` me naya photo drop kar dein.
3. Live browser (`http://localhost:5173`) me auto reload hokar naye photos show ho jayenge.

---

## 📐 Recommended Dimensions

- **Hero Banner**: `1200 x 800 px`
- **About Section**: `800 x 600 px`
- **Cards / Services / Properties / Dishes**: `600 x 400 px`
- **Avatars (Doctors / Trainers / Stylists / Mentors)**: `300 x 300 px` (Square)

---

## ⚡ Step 3: Save & Push Changes to GitHub

```bash
git add .
git commit -m "feat: replaced stock images with actual business photos"
git push origin main
```
