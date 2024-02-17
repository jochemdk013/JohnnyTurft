let counts = [0, 0, 0, 0, 0, 0]; // Een array die het aantal turfjes in elke groep bijhoudt
const maxTallyPerGroup = 5; // Maximaal aantal turfjes per groep
const maxGroups = 6; // Totaal aantal groepen

function updateTallyDisplay() {
    const tallyGroups = document.getElementById('tallyGroups');
    tallyGroups.innerHTML = ''; // Reset de inhoud

    // Creëer en toon lege turfjes voor elke groep vanaf het begin
    for (let groupIndex = 0; groupIndex < maxGroups; groupIndex++) {
        const groupDiv = document.createElement('div');
        groupDiv.classList.add('tallyGroup');

        // Toon 5 posities (turfjes) per groep, gevuld of leeg afhankelijk van de teller
        for (let tallyIndex = 0; tallyIndex < maxTallyPerGroup; tallyIndex++) {
            const img = document.createElement('img');
            img.classList.add('tally');

            // Controleer of het huidige turfje binnen de teller valt
            if (tallyIndex < counts[groupIndex]) {
                // Toon een gevuld turfje
                img.src = `tally-full.png`; // Pas dit aan naar je werkelijke gevulde turfje afbeelding
            } else {
                // Toon een leeg turfje
                img.src = 'tally-empty.png'; // Pas dit aan naar je werkelijke lege turfje afbeelding
            }
            groupDiv.appendChild(img);
        }

        tallyGroups.appendChild(groupDiv);
    }
}

function addTally() {
    // Zoek de eerste groep die niet vol is en voeg een turfje toe
    for (let i = 0; i < counts.length; i++) {
        if (counts[i] < maxTallyPerGroup) {
            counts[i]++;
            break; // Stop na het toevoegen aan de eerste niet-volle groep
        }
    }
    updateTallyDisplay(); // Werk de weergave bij na het toevoegen van een turfje
}

document.getElementById('addTally').addEventListener('click', () => {
    addTally();
});

document.getElementById('resetTally').addEventListener('click', () => {
    counts.fill(0); // Reset alle groepen naar 0 turfjes
    updateTallyDisplay();
});

// Initialiseren bij het laden van de pagina
document.addEventListener('DOMContentLoaded', updateTallyDisplay);
