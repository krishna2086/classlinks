import React, { Component } from "react";
import axios from 'axios';


class Profile extends Component  {

    constructor(props){
        super(props);
        this.state={
            id:this.props.match.params.id,
            Surname:"",
            NickName:"",
            Phone:"",
            DOB:"",
            About:"",
            Avatar:""
        }
       this.registerProfile= this.registerProfile.bind(this);
       this.onSubmit= this.onSubmit.bind(this);

    }


//    const user =props.match.params;
//   // const [count, setCount] = useState([]);
//    const [userData, setUserData] = useState({});
//    const [SurnameData, setSurnameData] = useState("");
//    const [NickNameData, setNickNameData] = useState("");
//    const [PhoneData, setPhoneData] = useState("");
//    const [DOBData, setDOBData] = useState("");
//    const [AboutData, setAboutData] = useState("");
//    const [AvatarData, setAvatarData] = useState("");


onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };


   
  onSubmit = e => {
    e.preventDefault();

     const userProfile ={
      id:this.state.id,
      Surname:this.state.Surname,
      NickName:this.state.NickName,
      Phone:this.state.Phone,
      DOB:this.state.DOB,
      About:this.state.About,
      Avatar:this.state.Avatar

     }
     console.log(userProfile)

     this.registerProfile(userProfile);

   }

   registerProfile = (userProfile) =>{
       console.log(userProfile);
    axios
      .post('/api/users/profile',userProfile)
      .then(response =>{console.log("profile saved");
        }
      )
      .catch(error => console.log(error));
   }

   render(){
       
    return (

      <div className="container">
      <div style={{ marginTop: "4rem" }} className="row">
        <div className="col s8 offset-s2">
         
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h4>
              <b>Your Profile</b> 
            </h4>
           
          </div>
          <form noValidate onSubmit={this.onSubmit}>

         

          <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.Surname}
                id="Surname"
                type="text"
              />
              <label htmlFor="Surname">Surname</label>
            </div>



            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.NickName}
                id="NickName"
                type="text"
              />
              <label htmlFor="NickName">NickName</label>
            </div>


            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.DOB}
                id="DOB"
                type="text"
              />
              <label htmlFor="DOB">Date Of Birth</label>
            </div>


            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.Phone}
                id="Phone"
                type="text"
              />
              <label htmlFor="Phone">Phone</label>
            </div>


            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.About}
                id="About"
                type="text"
              />
              <label htmlFor="About">Abaut</label>
            </div>


            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.Avatar}
                id="Avatar"
                type="text"
              />
              <label htmlFor="Avatar">Avatar</label>
            </div>
           
            
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
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

 export default Profile;
