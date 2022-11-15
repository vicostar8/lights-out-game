export function getBoxes(
  currentBox,
  rowsToWork,
  colsToWork,
  tableGame_size,
  tableGame
) {
  const boxes = [
    currentBox - 1,
    currentBox + 1,
    currentBox - tableGame_size,
    currentBox + tableGame_size,
  ].filter((nr) => nr >= 0 && nr < tableGame_size * tableGame_size);

  const boxesToToggle = [currentBox];

  for (let value of boxes) {
    let boxRowAndCol = getRowAndCol(value, tableGame_size, tableGame);

    if (
      rowsToWork.includes(boxRowAndCol.row) &&
      colsToWork.includes(boxRowAndCol.col)
    )
      boxesToToggle.push(value);
  }

  return boxesToToggle;
}

function getRowAndCol(value, tG_s, tG) {
  for (let i = 0; i < tG_s; i++) {
    for (let j = 0; j < tG_s; j++) {
      if (value === tG[i][j].id) return { row: i, col: j };
    }
  }
}
