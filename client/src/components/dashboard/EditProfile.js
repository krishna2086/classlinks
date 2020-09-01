import React, { Component } from "react";
//import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postUserProfile } from "../../actions/authActions";
import { getUserProfile } from "../../actions/authActions";
import { Link } from "react-router-dom";

class Profile extends Component  {

    constructor(props){
        super(props);

        const user= {
          id:this.props.match.params.id
        }
        this.props.getUserProfile(user);

        const userData=this.props.auth;
        console.log(userData)
        this.state={
            id:userData.userProfile[0]["_id"],
            name:userData.userProfile[0]["name"],
            Surname:userData.userProfile[0]["Surname"],
            NickName:userData.userProfile[0]["NickName"],
            Phone:userData.userProfile[0]["Phone"],
            DOB:userData.userProfile[0]["DOB"],
            About:userData.userProfile[0]["About"],
            Avatar:userData.userProfile[0]["Avatar"]
        }
       this.onSubmit= this.onSubmit.bind(this);

    }


onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };


   
  onSubmit = e => {
    e.preventDefault();

     const userProfile ={
      id:this.state.id,
      name:this.state.name,
      Surname:this.state.Surname,
      NickName:this.state.NickName,
      Phone:this.state.Phone,
      DOB:this.state.DOB,
      About:this.state.About,
      Avatar:this.state.Avatar

     }
     console.log(userProfile)

     this.props.postUserProfile(userProfile);

   }


   render(){
       console.log(this.state.id)
    return (

      <div className="container">
      <div style={{ marginTop: "4rem" }} className="row">
        <div className="col s11 offset-s1">
             <Link to="/dashboard" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h4>
              <b>Your Profile</b> 
            </h4>
           
          </div>
          <form noValidate onSubmit={this.onSubmit}  >


          <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.name}
                id="name"
                type="text"
                placeholder="Name"
              />
              {/* <label htmlFor="NickName">NickName</label> */}
            </div>
         

          <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.Surname}
                id="Surname"
                type="text"
                placeholder="Surname"
              />
            </div>



            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.NickName}
                id="NickName"
                type="text"
                placeholder="NickName"
              />
              {/* <label htmlFor="NickName">NickName</label> */}
            </div>


            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.DOB}
                id="DOB"
                type="text"
                placeholder="Date Of Birth"

              />
              {/* <label htmlFor="DOB">Date Of Birth</label> */}
            </div>


            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.Phone}
                id="Phone"
                type="text"
                placeholder="Phone"

              />
              {/* <label htmlFor="Phone">Phone</label> */}
            </div>


            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.About}
                id="About"
                type="text"
                placeholder="About"

              />
              {/* <label htmlFor="About">Abaut</label> */}
            </div>


            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.Avatar}
                id="Avatar"
                type="text"
                placeholder="Avatar"

              />
              {/* <label htmlFor="Avatar">Avatar</label> */}
            </div>
           
            
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
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
    </div>
      
 
    );
 }
}

Profile.propTypes = {
      getUserProfile: PropTypes.func.isRequired,

    postUserProfile: PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
};

const mapStateToProps = state=> ({
    errors: state.errors,
    auth: state.auth

});

 export default connect(mapStateToProps,{getUserProfile,postUserProfile})(Profile);
