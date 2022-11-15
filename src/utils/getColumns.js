export function getColumns(currentColumn, tableGame_size) {
  let columnsArray = [currentColumn];
  if (currentColumn - 1 >= 0 && currentColumn - 1 < tableGame_size)
    columnsArray.push(currentColumn - 1);
  if (currentColumn + 1 >= 0 && currentColumn + 1 < tableGame_size)
    columnsArray.push(currentColumn + 1);

  columnsArray.sort();
  return columnsArray;
}
