let counts = [0, 0, 0, 0, 0, 0]; // Een array die de turfjes voor elke groep bijhoudt
const maxTallyPerGroup = 5; // Maximaal aantal turfjes per groep
const maxGroups = 6; // Totaal aantal groepen

function updateTallyDisplay() {
    const tallyGroups = document.getElementById('tallyGroups');
    tallyGroups.innerHTML = ''; // Reset de inhoud

    // Loop door elke groep
    for (let i = 0; i < maxGroups; i++) {
        const groupDiv = document.createElement('div');
        groupDiv.classList.add('tallyGroup');

        // Bepaal de turfstatus voor deze groep
        const tallyCount = counts[i];
        for (let j = 1; j <= maxTallyPerGroup; j++) {
            const img = document.createElement('img');
            img.classList.add('tally');
            if (j <= tallyCount) {
                img.src = `tally-${j}.png`; // Toon het overeenkomstige gevulde turfje
            } else {
                img.src = 'tally-0.png'; // Toon een leeg turfje
            }
            groupDiv.appendChild(img);
        }

        tallyGroups.appendChild(groupDiv);
    }
}

function addTally() {
    for (let i = 0; i < maxGroups; i++) {
        if (counts[i] < maxTallyPerGroup) {
            counts[i]++; // Voeg een turfje toe aan de huidige groep
            updateTallyDisplay();
            break; // Stop na het toevoegen van een turfje aan de eerste niet-volle groep
        }
    }
}

document.getElementById('addTally').addEventListener('click', addTally);

document.getElementById('resetTally').addEventListener('click', () => {
    counts.fill(0); // Reset alle groepen naar 0 turfjes
    updateTallyDisplay();
});

// Initialiseren bij het laden van de pagina
document.addEventListener('DOMContentLoaded', updateTallyDisplay);
