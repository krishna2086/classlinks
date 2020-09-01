import React, { useState, useEffect } from "react";
import axios from "axios";


function ViewProfile(props)  {


   const user =props.match.params;
  // const [count, setCount] = useState([]);
   const [userData, setUserData] = useState({});
   const [SurnameData, setSurnameData] = useState("");
   const [NickNameData, setNickNameData] = useState("");
   const [PhoneData, setPhoneData] = useState("");
   const [DOBData, setDOBData] = useState("");
   const [AboutData, setAboutData] = useState("");
   const [AvatarData, setAvatarData] = useState("");


    useEffect(() => {
      axios
      .post('/api/users/profile',user)
      .then(response =>{console.log(response.data[0].text);
        const userProfile = response.data[0];
        console.log(userProfile)
        setUserData(userProfile)
        // setCount(response)
        // console.log(setCount)
        }
      )
      .catch(error => console.log(error));
    }, []);

    

  console.log(user.id)
   console.log("you are here")
   

  //  onSubmit =(e) =>{
  //   e.preventDefault();

  //    const userProfile ={
  //     Surname:SurnameData,
  //     NickName:NickNameData,
  //     Phone:PhoneData,
  //     DOB:DOBData,
  //     About:AboutData,
  //     Avatar:AvatarData

  //    }
  //  }
console.log(SurnameData)
    return (

      <div className="container">
      <div style={{ marginTop: "4rem" }} className="row">
        <div className="col s8 offset-s2">
         
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h4>
              <b>Your Profile</b> 
            </h4>
           
          </div>
          <form>

          <div className="input-field col s12">
              <input
                value={userData.name}
                id="name"
                type="text"
              />
            </div>

          <div className="input-field col s12">
              <input
                onChange={ (e)=>setSurnameData( e.target.value)}
                value={SurnameData}
                id="Surname"
                type="text"
              />
              <label htmlFor="Surname">Surname</label>
            </div>



            <div className="input-field col s12">
              <input
                onChange={ (e)=>setNickNameData( e.target.value)}
                value={NickNameData}
                id="NickName"
                type="text"
              />
              <label htmlFor="NickName">NickName</label>
            </div>


            <div className="input-field col s12">
              <input
                onChange={ (e)=>setDOBData( e.target.value)}
                value={DOBData}
                id="DOB"
                type="text"
              />
              <label htmlFor="DOB">Date Of Birth</label>
            </div>


            <div className="input-field col s12">
              <input
                onChange={ (e)=>setPhoneData( e.target.value)}
                value={PhoneData}
                id="Phone"
                type="text"
              />
              <label htmlFor="Phone">Phone</label>
            </div>


            <div className="input-field col s12">
              <input
                onChange={ (e)=>setAboutData( e.target.value)}
                value={AboutData}
                id="About"
                type="text"
              />
              <label htmlFor="About">Abaut</label>
            </div>


            <div className="input-field col s12">
              <input
                onChange={ (e)=>setAvatarData( e.target.value)}
                value={AvatarData}
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
      
      // <div style={{ height: "75vh" }} className="container valign-wrapper">
      //   <div className="row">
      //    <div className="landing-copy col s12 center-align">
      //       <h2>Hello ,This is your profile</h2>
      //      <h2>{userData.name}</h2>
      //      <h2>{userData.profile}</h2>
            
      //       <h1>{props.match.params.id}</h1>

            

      //     </div>
      //   </div>
      // </div>


    );
  }


export default ViewProfile;
