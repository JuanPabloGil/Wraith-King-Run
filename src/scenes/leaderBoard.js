import helper from '../helpers/scripts'

class  LeaderBoard  extends Phaser.Scene{
  constructor() {
    super( "LeaderBoard" );
  }

  init(data){
    this.finalScore = data.score;
  }

  create (){

    const printText = this.add.rexBBCodeText(400, 40, 'Your Name', {
      color: 'green',
      fontSize: '24px',
      fixedWidth: 190,
      backgroundColor: '#fff',
    })
    .setOrigin(0.5)
    .setInteractive()
    .on('pointerdown', function () {
      this.plugins.get('rextexteditplugin').edit(printText);
    }, this);

    this.add.text(280, 150,  "Your score: "+ this.finalScore, { font: '32px Courier', fill: '#fff' });

    this.add.text(100, 250,  "Leaderboard Rank", { font: '32px Courier' });

    helper.getScoresAsync().then(response =>{
      if (response[0]!= undefined){
        this.add.text(100, 300,
          "Rank 1 --- Score: " + response[0].score + " User: " + response[0].user,
          { font: '24px Courier', fill: '#fff' }
        );
      }
      if (response[1]!= undefined){
        this.add.text(100, 325,
          "Rank 2 --- Score: " + response[1].score + " User: " + response[1].user,
          { font: '24px Courier', fill: '#fff' }
        );
      }
      if (response[2]!= undefined){
        this.add.text(100, 350,
          "Rank 3 --- Score: " + response[2].score + " User: " + response[2].user,
          { font: '24px Courier', fill: '#fff' }
        );
      }
      if (response[3]!= undefined){
        this.add.text(100, 375,
          "Rank 4 --- Score: " + response[3].score + " User: " + response[3].user,
          { font: '24px Courier', fill: '#fff' }
        );
      }
      if (response[4]!= undefined){
        this.add.text(100, 400,
          "Rank 5 --- Score: " + response[4].score + " User: " + response[4].user,
          { font: '24px Courier', fill: '#fff' }
        );
      }
    });


    const saveScoreButton = this.add.text(0, 0, 'Save score',{ font: '32px Courier', fill: '#fff' });
    const container = this.add.container(300, 70, [ text ]);
    text.setInteractive();

    text.once('pointerup', function () {

      // Original : ygjSnFswoDTxdV9llTIy
      // Test : 9uKjYGDXVQ9NqRrcnypH

      const matchResult = {
        "user" : printText.text,
        "score" : this.finalScore
      }

      helper.saveScore(matchResult);
      this.scene.start("mainmenu");

    }, this);

  }

  update(){}


}

export default LeaderBoard;
