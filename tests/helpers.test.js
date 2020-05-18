import helper from '../src/helpers/scripts';

const scoreOnAPI = {
  "result": [
    {
      "user": "John Doe",
      "score": 42
    },
    {
      "user": "Peter Parker",
      "score": 35
    },
    {
      "user": "Wonder Woman",
      "score": 50
    },
    {
      "user": "Rtz",
      "score": 10
    },
    {
      "user": "Bruce W",
      "score": 47
    },
    {
      "user": "Shrek",
      "score": 24
    }
  ]
}

const oneOnAPI = {
  "result": [
    {
      "user": "John Doe",
      "score": 42
    }
  ]
}

const emptyOnAPI = {}

describe('Take the scores from an api and sort it by score in acending order', () => {

  test('Return the user with best score ', () => {
    expect(helper.orderData(scoreOnAPI).result[0].user).toBe("Wonder Woman");
  });

  test('Return the user with worst score ', () => {
    expect(helper.orderData(scoreOnAPI).result[5].user).toBe("Rtz");
  });

  test('If you just have one element the worst and the best socore its the same ', () => {
    let data = helper.orderData(oneOnAPI);
    expect(data.result[0].user).toBe(data.result[data.result.length-1].user);
  });

  test('', () => {

  });

});


describe('Take the sorted scores and return an array with (5 elements) the best scores an users ', () => {
  let data = helper.orderData(scoreOnAPI);

  test('The length of the array must be 5 ', () => {
    expect(helper.getLeaders(data).length).toBe(5);
  });


});
