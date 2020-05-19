import Phaser from 'phaser'; // eslint-disable-line

const MainMenu = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize:

  function MainMenu() {
    Phaser.Scene.call(this, { key: 'mainmenu' });
    window.MENU = this;
  },

  create() {
    const startGame = this.add.text(0, 0, 'Start Game', { font: '32px Courier', fill: '#fff' });
    this.add.container(300, 250, [startGame]);
    startGame.setInteractive();

    startGame.on('pointerup', function once() {
      this.scene.start('PlayGame');
    }, this);

    const controls = this.add.text(0, 0, 'Controls', { font: '22px Courier', fill: '#fff' });
    this.add.container(340, 450, [controls]);
    controls.setInteractive();

    controls.on('pointerup', function once() {
      this.scene.start('Controls');
    }, this);
  },


});

export default MainMenu;
