export function checkTable(tableSize, table) {
  // TRUE - IF all boxes are OFF -> OTHERWISE FALSE
  let nr = 0;
  for (let i = 0; i < tableSize; i++) {
    for (let j = 0; j < tableSize; j++) {
      if (table[i][j].isActive === true) return false;
    }
  }
  return true;
}
