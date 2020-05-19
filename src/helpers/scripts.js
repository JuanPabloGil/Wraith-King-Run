const helper = (function helper() {
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
    return fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ygjSnFswoDTxdV9llTIy/scores',
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
    const gameId = 'ygjSnFswoDTxdV9llTIy';
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
    xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xmlhttp.send(JSON.stringify(score));
  }


  return {
    saveScore,
    getScoresAsync,
    orderData,
    getLeaders,
  };
}());

export default helper;
