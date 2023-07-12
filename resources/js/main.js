const mainFightersButton = document.getElementById("main");
const kameoFightersButton = document.getElementById("kameo");

const mainFighters = document.querySelector(".main-fighters");
const kameoFighters = document.querySelector(".kameo-fighters");

mainFightersButton.addEventListener("click", function () {
  if (!this.classList.contains("selected")) {
    kameoFightersButton.classList.remove("selected");
    kameoFighters.style.display = "none";
    this.classList.add("selected");
    mainFighters.style.display = "flex";
  }
});

kameoFightersButton.addEventListener("click", function () {
  if (!this.classList.contains("selected")) {
    mainFightersButton.classList.remove("selected");
    mainFighters.style.display = "none";
    this.classList.add("selected");
    kameoFighters.style.display = "flex";
  }
});
