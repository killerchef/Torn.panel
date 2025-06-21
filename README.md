# 🧱 Torn - Shop & Tools Panel (AmigoChef Edition)

A powerful modular userscript for **Torn.com**, adding customizable floating buttons for:
- Quick actions (Attack, Profile randomizer, Baldrs)
- Direct shop purchases with toasts (e.g. 🍺 Beers, 🧱 Bricks, 💊 Meds)
- Visual toast notifications centered on screen

> Built with performance, flexibility, and automation in mind — from a Torn player for Torn players.

---

## ⚙️ Features

- 🧲 Floating action panel (fixed right side of screen)
- 🛒 Instant item purchases from Bits 'n' Bobs
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
  { id: 180, emoji: "🍺", label: "Gimme Beers!", amount: 90, topOffset: 42 },
  { id: 999, emoji: "🧱", label: "Buy Bricks", amount: 10, topOffset: 46 },

];

```

Each button supports:

id: item ID from the shop

emoji: item icon

label: button text

amount: how many to buy

topOffset: vertical position (percentage from top of screen)

---

## 🛡 License
MIT License – free to use, modify, distribute.
Give credit if you fork or reuse.


---

## 💡 Author
Crafted by Luís Cardoso a.k.a. UnAmigo
Entrepreneur, cook, and tech automator 🍽💻
AmigoChef Project (coming soon)
