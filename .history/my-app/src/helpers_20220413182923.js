export default function CalculatedWinner(value) {
  const cells = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let index = 0; index < cells.length; index++) {
    const [a, b, c] = cells[index];
    if (cells[a] && cells[a] === cells[b] && cell[a] === cell[c]) {
      return cells[a];
    }
  }
}
