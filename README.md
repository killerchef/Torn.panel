# 🧱 Torn - Shop & Tools Panel (AmigoChef Edition)

A powerful modular userscript for **Torn.com**, adding customizable floating buttons for:
- Quick actions (Attack, Profile randomizer, Baldrs)
- Direct shop purchases with toasts (e.g. 🍺 Beers, 🧱 Bricks, 💊 Meds)
- Visual toast notifications centered on screen

> Built with performance, flexibility, and automation in mind — from a Torn player for Torn players.

---

## ⚙️ Features

- 🧲 Floating action panel (fixed right side of screen)
- 🛒 Instant item purchases from multiple shops (`shoparea` support)
- 🧱 Modular configuration via JS object array
- 🔔 In-screen toast notifications (with emoji & color feedback)
- ♻️ Prevents duplicate buttons on load

---

## 📦 Installation

> Works with [Tampermonkey](https://www.tampermonkey.net/)

### 1. Install Tampermonkey
Install the browser extension for your browser of choice.

### 2. Create a New Script
Click `+` in Tampermonkey dashboard.

### 3. Paste the Script
Copy content from [`torn-shop-buttons.js`](./torn-shop-buttons.js) into the editor and save.

---

## 🧰 Configuration

You can customize buttons in the script:

```js
const shopItems = [
  { id: 180, emoji: "🍺", label: "Gimme Beers!", amount: 90, shoparea: 103, topOffset: 42 },
  { id: 999, emoji: "🧱", label: "Buy Bricks", amount: 10, shoparea: 107, topOffset: 46 },
  { id: 777, emoji: "💊", label: "Buy Meds", amount: 5, shoparea: 111, topOffset: 50 }
];

```


---


💡 Author
Crafted by Luís Cardoso a.k.a. UnAmigo
Entrepreneur, cook, and tech automator 🍽💻
AmigoChef Project (coming soon)
