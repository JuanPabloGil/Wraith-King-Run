import helper from '../src/helpers/scripts';


test('Order an object to returnit in acending order', () => {
  expect(helper.orderData()).toBe(3);
});
