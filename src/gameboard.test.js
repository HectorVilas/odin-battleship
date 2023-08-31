/* eslint-disable no-undef */
import Gameboard from './gameboard';

const board = new Gameboard(10, 10);

test('Check if carrier ship is unavailable', () => {
  expect(board.port.carrier.sailed).toBe(false);
});

test('Place carrier ship and check if it is inside board', () => {
  board.placeShip('carrier', 5, 3, 'west');
  expect(board.fleet.length).toBe(1);
});

test('Check if carrier ship is now unavailable', () => {
  expect(board.port.carrier.sailed).toBe(true);
});

test('Same ship can\'t be placed twice', () => {
  board.placeShip('carrier', 5, 3, 'west');
  expect(board.fleet.length).toBe(1);
});
