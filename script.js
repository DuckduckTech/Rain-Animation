document.addEventListener("DOMContentLoaded", () => {
  const rainContainer = document.getElementById("rain");
  const raindropCount = 100;

  for (let i = 0; i < raindropCount; i++) {
    const raindrop = document.createElement("div");
    raindrop.classList.add("raindrop");
    raindrop.style.left = Math.random() * 100 + "vw";
    raindrop.style.animationDuration = Math.random() * 2 + 2 + "s";
    raindrop.style.animationDelay = Math.random() * 2 + "s";
    rainContainer.appendChild(raindrop);
  }
});
