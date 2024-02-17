let groupCounts = [0, 0, 0, 0, 0, 0]; // Elke index vertegenwoordigt het aantal turfjes in die groep

function updateTallyDisplay() {
    const tallyGroups = document.getElementById('tallyGroups');
    tallyGroups.innerHTML = ''; // Reset de inhoud

    groupCounts.forEach((count, index) => {
        const groupDiv = document.createElement('div');
        groupDiv.classList.add('tallyGroup');
        
        const img = document.createElement('img');
        img.classList.add('tally');
        img.src = count === 0 ? 'tally-0.png' : `tally-${count}.png`; // Past het pad aan op basis van de teller
        groupDiv.appendChild(img);

        tallyGroups.appendChild(groupDiv);
    });

    // Toon de complete image als alle turfjes zijn toegevoegd
    if (groupCounts.every(count => count === 5)) {
        document.getElementById('completeOverlay').style.display = "flex";
    } else {
        document.getElementById('completeOverlay').style.display = "none";
    }
}

function addTally() {
    const index = groupCounts.findIndex(count => count < 5);
    if (index !== -1) {
        groupCounts[index]++;
        updateTallyDisplay();
    }
}

function resetTally() {
    groupCounts.fill(0);
    updateTallyDisplay();
    document.getElementById('completeOverlay').style.display = 'none';
}

document.getElementById('addTally').addEventListener('click', addTally);
document.getElementById('resetTally').addEventListener('click', resetTally);

document.getElementById('closeOverlay').addEventListener('click', resetTally {
    document.getElementById('completeOverlay').style.display = 'none';
});

// Zorgt ervoor dat de turfdisplay wordt geüpdatet wanneer de pagina geladen is
document.addEventListener('DOMContentLoaded', updateTallyDisplay);
