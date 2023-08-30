import Ship from './ship';

export default class NamedShip extends Ship {
  constructor(length, name, x, y, facing) {
    super(length);
    this.name = name;
    this.x = x;
    this.y = y;
    this.facing = facing;
  }
}
