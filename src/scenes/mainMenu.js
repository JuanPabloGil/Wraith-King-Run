var MainMenu = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize:

  function MainMenu (){
    Phaser.Scene.call(this, { key: 'mainmenu' });
    window.MENU = this;
  },

  create(){
    var text = this.add.text(0, 0, 'Start Game',{ font: '32px Courier', fill: '#fff' });
    var container = this.add.container(300, 250, [ text ]);
    text.setInteractive();

    text.once('pointerup', function () {

      this.scene.start('PlayGame');

    }, this);
  }

});

export default MainMenu;
