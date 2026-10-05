import './style.css'
import Phaser from 'phaser';

const config = {
    type: Phaser.AUTO,
    parent: 'game-container', // Matches the HTML ID
    width: 800,
    height: 600,
    scene: []
};

const game = new Phaser.Game(config);
