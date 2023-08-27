export default function Ship(length) {
  let hits = 0;

  function hit() {
    hits += 1;
  }

  function isSunk() {
    return length === hits;
  }

  return { hit, isSunk };
}
