const helper = (function helper() {
  function createGame() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/');
    xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xmlhttp.send(JSON.stringify({ name: 'Wraith King Run - Test' }));
    return xmlhttp;
  }

  function orderData(data) {
    data.result.sort((a, b) => ((a.score > b.score) ? -1 : 1));
    return data;
  }

  function getLeaders(data) {
    const leaders = [];
    for (let i = 0; i < 5; i += 1) {
      if (data.result[i] != null) {
        leaders.push(data.result[i]);
      }
    }
    return leaders;
  }


  function getScoresAsync() {
    return fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9uKjYGDXVQ9NqRrcnypH/scores',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => response.json())
      .then((responseData) => {
        const dataOrdered = orderData(responseData);
        const leaders = getLeaders(dataOrdered);
        return leaders;
      })
      .catch(error => error);
  }


  function saveScore(score) {
    const gameId = '9uKjYGDXVQ9NqRrcnypH';
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
    xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xmlhttp.send(JSON.stringify(score));
  }

  function printHello() {
    return 'Hola';
  }


  return {
    createGame,
    // getScores,
    saveScore,
    printHello,
    getScoresAsync,
  };
}());

export default helper;
