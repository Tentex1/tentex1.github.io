# 🌌 Premium Golden Neon Portfolio - Duran "Tentex"

Welcome to my personal portfolio repository! This is a state-of-the-art, fully responsive, and ultra-sleek developer portfolio website. Crafted with a premium **Golden Neon Theme**, modern glassmorphism effects, hardware-accelerated animations, and real-time GitHub API integration.

🔗 **Live Demo:** [https://tentex1.github.io](https://tentex1.github.io)

---

## ✨ Features

### 1. 🌟 Real-Time GitHub API Integration
* **Smart Repository Fetcher:** Automatically fetches public repositories directly from the GitHub API.
* **Auto-Filtering:** Seamlessly detects and showcases selected projects tagged with `portfolio` or `portfolio-project`, with special exceptions built-in for flagship desktop software like **`ADBFastbootGUI`** and **`SystemInfo`**.
* **Dynamic Languages & Colors:** Color dots are mapped according to actual programming languages in real time.

### 2. 🔮 Glassmorphic Project Details Pop-Up (Modal)
* **Elastic Spring Zoom:** Clicking on any project card triggers a gorgeous details popup that scales up with a premium spring animation (`cubic-bezier` transition) while smoothly blurring the background (`backdrop-filter`).
* **Instant Meta Statistics:** Displays live repository star counts, forks, and the codebase language.
* **Pixel-Perfect Alignment:** All action buttons are vertically centered using Flexbox with elegant gaps and FontAwesome iconography.

### 3. 🌓 Dynamic Neon Theme System
* **Seamless Toggle:** Users can easily switch between a gorgeous dark mode (golden neon glowing on dark zinc) and a warm, high-contrast light mode.
* **Persistence:** Theme preferences are stored locally in the browser's `localStorage` so the setting persists across page visits.

### 4. 🚀 Ultra-Fluid Page Transitions
* **Dynamic Nav Loader:** A glowing gradient progress bar shoots across the bottom of the navigation bar during page shifts, providing a seamless single-page-app (SPA) feel.
* **Hardware Accelerated Fade:** Page contents fade out smoothly and load elegantly on arrival.

### 5. 🛠️ Tech Stack & Skills Grid
* Interactive skills cards with hover translations (translate-up) and golden glowing borders.
* Live GitHub Readme Statistics, top languages chart, and active streak counters embedded seamlessly.

---

## 🛠️ Built With

* **Markup:** Semantic [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
* **Styling:** Premium [Vanilla CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) (using CSS Variables, Backdrop Filters, and Custom Cubic-Bezier Curves)
* **Logic:** Vanilla [ES6 JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (Asynchronous GitHub API, dynamic DOM generation, and Event Propagation controls)
* **Icons:** [FontAwesome 6](https://fontawesome.com/) & Shields.io Badges

---

## 📁 Repository Structure

```bash
tentex1.github.io/
├── index.html       # Home page (Hero entrance & Biyography)
├── projeler.html    # Projects page (API project grid & Popup modal)
├── hakkimda.html    # About page (Skills grid, badges & GitHub Stats)
├── iletisim.html    # Contact page (Social platforms & tooltips)
├── style.css        # Core stylesheet (Custom themes, animations & modal layout)
├── script.js        # Site logic (Transitions, GitHub Fetcher, Modal & Theme)
├── pp.png           # Profile photo
└── README.md        # This documentation
```

---

## 🚀 How to Run Locally

Since this is a client-side static web application, it does not require complex building tools or node dependencies!

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Tentex1/tentex1.github.io.git
   ```
2. **Navigate into the folder:**
   ```bash
   cd tentex1.github.io
   ```
3. **Run it:**
   * Simply double-click `index.html` to open it in your browser, or
   * Run a simple local server (e.g., using VS Code's **Live Server** extension or Python's `python -m http.server`).

---

## 🎨 Personalization & Customization

### Changing the GitHub Username
Open `script.js` and edit the username variable:
```javascript
const githubUsername = "YourUsername";
```

### Modifying the Neon Colors
Open `style.css` and adjust the HSL/HEX variables inside `:root`:
```css
:root {
    --neon-main-color: #f7c96e; /* Change to your primary neon color */
    --neon-glow-color: #fffc7f; /* Change to your primary glow color */
}
```

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <sub>Designed & Developed with Premium Neon Tech by <b>Antigravity AI</b></sub><br>
  <sub>Google DeepMind - Advanced Agentic Coding Team</sub><br>
  <sub>Specially crafted for <b>Duran "Tentex"</b> (2026)</sub>
</p>
