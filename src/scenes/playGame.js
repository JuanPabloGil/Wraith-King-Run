class PlayGame extends Phaser.Scene{
  constructor(){
    super("PlayGame");
  }

  create(){

    const map = this.make.tilemap({ key: "map" });
    const tileset = map.addTilesetImage("plates", "tiles");

    // const belowLayer = map.createStaticLayer("Below Player", tileset, 0, 0);
    const worldLayer = map.createDynamicLayer("World", tileset, 0, 0);

    worldLayer.setCollisionByProperty( { collides : true } );
    worldLayer.setCollisionFromCollisionGroup();


    // Hero
    this.hero = this.physics.add.sprite(20, 400, 'hero', 0).setScale(1.6);

    this.physics.add.collider(worldLayer, this.hero);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('hero', { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'turn',
      frames: [ { key: 'hero', frame: 0 } ],
      frameRate: 20
    });
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('hero', { start: 8, end: 11 }),
      frameRate: 10,
      repeat: -1
    });


    const camera = this.cameras.main;
    camera.startFollow(this.hero);
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  }

  update () {

    if (this.cursors.left.isDown){
      this.hero.setVelocityX(-160);
      this.hero.anims.play('left', true);
    }else if (this.cursors.right.isDown){
      this.hero.setVelocityX(160);
      this.hero.anims.play('right', true);
    }else {
      this.hero.setVelocityX(0);
      this.hero.anims.play('turn');
    }
    if (this.cursors.up.isDown && this.hero.body.blocked.down){
      this.hero.setVelocityY(-180);
    }

  }
}

export default PlayGame;
