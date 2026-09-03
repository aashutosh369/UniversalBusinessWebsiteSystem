# 🔰 BEGINNER GUIDE: Website Project Clone, Setup, Image Replacement & Git Push

> **Yeh guide bilkul beginner-friendly hai.** Isme har ek command aur step ko simple Hindi/Hinglish me samjhaaya gaya hai.

---

## 🛠️ Step 0: Pehle Yeh Software Install Ho Lene Chahiye

Agar aapke system me pehle se installed hain toh badhiya, nahi toh niche diye link se download kar lein:

1. **Git**: [https://git-scm.com/downloads](https://git-scm.com/downloads) (Code GitHub se lane aur bhejne ke liye)
2. **Node.js**: [https://nodejs.org/](https://nodejs.org/) (*LTS version download karein*)
3. **VS Code**: [https://code.visualstudio.com/](https://code.visualstudio.com/) (Code aur folders dekhne ke liye)

---

## 📥 Step 1: Project ko Apne Computer me Lana (Clone Karna)

1. Apne computer me koi bhi folder kholein (jaise `Desktop` ya `Documents`).
2. Khali jaga par **Right Click** karein aur **"Open in Terminal"** ya **"Git Bash Here"** select karein.
3. Terminal me yeh command type karke **Enter** dabayein:

```bash
git clone https://github.com/aashutosh369/UniversalBusinessWebsiteSystem.git
```

4. Clone hone ke baad, terminal me yeh command likh kar project folder ke andar jayein:

```bash
cd "Universal Business Website System"
```

---

## 📦 Step 2: Project Package Install Karna

Project ke zaroori tools install karne ke liye terminal me yeh command chalaayein:

```bash
npm install
```

*(Isme 30 second se 1 minute lag sakta hai, jab tak screen par `added X packages` likh kar na aa jaye tab tak wait karein).*

---

## 🚀 Step 3: Website ko Apne Computer me Start Karna

Install hone ke baad, website ko chalane ke liye terminal me run karein:

```bash
npm run dev
```

Terminal me ek link dikhai dega, jaise:
`➜ Local: http://localhost:5173/`

Ab Chrome ya koi bhi browser kholein aur URL me `http://localhost:5173/` type karke enter karein. **Aapki website aapke computer me live chalne lagegi!**

---

## 🖼️ Step 4: Website ki Images Badallna (SABSE IMPORTANT STEP)

**Aapko koi bhi Code edit karne ki bilkul zarurat nahi hai!** 

Website ki saari images `public/images/` folder ke andar niche-wise rakhi hui hain.

### Folder Structure Kaise Dekhein:
1. VS Code me project folder kholein (`File -> Open Folder -> Universal Business Website System`).
2. Left side file menu me dekhein: `public` -> `images`

```
public/images/
├── clinic/        (Doctor, Spa, Clinic ki images)
├── dental/        (Dental clinic ki images)
├── salon/         (Hair & Beauty salon ki images)
├── gym/           (Gym & Fitness trainers ki images)
├── coaching/      (Teachers, Mentors, Courses ki images)
├── consulting/    (Office, Business consulting images)
├── realestate/    (Ghar, Villas, Properties ki images)
└── restaurant/    (Khaana, Dishes, Restaurant images)
```

### Image Kaise Change Karein:
1. Jis category ki image change karni hai, us folder me jayein (Example: `public/images/gym/`).
2. Aapko wahan files dikhengi jaise `hero.jpg`, `about-main.jpg`, `trainer-1.jpg`, `trainer-2.jpg`.
3. Apni nayi photo ko bhi **bilkul wahi naam** (`hero.jpg`) de kar us folder me **Replace (Paste/Overwrite)** kar dein.
4. Browser me ja kar dekhein (`http://localhost:5173/`), photo **turant change ho jayegi!**

---

## 📐 Recommended Photo Sizes (Best Look Ke Liye)

- **Hero Banner Photo**: `1200 x 800` pixels (`.jpg` format)
- **About Section Photo**: `800 x 600` pixels (`.jpg` format)
- **Services / Products / Dishes**: `600 x 400` pixels (`.jpg` format)
- **Doctors / Trainers / People Photos**: `300 x 300` pixels (Square `.jpg`)

> 💡 **Tip**: Photos ka filename bilkul same hona chahiye (jaise `hero.jpg`). File type change mat karna (`.jpg` ko `.png` mat banana, warna code me change karna padega).

---

## 📤 Step 5: Apne New Changes Ko GitHub Par Wapas Push Karna

Jab aap saari images change kar lein aur browser me dekh lein ki sab badhiya lag raha hai:

1. Terminal me jayein jahan `npm run dev` chal raha tha.
2. Keyboard par **`Ctrl + C`** dabayein taaki dev server ruk jaye.
3. Ab ek-ek karke yeh 3 commands run karein:

```bash
# Command 1: Saari nayi images aur changes ko select karein
git add .

# Command 2: Commit message likhein ki aapne kya kaam kiya hai
git commit -m "Updated all section photos for business presets"

# Command 3: GitHub par bhej dein
git push origin main
```

Push hone ke baad aapka kaam complete ho gaya! 🎉

---

## ❓ Common Errors & Solutions (Troubleshooting)

### Q1: Terminal me `git: command not found` ya `npm: command not found` bol raha hai?
👉 **Solution**: Aapne Git ya Node.js install nahi kiya hai. Step 0 me दिए गए link se install karein aur VS Code/Terminal restart karein.

### Q2: Maine naye photo replace kiye par browser me puraane hi dikh rahe hain?
👉 **Solution**: Browser cache me purana photo save ho sakta hai. Browser me `Ctrl + F5` (ya `Shift + Refresh`) dabayein.

### Q3: Maine nayi image `hero.png` naam se daal di aur photo gayab ho gayi?
👉 **Solution**: Make sure file extension `.jpg` hi ho (na ki `.png` ya `.jpeg`), kyunki code `.jpg` look up kar raha hai.
