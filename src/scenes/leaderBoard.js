class  LeaderBoard  extends Phaser.Scene{
  constructor() {
    super( "LeaderBoard" );
  }

  init(data){
    this.finalScore = data.score;
  }

  create (){
    var printText = this.add.rexBBCodeText(400, 40, 'Username', {
      color: 'green',
      fontSize: '24px',
      fixedWidth: 190,
      backgroundColor: '#333333',
    })
    .setOrigin(0.5)
    .setInteractive()
    .on('pointerdown', function () {
      this.plugins.get('rextexteditplugin').edit(printText);
    }, this);

    var text = this.add.text(0, 0, 'Save score',{ font: '32px Courier', fill: '#fff' });
    var container = this.add.container(300, 70, [ text ]);
    text.setInteractive();

    text.once('pointerup', function () {
      // console.log( "Score: " + 300 + " User: " + this.finalScore );
      this.scene.start('mainmenu');
    }, this);

  }

  update(){}


}

export default LeaderBoard;
