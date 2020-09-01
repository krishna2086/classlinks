
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postLinks } from "../../actions/linkActions";
// import { Link } from "react-router-dom";


 class Results extends Component{
    constructor(props){
        super(props);
        this.state={
            sub:this.props.sub,
            link:""
        }
        this.onSubmit=this.onSubmit.bind(this)
    }

    onChange=(e)=>{
       this.setState({link:e.target.value})
    }

    onSubmit=(e)=>{
        e.preventDefault();
        const linkData={
          sub: this.props.sub,
          link:this.state.link
      }
        this.props.postLinks(linkData);

    }

    render(){
        return(
            <div>
               <h2>{this.props.sub}</h2>
               <div className="row">
               <form  noValidate onSubmit={this.onSubmit}>
                  <div className="input-field col s12">
                   <input
                    onChange={this.onChange}
                    value={this.state.name}
                    id="name"
                    type="text"
                    placeholder="Link"
                  />
               <button
                style={{    
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem",
                }}
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Submit
              </button> 
              
           </div>
         </form>
        </div>
     </div>
     )
   }
}

Results.propTypes = {

postLinks: PropTypes.func.isRequired,
errors:PropTypes.object.isRequired
};

const mapStateToProps = state=> ({
errors: state.errors,
auth: state.auth,
link:state.link

});

export default connect(mapStateToProps,{postLinks})(Results);
