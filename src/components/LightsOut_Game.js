import React, { Component } from "react";
import TheGame from "./Game";
import GameOver from "./GameOver";

import { generateTable } from "./../utils/generateTable";
import { getRows } from "../utils/getRows";
import { getColumns } from "../utils/getColumns";
import { getBoxes } from "../utils/getBoxes";
import { toggleBoxes } from "./../utils/toggleBoxes";
import { checkTable } from "../utils/checkTable";
// import { table } from "../utils/fakeTable";

import "../css/General.css";
import "../css/Text.css";

class LightsOut_Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableGame_size: 3,
      tableGame: generateTable(3),
      // tableGame: table,
      score: 0,
      isGameOver: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  handleClick(row, col, boxPressed) {
    const rowsToWork = getRows(row, this.state.tableGame_size);
    const colsToWork = getColumns(col, this.state.tableGame_size);
    const boxes = getBoxes(
      boxPressed,
      rowsToWork,
      colsToWork,
      this.state.tableGame_size,
      this.state.tableGame
    );

    const tableGame_clone = toggleBoxes(
      boxes,
      this.state.tableGame_size,
      this.state.tableGame
    );

    this.setState(
      { tableGame: tableGame_clone, score: this.state.score + 1 },
      () => {
        let isGameOver = null;
        if (this.state.score >= 1) {
          isGameOver = checkTable(
            this.state.tableGame_size,
            this.state.tableGame
          );
        }
        if (isGameOver) this.setState({ isGameOver });
      }
    );
  }

  handleSubmit(tableGame_size) {
    this.setState({
      tableGame_size,
      tableGame: generateTable(tableGame_size),
      score: 0,
    });
  }

  handleReset(tableSize_size) {
    this.setState({ tableGame: generateTable(tableSize_size), score: 0 });
  }

  newGame() {
    this.setState({
      tableGame: generateTable(3),
      score: 0,
      isGameOver: false,
    });
  }

  render() {
    const { tableGame, score, tableGame_size, isGameOver } = this.state;

    return !isGameOver ? (
      <TheGame
        table={tableGame}
        score={score}
        tableSize={tableGame_size}
        onClick={this.handleClick}
        onSubmit={this.handleSubmit}
        onReset={this.handleReset}
      />
    ) : (
      <GameOver score={score} onNewGame={this.newGame} />
    );
  }
}

export default LightsOut_Game;
