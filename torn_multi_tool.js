// ==UserScript==
// @name         Tools Panel
// @namespace    https://torn.com/
// @version      1.o
// @description  Starter Multi-tools!
// @author       UnAmigo [3749876]
// @icon         https://www.torn.com/favicon.ico
// @match        https://www.torn.com/*
// ==/UserScript==

(function () {
    'use strict';

    // === Toast visual ao centro do ecrã ===
    function showToast(message, isSuccess = true) {
        const toast = document.createElement('div');
        toast.innerText = message;
        toast.style.position = 'fixed';
        toast.style.top = '50%';
        toast.style.left = '50%';
        toast.style.transform = 'translate(-50%, -50%)';
        toast.style.padding = '14px 24px';
        toast.style.backgroundColor = isSuccess ? '#28a745' : '#dc3545';
        toast.style.color = 'white';
        toast.style.borderRadius = '8px';
        toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.4)';
        toast.style.fontWeight = 'bold';
        toast.style.zIndex = '10000';
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        document.body.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translate(-50%, -50%) scale(1.05)';
        }, 50);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translate(-50%, -50%) scale(1)';
            setTimeout(() => toast.remove(), 400);
        }, 3000);
    }

    // === Botão flutuante genérico (ex: ataque, perfil, etc.) ===
    function createButton(label, callback, topOffset, id = '') {
        if (id && document.getElementById(id)) return;
        const button = document.createElement('button');
        if (id) button.id = id;
        button.innerHTML = label;
        button.style.position = 'fixed';
        button.style.top = `${topOffset}%`;
        button.style.right = '0%';
        button.style.zIndex = '9999';
        button.style.backgroundColor = 'green';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.padding = '6px 12px';
        button.style.borderRadius = '6px';
        button.style.cursor = 'pointer';
        button.style.marginBottom = '4px';
        button.style.boxShadow = '2px 2px 4px rgba(0,0,0,0.3)';
        button.style.fontWeight = 'bold';
        button.addEventListener('click', callback);
        document.body.appendChild(button);
    }

    // === Botão modular para compra em loja ===
    function createShopButton({ id, emoji, label, amount, shoparea, topOffset = 50 }) {
        const btnId = `shopBtn_${id}_${shoparea}`;
        if (document.getElementById(btnId)) return;

        const button = document.createElement('button');
        button.id = btnId;
        button.innerHTML = `${emoji} ${label}`;
        button.style.position = 'fixed';
        button.style.top = `${topOffset}%`;
        button.style.right = '0%';
        button.style.zIndex = '9999';
        button.style.backgroundColor = '#444';
        button.style.color = '#fff';
        button.style.border = 'none';
        button.style.padding = '6px 12px';
        button.style.borderRadius = '6px';
        button.style.cursor = 'pointer';
        button.style.marginBottom = '4px';
        button.style.boxShadow = '2px 2px 4px rgba(0,0,0,0.3)';
        button.style.fontWeight = 'bold';

        button.addEventListener('click', async () => {
            await getAction({
                type: 'post',
                action: 'shops.php',
                data: {
                    step: 'buyShopItem',
                    ID: id,
                    amount: amount,
                    shoparea: shoparea
                },
                success: (str) => {
                    try {
                        const msg = JSON.parse(str);
                        showToast(`${emoji} ${msg.text}`, msg.success);
                    } catch (e) {
                        console.error('Erro ao interpretar resposta:', e);
                        showToast(`${emoji} Erro ao processar resposta`, false);
                    }
                }
            });
        });

        document.body.appendChild(button);
    }

    // === Lista de botões utilitários ===
    const minID = 1000000;
    const maxID = 2500000;

    createButton('⚔️ Attacking', () => {}, 26);
    createButton('👤 Profile', () => {
        const randID = Math.floor(Math.random() * (maxID - minID + 1)) + minID;
        window.location.href = `https://www.torn.com/profiles.php?XID=${randID}`;
    }, 30);

    createButton('🔫 Attack', () => {
        const randID = Math.floor(Math.random() * (maxID - minID + 1)) + minID;
        window.location.href = `https://www.torn.com/loader.php?sid=attack&user2ID=${randID}`;
    }, 34);

    createButton('📡 Baldrs', () => {
        window.open('https://oran.pw/baldrstargets/', '_blank');
    }, 38);

    // === Lista configurável de botões de loja ===
    const shopItems = [
        { id: 180, emoji: "🍺", label: "Gimme Beers!", amount: 90, shoparea: 103, topOffset: 42 },
        { id: 394, emoji: "🧱", label: "Buy Bricks", amount: 10, shoparea: 103, topOffset: 46 },
        { id: 777, emoji: "💊", label: "Buy Meds", amount: 5, shoparea: 111, topOffset: 50 }
        // Adiciona mais conforme necessário
    ];

    shopItems.forEach(item => createShopButton(item));
})();
