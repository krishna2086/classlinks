import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getLinks } from "../../actions/linkActions";
import Results from "./Results"


class ChangeLink extends Component{
    constructor(props){
        super(props);
        this.state={
            showResults: false,
            showResultsP: false,

           
        }
        this.onClick=this.onClick.bind(this);
        this.onClickP=this.onClickP.bind(this);

    }


onClick= (e) => {
    this.setState({ sub:e.target.id });
  
    this.setState({ showResults:true,showResultsP:false});


    }

    
onClickP= (e) => {
    this.setState({ sub:e.target.id });
  
    this.setState({ showResultsP:true,showResults:false});


    }

    render() {
        // const {links} =this.props.links;
        // console.log(links)

        return(
         <div className="container">
           <div style={{ marginTop: "4rem" }} className="row">
              <div className="col s6 ">   
               <div className="collection">
                <h4>Lectures</h4>
                <a href="#!"  id="FLAT" onClick={this.onClick} className="collection-item">FLAT</a>
                <a href="#!"  id="SE" onClick={this.onClick} className="collection-item ">SE</a>
                <a href="#!"  id="DBMS" onClick={this.onClick} className="collection-item">DBMS</a>
                <a href="#!"  id="OS" onClick={this.onClick} className="collection-item">OS</a>
                <a href="#!"  id="TS" onClick={this.onClick} className="collection-item">TS</a>
                <a href="#!"  id="ADJ" onClick={this.onClick} className="collection-item">ADJ</a>
                <a href="#!"  id="ML" onClick={this.onClick} className="collection-item">ML</a>

                </div>
                </div>
                <div className="col s6 ">   

                <div className="collection">

                <h4>Practicals</h4>
                <a href="#!"  id="Pse" onClick={this.onClickP} className="collection-item ">SE</a>
                <a href="#!"  id="Pdbms" onClick={this.onClickP} className="collection-item">DBMS</a>
                <a href="#!"  id="Pos" onClick={this.onClickP} className="collection-item">OS</a>
                <a href="#!"  id="Pts" onClick={this.onClickP} className="collection-item">TS</a>
                <a href="#!"  id="Pml" onClick={this.onClickP} className="collection-item">ML</a>
                <a href="#!"  id="Padj" onClick={this.onClickP} className="collection-item">ADJ</a>

                </div>
               

              </div>
             
           </div>
           <div>
              { this.state.showResults ? <Results  sub={this.state.sub}/> : null }
                { this.state.showResultsP ? <Results  sub={this.state.sub}/> : null }
              </div>
        </div>
        )
    }
}

ChangeLink.propTypes={
    getLinks:PropTypes.func.isRequired,
    links:PropTypes.object.isRequired
};

const mapStateToProps= state =>({
    links:state.links
});

export default connect(mapStateToProps,{getLinks})(ChangeLink);
