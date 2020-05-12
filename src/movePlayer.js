import heroImg from "./assets/sprites/hero.png";

class DemoScene extends Phaser.Scene{
  constructor(){
    super({key: 'demo', active:true})
  }

  preload() {
    this.load.spritesheet('hero', heroImg, {frameWidth:16, frameHeight: 16 })
  }

  create() {

    const hero = this.add.sprite(200, 100, 'hero', 0).setScale(1.6);;
    this.anims.create({
      key: 'walk',
      repeat: -1,
      frameRate:4,
      size: 100,
      frames: this.anims.generateFrameNames('hero' , {start: 0, end: 3})
    });

    hero.play('walk');
  }
}

export default DemoScene
