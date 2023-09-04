import Gameboard from './gameboard';

export default class Player {
  constructor(name) {
    this.name = name;
    this.board = new Gameboard(10, 10);
    this.gamesWon = 0;
  }

  attack(player, x, y) {
    player.board.receiveAttack(x, y);
  }

  addWin() {
    this.gamesWon += 1;
  }
}
