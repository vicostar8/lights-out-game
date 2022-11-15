export function getRows(currentRow, tableGame_size) {
  let rowsArray = [currentRow];
  if (currentRow - 1 >= 0 && currentRow - 1 < tableGame_size)
    rowsArray.push(currentRow - 1);
  if (currentRow + 1 >= 0 && currentRow + 1 < tableGame_size)
    rowsArray.push(currentRow + 1);

  rowsArray.sort();
  return rowsArray;
}
