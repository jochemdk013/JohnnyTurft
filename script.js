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

function subtractTally() {
    // Loop achteruit door de groepen om het laatste toegevoegde turfje te vinden en te verwijderen
    for (let i = groupCounts.length - 1; i >= 0; i--) {
        if (groupCounts[i] > 0) {
            groupCounts[i]--; // Verwijder een turfje uit de huidige groep
            break; // Stop na het verwijderen van een turfje
        }
    }
    updateTallyDisplay(); // Werk de weergave bij
}

function hideMoreOptions() {
    document.getElementById('moreOptions').classList.add('hidden');
}

// Voeg event listeners toe na het laden van de DOM
document.addEventListener('DOMContentLoaded', function() {
    updateTallyDisplay();

    document.getElementById('addTally').addEventListener('click', addTally);

    document.getElementById('moreButton').addEventListener('click', function() {
        var moreOptions = document.getElementById('moreOptions');
        if (moreOptions.classList.contains('hidden')) {
            moreOptions.classList.remove('hidden');
        } else {
            moreOptions.classList.add('hidden');
        }
    });

    document.getElementById('removeTally').addEventListener('click', function() {
        subtractTally();
        hideMoreOptions(); // Verberg de opties na de actie
    });

    document.getElementById('resetTally').addEventListener('click', function() {
        resetTally();
        hideMoreOptions(); // Verberg de opties na de actie
    });

    document.getElementById('overlayCloseButton').addEventListener('click', function() {
        document.getElementById('completeOverlay').classList.add('hidden');
        resetTally(); // Als je wilt dat het resetten van de tally's onderdeel is van het sluiten.
    });

    // Om de overlay te tonen
    document.getElementById('completeOverlay').classList.remove('hidden');

    // Om de overlay te verbergen
    document.getElementById('completeOverlay').classList.add('hidden')

});
