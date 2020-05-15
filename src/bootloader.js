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

    let url;
    url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexbbcodetextplugin.min.js';
    this.load.plugin('rexbbcodetextplugin', url, true);

    url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextexteditplugin.min.js';
    this.load.plugin('rextexteditplugin', url, true);
  }

  create() {
    this.scene.start("mainmenu");
  }
}


export default Bootloader;
