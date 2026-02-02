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
    const backBtn = document.getElementById('back-btn');

    packsGrid.classList.add('hidden');
    filesGrid.classList.remove('hidden');
    backBtn.classList.remove('hidden');

    filesGrid.innerHTML = '';
    pack.files.forEach(file => {
        const fileCard = document.createElement('div');
        fileCard.className = 'file-card';
        fileCard.innerHTML = `
            <h3>${file.name}</h3>
            <p>${file.description}</p>
            <button class="download-btn" onclick="window.open('${file.download}', '_blank')">Download</button>
        `;
        filesGrid.appendChild(fileCard);
    });
}

// Back to packs view
function backToPacks() {
    const packsGrid = document.getElementById('packs-grid');
    const filesGrid = document.getElementById('files-grid');
    const backBtn = document.getElementById('back-btn');

    filesGrid.classList.add('hidden');
    packsGrid.classList.remove('hidden');
    backBtn.classList.add('hidden');
}

// Event listeners
document.getElementById('back-btn').addEventListener('click', backToPacks);

// Initialize on page load
document.addEventListener('DOMContentLoaded', fetchPacks);
