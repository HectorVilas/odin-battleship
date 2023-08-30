/* eslint-disable no-undef */
import NamedShip from './namedShip';

const ship = new NamedShip(5, 'carrier', 0, 0, 'north');

test('Test inherited properties:', () => {
  expect(ship.isSunk()).toBe(false);
});

test('Not sunk after 1st hit:', () => {
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});
test('Not sunk after 2nd hit:', () => {
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});
test('Not sunk after 3rd hit:', () => {
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});
test('Not sunk after 4th hit:', () => {
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});
test('Sunk after 5th hit (last hit):', () => {
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
