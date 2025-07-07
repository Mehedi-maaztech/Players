
const handleAvailable = () => {
    const loadPlayers = document.getElementById('loadPlayers');
    const loadSelectedPlayers = document.getElementById('loadSelectedPlayers');
    const Available = document.getElementById('Available');
    const Selected = document.getElementById('Selected');

    
    loadPlayers.classList.remove('hidden');
    loadSelectedPlayers.classList.add('hidden');
    Available.classList.add('active');
    Selected.classList.remove('active');
}

const handleSelectedplayer = () => {
    const loadPlayers = document.getElementById('loadPlayers');
    const loadSelectedPlayers = document.getElementById('loadSelectedPlayers');
    const Available = document.getElementById('Available');
    const Selected = document.getElementById('Selected');

    loadPlayers.classList.add('hidden');
    loadSelectedPlayers.classList.remove('hidden');
    Available.classList.remove('active');
    Selected.classList.add('active');
}

export {handleAvailable, handleSelectedplayer};