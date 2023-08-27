/* eslint-disable no-undef */
import Ship from './ship';

const testShip = Ship(3);

test('Check if new ship, length of three, is sunk:', () => {
  expect(testShip.isSunk()).toBe(false);
});

test('Check if new ship is sunk after 2 hits:', () => {
  testShip.hit();
  testShip.hit();
  expect(testShip.isSunk()).toBe(false);
});

test('Check if new ship is sunk after last hit:', () => {
  testShip.hit();
  expect(testShip.isSunk()).toBe(true);
});
