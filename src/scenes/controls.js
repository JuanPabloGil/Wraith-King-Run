import Phaser from 'phaser';

class Controls extends Phaser.Scene {
  constructor() {
    super('Controls');
  }


  create() {
    this.add.text(350, 40, 'Controls', { font: '22px Courier' });

    this.add.text(50, 100, 'Objetive');
    this.add.text(50, 125,
      `
      The main objetive of the game its complete the current level,
      you can complete the level passing throgth the goal (green spot).
      if you touch a red spot the game will finish.
      `);


    this.add.text(50, 300, 'Movements');
    this.add.text(50, 325,
      `
        You can move your character with arrow keys:
        - Jump using the " UP ARROW ".
        - Run using the "LEFT and RIGHT ARROWS".
        - Climb usign the "LEFT and RIGHT ARROWS" near a wall.
        - Stop the music with the "SPACE BAR"
        `);

    const menu = this.add.text(0, 0, 'Return to menu', { font: '22px Courier', fill: '#fff' });
    this.add.container(300, 550, [menu]);
    menu.setInteractive();

    menu.on('pointerdown', () => {
      this.scene.start('mainmenu');
    });
  }
}
export default Controls;
