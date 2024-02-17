let groupCounts = [0, 0, 0, 0, 0, 0]; // Elke index vertegenwoordigt het aantal turfjes in die groep

function updateTallyDisplay() {
    const tallyGroups = document.getElementById('tallyGroups');
    tallyGroups.innerHTML = ''; // Reset de inhoud

    // Maak zes turf groepen
    groupCounts.forEach((count, index) => {
        const groupDiv = document.createElement('div');
        groupDiv.classList.add('tallyGroup');

        const img = document.createElement('img');
        // Zorg ervoor dat we verwijzen naar 'tally-0.png' voor de lege staat
        img.src = count === 0 ? 'tally-0.png' : `tally-${count}.png`; 
        img.classList.add('tally');
        groupDiv.appendChild(img);

        tallyGroups.appendChild(groupDiv);
    });
}

function addTally() {
    // Zoek de eerste groep die niet vol is (minder dan 5) en voeg een turfje toe
    const index = groupCounts.findIndex(count => count < 5);
    if (index !== -1) {
        groupCounts[index]++;
        updateTallyDisplay();
    }
}

document.getElementById('addTally').addEventListener('click', addTally);

document.getElementById('resetTally').addEventListener('click', () => {
    groupCounts.fill(0); // Reset alle groepen naar 0 turfjes
    updateTallyDisplay();
});

document.addEventListener('DOMContentLoaded', updateTallyDisplay);
