import React, { Component } from "react";
//import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUserProfile } from "../../actions/authActions";
import { Link } from "react-router-dom";


class Profile extends Component  {

    constructor(props){
        super(props);
        this.state={
            id:this.props.match.params.id,
            name:"",
            Surname:"",
            NickName:"",
            Phone:"",
            DOB:"",
            About:"",
            Avatar:""
        }
        const user={
            id:this.state.id
        }
     this.props.getUserProfile(user);
   
    }



   render(){
    const user= this.props.auth;
    console.log(user.userProfile)
     console.log("hello user",user.userProfile[0]['About'])
   // console.log("hello user2",userProfile.NickName)

    
    return (

      <div className="container">
      <div style={{ marginTop: "4rem" }} className="row">
      {!user.userProfile[0] ? 
        (<h3>Loading</h3>) 
        :
        (
            <div className="col s11 offset-s1">
            <Link to="/dashboard" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
         <div className="col s12" style={{ paddingLeft: "11.250px" }}>
           <h4>
             <b>Your Profile  </b> 
          
             <Link
               to=  {`/EditProfile/${this.state.id}`}
               style={{
                 width: "140px",
                 borderRadius: "3px",
                 letterSpacing: "1.5px"
               }}
               className="btn btn-large waves-effect waves-light hoverable blue accent-3"
             >
               Edit
             </Link>
             </h4>
          
         </div>
         <form noValidate onSubmit={this.onSubmit}>


         <div className="input-field col s12">
             <input
               value={user.userProfile[0]['name']}
               id="name"
               type="text"
               placeholder="Name"

             />
           </div>

           
         <div className="input-field col s12">
             <input
               value={user.userProfile[0]['Surname']}
               id="Surname"
               type="text"
               placeholder="Surname"

             />
           </div>



           <div className="input-field col s12">
             <input
               value={user.userProfile[0]['NickName']}
               id="NickName"
               type="text"
               placeholder="NickName"

             />
           </div>


           <div className="input-field col s12">
             <input
               value={user.userProfile[0]['DOB']}
               id="DOB"
               type="text"
               placeholder="Date Of Birth"

             />
           </div>


           <div className="input-field col s12">
             <input
               value={user.userProfile[0]['Phone']}
               id="Phone"
               type="text"
               placeholder="Phoone"

             />
           </div>


           <div className="input-field col s12">
             <input
               
               value={user.userProfile[0]['About']}
               id="About"
               type="text"
               placeholder="About"

             />
           </div>


           <div className="input-field col s12">
             <input
               value={user.userProfile[0]['Avatar']}
               id="Avatar"
               type="text"
               placeholder="Avatar"

             />
           </div>
          
           
           
         </form>
       </div>   
        )
        }
      </div>
    </div>
      
 
    );
 }
}

Profile.propTypes = {
    getUserProfile: PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired
};

const mapStateToProps = state=> ({
    //errors: state.errors,
    auth: state.auth
});

 export default connect(mapStateToProps,{getUserProfile})(Profile);
