import axios from "axios";

import { GET_LINKS,POST_LINKS,GET_ERRORS } from "./types";

export const getLinks = () => dispatch =>{
    console.log("this is user id");  
  axios
    .post('/api/links/getLinks')
    .then(response =>{
    console.log("get linkAction",response.data)
    dispatch({
      type: GET_LINKS,
      payload: response
    })
      }
    )
    // .catch(err =>
    //  dispatch({
    //    type: GET_ERRORS,
    //    payload: err
    //  }));
  }


  
export const  postLinks = (linkData) => dispatch =>{  
  console.log("linkAction",linkData)
    axios
      .post('/api/links/postLinks',linkData)
      .then(response =>{console.log("profile saved");
      console.log("this is user profile response",response);
   
       dispatch({
       type: POST_LINKS,
       payload: response
     })
        }
      )
      .catch(err =>
       dispatch({
         type: GET_ERRORS,
         payload: err
       }));
   }