export function getRandomInt(max) {
  // Return an integer from 0 to max - 1
  // Guard: if max is not a positive number, return 0
  const m = Number(max) || 0;
  if (m <= 0) return 0;
  return Math.floor(Math.random() * m);
}