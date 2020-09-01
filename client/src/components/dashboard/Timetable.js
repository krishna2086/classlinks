import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getLinks } from "../../actions/linkActions";
// import { Link } from "react-router-dom";

class Timetable extends Component{
    constructor(props){
        super(props);

        this.props.getLinks();
            // this.state={
            //     FLAT:classLinks.FLAT,
            //     SE:classLinks.SE,
            //     DBMS:classLinks.DBMS,
            //     TS:classLinks.TS,
            //     OS:classLinks.OS,
            //     ML:classLinks.ML,
            //     ADJ:classLinks.ADJ,
            //     Pdbms:classLinks.Pdbms,
            //     Pos:classLinks.Pos,
            //     Pml:classLinks.Pml,
            //     Padj:classLinks.padj,
            //     Pts:classLinks.Pts
            //   }
        
    }


render() {
  var l=this.props.link.classLinks.data;
  if(!l ) return (<> </>);
  console.log("get timetable",l.FLAT)

     return(


          <table className="highlight">

            <thead>
              <tr>
                  <th>Day/Time</th>
                  <th>11:00 -11:45</th>
                  <th>11:45-12:30</th>
                  <th>13:00-13:45</th>
                  <th>13:45-14:15(practicals)</th>

              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Monday</td>
                <td><a href={l.FLAT}>FLAT</a></td>
                <td><a href={l.SE}>SE</a></td>
                <td><a href={l.DBMS}>DBMS</a></td>
                <td><a href={l.Pdbms}>DBMS</a></td>
              </tr>

             <tr>
                <td>Tuesday</td>
                <td><a href={l.FLAT}>FLAT</a></td>
                <td><a href={l.SE}>SE</a></td>
                <td><a href={l.DBMS}>DBMS</a></td>
                <td><a href={l.Pos}>OS</a></td>
              </tr>

              <tr>
                <td>Wednesday</td>
                <td><a href={l.FLAT}>ML/ADJ</a></td>
                <td><a href={l.DBMS}>DBMS</a></td>
                <td><a href={l.OS}>OS</a></td>
                <td><a href={l.Pse}>SE</a></td>
              </tr>

              <tr>
                <td>Thursday</td>
                <td><a href={l.FLAT}>FLAT</a></td>
                <td><a href={l.ML}>ML /ADJ</a></td>
                <td><a href={l.OS}>OS</a></td>
                <td><a href={l.Pml}>ML/ADJ</a></td>
              </tr>

              <tr>
                <td>Friday  </td>
                <td><a href={l.SE}>SE</a></td>
                <td><a href={l.ML}>ML/ADJ</a></td>
                <td><a href={l.OS}>OS</a></td>
                <td><a href={l.Pts}>TS</a></td>
              </tr>

            </tbody>
          </table>
    
     )  
    }
}

Timetable.propTypes = {
  getLinks: PropTypes.func.isRequired,
  errors:PropTypes.object.isRequired

};

const mapStateToProps = state=> ({
errors: state.errors,
link:state.link

});

export default connect(mapStateToProps,{getLinks})(Timetable);


