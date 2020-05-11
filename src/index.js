import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {

}

function create() {
  this.add.text(0, 0, 'It works', { fontSize: 100, fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
}
