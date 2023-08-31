/* eslint-disable no-undef */
import Gameboard from './gameboard';

const board = new Gameboard(10, 10);

test('Carrier ship is available for placing', () => {
  expect(board.port.carrier.sailed).toBe(false);
});

test('Carrier ship is inside board after placing it', () => {
  board.placeShip('carrier', 5, 3, 'west');
  expect(board.fleet.length).toBe(1);
});

test('Carrier ship is now unavailable for placing', () => {
  expect(board.port.carrier.sailed).toBe(true);
});

test('Same ship can\'t be placed twice', () => {
  board.placeShip('carrier', 5, 3, 'west');
  expect(board.fleet.length).toBe(1);
});

test('Not all ships are sunk', () => {
  expect(board.isGameLost()).toBe(false);
});

test('All ships are sunk after sinking the only ship', () => {
  board.fleet[0].hit();
  board.fleet[0].hit();
  board.fleet[0].hit();
  board.fleet[0].hit();
  board.fleet[0].hit();
  expect(board.isGameLost()).toBe(true);
});
