import './style.css';

const body = document.querySelector('body');
const app = document.createElement('main');
const player1 = document.createElement('div');
const player2 = document.createElement('div');
const player1Board = document.createElement('div');
const player2Board = document.createElement('div');

app.setAttribute('id', 'app');
[player1, player2].forEach((player, i) => player.setAttribute('id', `player-${i + 1}`));
[player1Board, player2Board].forEach((board) => board.classList.add('gameboard'));

player1.append(player1Board);
player2.append(player2Board);
app.append(player1, player2);
body.append(app);
