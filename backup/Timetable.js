import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { logoutUser } from "../../actions/authActions";
// import { Link } from "react-router-dom";

class Timetable extends Component{
    constructor(props){
        super(props);

            this.state={
                FLAT:"https://materializecss.com/table.htm",
                SE:"https://stackoverflow.com/"
              }
        
    }

render() {
     return(
     
                
          <table class="highlight">
            <thead>
              <tr>
                  <th>Day/Time</th>
                  <th>11:00 -11:45</th>
                  <th>11:45-12:30</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Monday</td>
                <td><a href={this.state.FLAT}>FLAT</a></td>
                <td><a href={this.state.SE}>SE</a></td>
              </tr>
              <tr>
                <td>Alan</td>
                <td>Jellybean</td>
                <td>$3.76</td>
              </tr>
              <tr>
                <td>Jonathan</td>
                <td>Lollipop</td>
                <td>$7.00</td>
              </tr>
            </tbody>
          </table>
     )
    }
}

export default Timetable;