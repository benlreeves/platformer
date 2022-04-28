/* eslint-disable no-undef, no-unused-vars */
import Phaser from "phaser";
// FREE SPRITES: https://craftpix.net/freebies/free-3-cyberpunk-characters-pixel-art/
// FREE TILES: https://craftpix.net/freebies/free-green-zone-tileset-pixel-art/
const config = {
  type: Phaser.AUTO,
  width: 400,
  height: 300,
  autoFocus: false,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  pixelArt: true
};

const game = new Phaser.Game(config);

let platforms;
let player;
let cursors;
let hearts;

function preload() {
  cursors = this.input.keyboard.createCursorKeys();
  this.load.image("sky", "assets/sky.png");
  this.load.image("ground", "assets/platform.png");
  this.load.image("star", "assets/star.png");
  this.load.image("winged-heart", "assets/winged-heart.png");
  this.load.image("flat-face-banana", "assets/flat-face-banana.png");
  this.load.image("banana", "assets/banana.png");
  this.load.image("AngelHeart", "assets/AngelHeart.png");
}

function create() {
  this.add.image(200, 150, "sky");

  player = this.add.image(200, 150, "flat-face-banana");
  this.physics.add.existing(player, false);

  player.body.setCollideWorldBounds(true);

  hearts = this.physics.add.group({});

  platforms = this.physics.add.staticGroup();
  platforms.create(50, 295, "ground").setScale(0.25).refreshBody();
  platforms.create(100, 295, "ground").setScale(0.25).refreshBody();
  platforms.create(150, 295, "ground").setScale(0.25).refreshBody();
  platforms.create(200, 295, "ground").setScale(0.25).refreshBody();
  platforms.create(250, 295, "ground").setScale(0.25).refreshBody();
  platforms.create(300, 295, "ground").setScale(0.25).refreshBody();
  platforms.create(350, 295, "ground").setScale(0.25).refreshBody();
  platforms.create(150, 100, "ground").setScale(0.25).refreshBody();
  platforms.create(64, 100, "ground").setScale(0.25).refreshBody();
  platforms.create(100, 150, "ground").setScale(0.25).refreshBody();
  platforms.create(200, 200, "ground").setScale(0.25).refreshBody();

  this.physics.add.collider(player, platforms);
}

function update() {
  if (cursors.left.isDown) {
    player.body.setVelocityX(-160);
  } else if (cursors.right.isDown) {
    player.body.setVelocityX(160);
  } else {
    player.body.setVelocityX(0);
  }
  if (cursors.up.isDown && player.body.touching.down) {
    player.body.setVelocityY(-330);
  }
}
//
