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

test('No ship is added if ship name is incorrect', () => {
  board.placeShip('S.S.LaMancha', 0, 0, 'north');
  expect(board.fleet.length).toBe(1);
});

test('No ship is added if it, or part of it, ends outside the board', () => {
  board.placeShip('cruiser', 1, 0, 'east');
  expect(board.fleet.length).toBe(1);
});

test('No ship is added if facing direction is incorrect', () => {
  board.placeShip('cruiser', 5, 5, 'norte');
  expect(board.fleet.length).toBe(1);
});

test('Can\'t place ship overlaping', () => {
  board.placeShip('battleship', 5, 1, 'north');
  expect(board.fleet.length).toBe(1);
});

test('Not all ships are sunk', () => {
  expect(board.isGameLost()).toBe(false);
});

test('Board receives attack on ship\'s position, ship adds a hit', () => {
  board.receiveAttack(7, 3);
  expect(board.fleet[0].hits).toBe(1);
});

test('Board can\'t receive attack more than once in the same spot', () => {
  board.receiveAttack(7, 3);
  board.receiveAttack(7, 3);
  board.receiveAttack(7, 3);
  board.receiveAttack(7, 3);
  board.receiveAttack(7, 3);
  expect(board.fleet[0].hits).toBe(1);
});

test('All ships are sunk after sinking the only ship', () => {
  board.receiveAttack(5, 3);
  board.receiveAttack(6, 3);
  board.receiveAttack(8, 3);
  board.receiveAttack(9, 3);
  expect(board.isGameLost()).toBe(true);
});

test('The board resets properly', () => {
  expect(board.fleet.length).toBe(1);
  board.resetBoard();
  expect(board.fleet.length).toBe(0);
  let hasUnavailableShips = true;
  Object.keys(board.port).forEach((ship) => {
    if (!board.port[ship].sailed) hasUnavailableShips = false;
  });
  expect(hasUnavailableShips).toBe(false);
});
