import React, { Component } from "react";
import "./radio.css";

export default class Table extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div class="centered">
        <table>
          <tr>
            <th>Initial</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Date</th>
          </tr>
          <tr>
            <td>{this.props.initial}</td>
            <td>{this.props.name}</td>
            <td>{this.props.email}</td>
            <td>{this.props.address}</td>
            <td>{this.props.start_date}</td>
          </tr>
        </table>
      </div>
    );
  }
}
