import React, { Component } from "react";

class Radios extends Component {
  render() {
    return (
      <div>
        <form>
          <label class="radio-inline">
            <input type="radio" name="optradio" checked>
              Option 1
            </input>
          </label>
          <label class="radio-inline">
            <input type="radio" name="optradio">
              Option 2
            </input>
          </label>
          <label class="radio-inline">
            <input type="radio" name="optradio">
              Option 3
            </input>
          </label>
        </form>
      </div>
    );
  }
}

export default Radios;
