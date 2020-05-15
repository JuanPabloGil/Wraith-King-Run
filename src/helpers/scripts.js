const helper = (function(){

  function createGame(){
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify({ "name": "Wraith King Run - Test"}));
    return xmlhttp ;
  }

  function orderData(data){
    data.result.sort((a, b) => (a.score > b.score) ? -1 : 1);
    return data;
  }

  function getLeaders(data){
    let leaders = []
    for (var i = 0 ; i < 5; i += 1){
      if (data.result[i] != null){
        leaders.push(data.result[i]);
      }
    }
    return leaders;
  }

  // function getScores(){
  //   fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores')
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(function(myJson) {
  //     const dataOrdered = orderData(myJson);
  //     const leaders =  getLeaders(dataOrdered);
  //     return leaders
  //   });
  // }


  function getScoresAsync(){
    return fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores',
    {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseData) => {
      const dataOrdered = orderData(responseData);
      const leaders =  getLeaders(dataOrdered);
      return leaders;
    })
    .catch(error => console.warn(error));
  }




  function saveScore(score, gameId){
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(score));
    return xmlhttp ;
  }

  function printHello(){
    return "Hola";
  }


  return {
    createGame,
    // getScores,
    saveScore,
    printHello,
    getScoresAsync
  }

})();

export default helper;
