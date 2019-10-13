function pascalTriangle(j) {
  // space complexity O(n)
  let arr = []
  // O(1)
  if (j === 0) arr.push(1)

  // O(n)
  for (let i = 0; i < j; i++) {
    // check to prevent line break after last row
    i === j - 1 ? arr.push(pascalGenerate(i)) : arr.push(`${pascalGenerate(i)} \n`);
  }
        // O(n)
  return arr.join('').replace(/,/g, ' ')
}

function pascalGenerate(n) {
  if (n <= 0) return 1;
  // recursive
  // might be O(2^n)
  return generateNextRow(pascalGenerate(n - 1))
}

// O(n)
function generateNextRow(lastRow) {
  // space complexity O(n) or O(n^2);
  let nextRow = []
  // 0(1);
  nextRow.push(1)

  // O(n)
  for (let i = 0; i < lastRow.length - 1; i++) {
    nextRow.push(lastRow[i] + lastRow[i + 1])
  }

  // O(1)
  nextRow.push(1)
  return nextRow
}
console.log(pascalTriangle(10))
