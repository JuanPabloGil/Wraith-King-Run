import helper from '../src/helpers/scripts';

const scoreOnAPI = {
  result: [
    {
      user: 'John Doe',
      score: 42,
    },
    {
      user: 'Peter Parker',
      score: 35,
    },
    {
      user: 'Wonder Woman',
      score: 50,
    },
    {
      user: 'Rtz',
      score: 10,
    },
    {
      user: 'Bruce W',
      score: 47,
    },
    {
      user: 'Shrek',
      score: 24,
    },
  ],
};

const oneOnAPI = {
  result: [
    {
      user: 'John Doe',
      score: 42,
    },
  ],
};

const emptyOnAPI = {
  result: [],
};

describe('Take the scores from an api and sort it by score in acending order', () => {
  test('Return the user with best score ', () => {
    expect(helper.orderData(scoreOnAPI).result[0].user).toBe('Wonder Woman');
  });

  test('Return the user with worst score ', () => {
    expect(helper.orderData(scoreOnAPI).result[5].user).toBe('Rtz');
  });

  test('If you just have one element the worst and the best socore its the same ', () => {
    const data = helper.orderData(oneOnAPI);
    expect(data.result[0].user).toBe(data.result[data.result.length - 1].user);
  });

  test('', () => {
    expect(helper.orderData(emptyOnAPI)).toStrictEqual({ result: [] });
  });
});


describe('Take the sorted scores and return an array with (5 elements) the best scores an users ', () => {
  const data = helper.orderData(scoreOnAPI);

  test('The length of the array must be 5 ', () => {
    expect(helper.getLeaders(data).length).toBe(5);
  });
  test('Get player on first position (Best player)', () => {
    expect(helper.getLeaders(data)[0]).toStrictEqual({ score: 50, user: 'Wonder Woman' });
  });
  test('Get player on 2nd position ', () => {
    expect(helper.getLeaders(data)[1]).toStrictEqual({ score: 47, user: 'Bruce W' });
  });
  test('Get player on 3th position ', () => {
    expect(helper.getLeaders(data)[2]).toStrictEqual({ score: 42, user: 'John Doe' });
  });
  test('Get player on 4th position ', () => {
    expect(helper.getLeaders(data)[3]).toStrictEqual({ score: 35, user: 'Peter Parker' });
  });
  test('Get player on 5th position ', () => {
    expect(helper.getLeaders(data)[4]).toStrictEqual({ score: 24, user: 'Shrek' });
  });
  test('Get player on 6th position undefined', () => {
    expect(helper.getLeaders(data)[5]).toBeUndefined();
  });
});
