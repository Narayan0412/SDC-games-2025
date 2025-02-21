document.addEventListener("DOMContentLoaded", async () => {
    const grid = document.getElementById("grid");

    try {
        const response = await fetch("players.json");
        const players = await response.json();

        players.forEach((player, index) => {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.textContent = player.playerId;

            // Set cell color based on elimination status
            cell.style.backgroundColor = player.eliminated ? "red" : "green";

            grid.appendChild(cell);
        });
    } catch (error) {
        console.error("Error loading player data:", error);
    }
});
