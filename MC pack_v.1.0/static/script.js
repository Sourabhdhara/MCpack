// Fetch packs data from Flask API
async function fetchPacks() {
    try {
        const response = await fetch('/api/packs');
        const packs = await response.json();
        renderPacks(packs);
    } catch (error) {
        console.error('Error fetching packs:', error);
    }
}

// Render packs grid on homepage
function renderPacks(packs) {
    const packsGrid = document.getElementById('packs-grid');
    packsGrid.innerHTML = '';
    packs.forEach(pack => {
        const packCard = document.createElement('div');
        packCard.className = 'pack-card';
        packCard.innerHTML = `
            <img src="${pack.pack_image}" alt="${pack.pack_name}">
            <h3>${pack.pack_name}</h3>
        `;
        packCard.addEventListener('click', () => showPackDetails(pack));
        packsGrid.appendChild(packCard);
    });
}

// Show details view for a pack (files grid)
function showPackDetails(pack) {
    const packsGrid = document.getElementById('packs-grid');
    const filesGrid = document.getElementById('files-grid');

    packsGrid.classList.add('hidden');
    filesGrid.classList.remove('hidden');

    // Push state to browser history for back button support
    history.pushState({ view: 'pack-details', pack: pack.pack_name }, '', `#${pack.pack_name}`);

    filesGrid.innerHTML = '';
    pack.files.forEach(file => {
        const fileCard = document.createElement('div');
        fileCard.className = 'file-card';
        fileCard.innerHTML = `
            <h3>${file.name}</h3>
            <p>${file.description}</p>
            <button class="download-btn" onclick="window.open('${file.download}', '_blank')">Download</button>
        `;
        // Add tooltip to file cards
        fileCard.setAttribute('data-tooltip', file.description);
        filesGrid.appendChild(fileCard);
    });
}

// Handle browser back button navigation
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.view === 'pack-details') {
        // User navigated to pack details, but since we're going back, we need to show packs
        const packsGrid = document.getElementById('packs-grid');
        const filesGrid = document.getElementById('files-grid');
        filesGrid.classList.add('hidden');
        packsGrid.classList.remove('hidden');
    } else {
        // Default to showing packs
        const packsGrid = document.getElementById('packs-grid');
        const filesGrid = document.getElementById('files-grid');
        filesGrid.classList.add('hidden');
        packsGrid.classList.remove('hidden');
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', fetchPacks);
