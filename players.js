document.addEventListener("DOMContentLoaded", async () => {
    const playersList = document.getElementById("playersList");

    try {
        const response = await fetch("players.json");
        const players = await response.json();

        players.forEach(player => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>PlayerID:</strong> ${player.playerId} —  ${player.playerName}`;
            listItem.classList.add(player.eliminated ? 'eliminated' : 'active');
            playersList.appendChild(listItem);
        });
    } catch (error) {
        console.error("Error loading player data:", error);
    }
});
