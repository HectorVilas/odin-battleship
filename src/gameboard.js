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
}
