import Phaser from 'phaser';

class PlayGame extends Phaser.Scene {
  constructor() {
    super('PlayGame');
  }

  create() {
    const sound = this.sound.add('bg', {
      mute: false,
      volume: 0.1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0,
    });

    this.musicOn = true;
    sound.play();

    this.input.keyboard.on('keydown-SPACE', () => {
      if (this.musicOn) {
        sound.stop();
        this.musicOn = false;
      } else {
        sound.play();
        this.musicOn = true;
      }
    });


    this.score = 0;

    this.map = this.make.tilemap({ key: 'map' });
    const tileset = this.map.addTilesetImage('plates', 'tiles', 48, 48, 0, 0);
    this.worldLayer = this.map.createStaticLayer('World', tileset);
    this.worldLayer.setCollisionByProperty({ collides: true });
    this.worldLayer.setCollisionFromCollisionGroup();


    this.hero = this.physics.add.sprite(60, 2100, 'hero', 0).setScale(1.5);
    this.physics.add.collider(this.worldLayer, this.hero);


    this.cursors = this.input.keyboard.createCursorKeys();


    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('hero', { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'turn',
      frames: [{ key: 'hero', frame: 0 }],
      frameRate: 20,
    });
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('hero', { start: 8, end: 11 }),
      frameRate: 10,
      repeat: -1,
    });
    // Coin Animations
    this.anims.create({
      key: 'spinCoin',
      frames: this.anims.generateFrameNumbers('goldCoin', { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });


    this.camera = this.cameras.main;
    this.camera.startFollow(this.hero);
    this.camera.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);


    this.coins = this.physics.add.group({
      key: 'goldCoin',
      repeat: 20,
    });
    this.physics.add.collider(this.worldLayer, this.coins);

    this.children = this.coins.getChildren();

    for (let i = 0; i < this.children.length; i += 1) {
      const x = Phaser.Math.Between(50, 2290);
      const y = Phaser.Math.Between(50, 2000);
      this.children[i].setPosition(x, y).play('spinCoin');
    }


    this.scoreText = this.add.text(10, 10, `Score: ${this.score}`, { font: '32px Courier', fill: '#fff' }).setScrollFactor(0);
    this.physics.add.overlap(this.hero, this.coins, this.collectStar, null, this);
    this.dead = false;
  }


  collectStar(player, coin) {
    coin.disableBody(true, true);
    this.score += 100;
    this.scoreText.setText(`Score: ${this.score}`);
  }


  update() {
    const tile = this.map.getTileAtWorldXY(this.hero.x, this.hero.y);


    this.dead = tile != null && tile.index === 3;
    if (this.dead) {
      this.data.set('score', this.score);
      this.scene.start('LeaderBoard', { score: this.score });
    }

    this.win = tile != null && tile.index === 2;
    if (this.win) {
      this.data.set('score', this.score + 300);
      this.scene.start('LeaderBoard', { score: this.score + 300 });
    }


    if (this.cursors.left.isDown) {
      this.hero.setVelocityX(-180);
      this.hero.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.hero.setVelocityX(180);
      this.hero.anims.play('right', true);
    } else {
      this.hero.setVelocityX(0);
      this.hero.anims.play('turn');
    }
    if ((this.cursors.up.isDown && this.hero.body.blocked.down)
    || this.hero.body.blocked.right
    || this.hero.body.blocked.left) {
      this.hero.setVelocityY(-180);
    }
  }
}


export default PlayGame;
