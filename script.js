function updateTallyDisplay() {
    tallyGroups.innerHTML = ''; // Reset de inhoud
    let maxTallySpots = 6; // Maximaal aantal turfplaatsen

    for (let i = 0; i < maxTallySpots; i++) {
        const img = document.createElement('img');
        if (i < count) {
            // Als er een turf moet worden getoond (op basis van de tellerwaarde)
            img.src = `tally-${Math.min((i % 5) + 1, 5)}.png`; // Gebruik de werkelijke turfafbeelding
        } else {
            // Toon een lege turfplaats
            img.src = 'tally-0.png'; // Veronderstelt dat je een 'lege' turfafbeelding hebt
        }
        img.classList.add('tally');
        tallyGroups.appendChild(img);
    }
}

// Zorg ervoor dat updateTallyDisplay wordt aangeroepen bij het laden van de pagina en na elke reset
document.addEventListener('DOMContentLoaded', updateTallyDisplay);

document.getElementById('addTally').addEventListener('click', () => {
    if (count < maxTallySpots) {
        count++;
        updateTallyDisplay();
    }
});

document.getElementById('removeTally').addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateTallyDisplay();
    }
});

document.getElementById('resetTally').addEventListener('click', () => {
    count = 0;
    updateTallyDisplay();
});

