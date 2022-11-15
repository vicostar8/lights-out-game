import { generateBoxStatus } from "./generateBoxStatus";

export function generateTable(tableGame_size) {
  const table = [];
  let nr = 0;

  for (let i = 0; i < tableGame_size; i++) {
    let localArray = [];
    for (let j = 0; j < tableGame_size; j++) {
      localArray.push({
        id: nr,
        isActive: generateBoxStatus(),
      });
      nr++;
    }
    table.push(localArray);
  }

  return table;
}
