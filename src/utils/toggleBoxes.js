export function toggleBoxes(boxes, tableGame_size, tableGame) {
  for (let box of boxes) {
    for (let i = 0; i < tableGame_size; i++) {
      for (let j = 0; j < tableGame_size; j++) {
        if (box === tableGame[i][j].id)
          tableGame[i][j].isActive = !tableGame[i][j].isActive;
      }
    }
  }

  return tableGame;
}
