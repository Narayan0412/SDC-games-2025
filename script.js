document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.getElementById("grid");

  try {
    const response = await fetch("players.json");
    const players = await response.json();

    players.forEach((player, index) => {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.textContent = player.playerId;

      cell.style.backgroundColor = player.eliminated ? "red" : "green";

      grid.appendChild(cell);
    });
  } catch (error) {
    console.error("Error loading player data:", error);
  }

  const buttons = document.querySelectorAll(".card-btn");

  // Define the card HTML (using template literals)
  const cardHTML = `
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

  <!--  Thanks to frontendmentor.io for the challenge.  -->
  
<body>
  <div class="bg">
    <h1>Kiberbash</h1>
  </div>
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="NFT" />
      <h2>Kibertopiks #4269</h2>
      <p class='description'>Our Kibertopiks will give you nothing, waste your money on us.</p>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>0.031 ETH</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>11 days left</p>
        </div>
      </div>
      <hr />
      <div class='creator'>
        <div class='wrapper'>
          <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt="Creator" />
        </div>
        <p><ins>Creation of</ins> Kiberbash</p>
      </div>
    </div>
  </div>
</body>

</html>
  `;

  // When any button is clicked, insert the card HTML
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const cardContainer = document.getElementById("cardContainer");
      // Insert (or update) the card HTML inside the container
      cardContainer.innerHTML = cardHTML;
      // Optionally, you can scroll to the card or toggle its display
      cardContainer.scrollIntoView({ behavior: "smooth" });
    });
  });
});
