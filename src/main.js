import "./style.css";
import Phaser from "phaser";
import header from "./ui/header.html?raw"; // Vite loads this as a plain string
import controls from "./ui/controls.html?raw"; // Vite loads this as a plain string

document.querySelector("#header").innerHTML = header;
document.querySelector("#controls").innerHTML = controls;

const config = {
  type: Phaser.AUTO,
  parent: "game-container", // Matches the HTML ID
  width: 800,
  height: 600,
  scene: [],
};

const game = new Phaser.Game(config);
