import Ship from './ship';

export default class NamedShip extends Ship {
  constructor(length, name, x, y, facing) {
    super(length);
    this.name = name;
    this.x = x;
    this.y = y;
    /* NOTE: the front of the ship is placed on X and Y, the rest is drawn behind.
     If ship faces north, then the rest of it draws going south */
    this.facing = facing;
  }
}
