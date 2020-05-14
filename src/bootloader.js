import heroImg from "./assets/sprites/hero.png";
import goldCoin from "./assets/sprites/coin_gold.png";
import tilesImg from "./assets/maps/plates.png";

class Bootloader extends Phaser.Scene{
  constructor() {
    super( { key: "Bootloader" } );
  }

  preload(){
    this.load.image("tiles", tilesImg );
    this.load.tilemapTiledJSON("map", "src/assets/maps/map.json");
    this.load.spritesheet("goldCoin", goldCoin, {
      frameWidth:32,
      frameHeight: 32
    });
    this.load.spritesheet('hero', heroImg,{
      frameWidth:16,
      frameHeight: 16
    });

  }

  create() {
    this.scene.start("PlayGame");
  }
}


export default Bootloader;
