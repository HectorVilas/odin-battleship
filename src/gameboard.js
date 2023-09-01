import NamedShip from './namedShip';

export default class Gameboard {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.attacked = [];
    this.fleet = [];
    this.port = {
      carrier: { length: 5, sailed: false },
      battleship: { length: 4, sailed: false },
      cruiser: { length: 3, sailed: false },
      submarine: { length: 3, sailed: false },
      destroyer: { length: 2, sailed: false },
    };
  }

  placeShip(name, x, y, facing) {
    const chosenShip = this.port?.[name];
    if (!chosenShip || chosenShip.sailed) return;
    if (!this.#isInsideBoard(chosenShip.length, x, y, facing)) return;
    this.fleet.push(new NamedShip(chosenShip.length, name, x, y, facing));
    chosenShip.sailed = true;
  }

  #isInsideBoard(length, x, y, facing) {
    const isOutside = x < 0 || x > (this.width - 1) || y < 0 || y > (this.height - 1);
    const isFacingWrong = !['north', 'south', 'east', 'west'].includes(facing);
    const isOutNorth = facing === 'north' && y + (length - 1) > (this.height - 1);
    const isOutSouth = facing === 'south' && y - (length - 1) < 0;
    const isOutEast = facing === 'east' && x - (length - 1) < 0;
    const isOutWest = facing === 'west' && x + (length - 1) > (this.width - 1);

    if (
      (isOutside || isFacingWrong)
      || (isOutNorth || isOutSouth || isOutEast || isOutWest)
    ) return false;

    return true;
  }

  isGameLost() {
    let allSunk = true;
    this.fleet.forEach((ship) => {
      if (!ship.isSunk()) allSunk = false;
    });

    return allSunk;
  }

  resetBoard() {
    this.fleet = [];
    this.attacked = [];
    Object.keys(this.port).forEach((ship) => {
      this.port[ship].sailed = false;
    });
  }
}
