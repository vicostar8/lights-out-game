import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 3 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: parseInt(e.target.value) });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ margin: "30px 0px" }}
        className="Form-Text"
      >
        <label>
          Choose game size:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value={3}>3x3</option>
            <option value={4}>4x4</option>
            <option value={5}>5x5</option>
            <option value={6}>6x6</option>
            <option value={7}>7x7</option>
          </select>
        </label>
        <input type="submit" value="Start" />
      </form>
    );
  }
}

export default Form;
