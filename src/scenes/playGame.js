class PlayGame extends Phaser.Scene{
  constructor(){
    super("PlayGame");
  }

  create(){

    this.platforms = this.physics.add.staticGroup();
    //plataform
    this.platforms.create(0, 600, 'ground').setScale(1).refreshBody();
    this.platforms.create(100, 600, 'ground').setScale(1).refreshBody();
    this.platforms.create(200, 600, 'ground').setScale(1).refreshBody();
    this.platforms.create(300, 600, 'ground').setScale(1).refreshBody();
    this.platforms.create(400, 600, 'ground').setScale(1).refreshBody();
    this.platforms.create(500, 600, 'ground').setScale(1).refreshBody();
    this.platforms.create(600, 600, 'ground').setScale(1).refreshBody();
    this.platforms.create(700, 600, 'ground').setScale(1).refreshBody();

    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
    this.platforms.create(750, 220, 'ground');


    this.movingPlatform = this.physics.add.image(400, 400, 'ground');
    this.movingPlatform.setImmovable(true);
    this.movingPlatform.body.allowGravity = false;
    this.movingPlatform.setVelocityX(50);

    this.hero = this.physics.add.sprite(0, 400, 'hero', 0).setScale(1.6);
    this.hero.setBounce(0.2);
    this.hero.setCollideWorldBounds(true);

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


    this.stars = this.physics.add.group({
      key: 'star',
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 }
    });

    this.stars.children.iterate(function (child) {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    this.physics.add.collider(this.hero, this.platforms);
    this.physics.add.collider(this.hero, this.movingPlatform);
    this.physics.add.collider(this.stars, this.platforms);
    this.physics.add.collider(this.stars, this.movingPlatform);
    this.physics.add.overlap(this.hero, this.stars, this.collectStar, null, this);
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
    if (this.cursors.up.isDown && this.hero.body.touching.down){
      this.hero.setVelocityY(-330);
    }
    if (this.movingPlatform.x >= 500){
      this.movingPlatform.setVelocityX(-50);
    }
    else if (this.movingPlatform.x <= 300){
      this.movingPlatform.setVelocityX(50);
    }
  }

}

export default PlayGame;
