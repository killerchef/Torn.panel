Torn Tools Panel

A customizable multi-tools userscript for Torn City, organized by categories with a fixed side panel and toast notifications. Designed to be lightweight, extendable, and easy to configure.

---

Features

- Fixed side panel for buttons and quick access items.
- Navigation buttons for frequently used Torn pages (Travel, Casino, Bounties, etc.).
- Quick shop buttons with customizable items and quantities.
- Future category support for faction buttons, alerts, or other tools.
- Toast notifications for visual feedback on actions.
- Fully configurable at the top of the script (no need to touch the core logic).

---

Installation

1. Install a userscript manager, such as Tampermonkey (https://www.tampermonkey.net/) or Greasemonkey (https://www.greasespot.net/).
2. Click the Raw button on the script file in this repository or copy the code.
3. Paste it into a new userscript in your manager and save.
4. Open Torn City (https://www.torn.com) and the panel should appear on the right side.

---

Configuration

All customization is at the top of the script under CONFIGURATION / CUSTOMIZATION.

Navigation Buttons

const navButtons = [
    { label: 'Travel', callback: () => { window.location.href = 'https://www.torn.com/page.php?sid=travel'; } },
    { label: 'Casino', callback: () => { window.location.href = 'https://www.torn.com/casino.php'; } },
];

- Comment out buttons to disable them.
- Add new buttons using the same structure.

Quick Shop Items

const shopItems = [
    { id: 180, emoji: "🍺", label: "Gimme Beers!", amount: 95 },
    { id: 394, emoji: "🧱", label: "Buy Bricks", amount: 95 },
];

- Set id, emoji, label, and amount.
- New items can be added easily by extending the array.

Future Category Buttons

const futureCategoryButtons = [
    { label: 'Faction Alert', callback: () => { alert('This is a faction alert!'); } },
    { label: 'Daily Check', callback: () => { console.log('Daily check executed'); showToast('Daily check executed'); } },
];

- Perfect for alerts, faction buttons, or custom tools.
- Can be extended freely without touching core logic.

---

Contributing

1. Fork the repository.
2. Make changes in your branch.
3. Create a pull request explaining your additions.

---

License

MIT License – feel free to copy, modify, and extend for personal or public use.

---

Screenshots

(Add screenshots if you want to showcase the panel and buttons in Torn City)

---

Author: UnAmigo [3749876]  
GitHub Repo: https://github.com/killerchef/Torn.panel
