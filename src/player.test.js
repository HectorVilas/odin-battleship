/* eslint-disable no-undef */
import Player from './player';

const player1 = new Player('Tom');
const player2 = new Player('Jason');

test('Place all the ships on both player\'s boards', () => {
  const ships = ['carrier', 'battleship', 'cruiser', 'submarine', 'destroyer'];

  ships.forEach((ship, i) => {
    [player1, player2].forEach((player) => {
      player.board.placeShip(ship, i, 0, 'north');
    });
  });

  expect(player1.board.fleet.length).toBe(5);
  expect(player2.board.fleet.length).toBe(5);
});

test('player1 attacks player2 and hits a ship', () => {
  let hasDamagedShips = false;

  player1.attack(player2, 0, 0);

  player2.board.fleet.forEach((ship) => {
    if (ship.hits) hasDamagedShips = true;
  });

  expect(player2.board.attacked[0]).toEqual({ x: 0, y: 0 });
  expect(hasDamagedShips).toBe(true);
});
