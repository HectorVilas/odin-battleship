export default function usedCoords(ship) {
  const posX = ship.x;
  const posY = ship.y;
  const coords = { x: [posX], y: [posY] };
  for (let i = 1; i < ship.length; i += 1) {
    if (ship.facing === 'north') coords.y.push(posY + i);
    if (ship.facing === 'south') coords.y.push(posY - i);
    if (ship.facing === 'east') coords.x.push(posX - i);
    if (ship.facing === 'west') coords.x.push(posX + i);
  }
  return coords;
}
