let count = 0;
const maxTally = 30;
const tallyGroups = document.getElementById('tallyGroups');

function updateTallyDisplay() {
    tallyGroups.innerHTML = '';
    let fullSets = Math.floor(count / 5);
    let remainder = count % 5;

    for (let i = 0; i < fullSets; i++) {
        const img = document.createElement('img');
        img.src = `tally-5.png`;
        img.classList.add('tally');
        tallyGroups.appendChild(img);
    }

    if (remainder > 0) {
        const img = document.createElement('img');
        img.src = `tally-${remainder}.png`;
        img.classList.add('tally');
        tallyGroups.appendChild(img);
    }

    if (count >= 30) {
        document.getElementById('completeOverlay').style.display = "flex";
    } else {
        document.getElementById('completeOverlay').style.display = "none";
    }
}

document.getElementById('addTally').addEventListener('click', () => {
    if (count < maxTally) {
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

document.getElementById('closeOverlay').addEventListener('click', function() {
    document.getElementById('completeOverlay').style.display = 'none';
});

updateTallyDisplay();
