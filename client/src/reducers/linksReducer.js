import {  GET_LINKS,POST_LINKS } from "../actions/types";

// const isEmpty = require("is-empty");

const initialState = {
  classLinks:[{name:"krish"}],
  link:{}
};



export default function(state = initialState, action) {
    console.log("reducer",action.payload)
   
     switch (action.type) {

        case GET_LINKS:
            return{

              ...state,
            //  userProfile:{name:"krishna"}
            classLinks: action.payload
            } ;
   
        case POST_LINKS:
          return{
            ...state,
            link:action.Payload
          } ;
   
         
       default:
         return state;
     }

   }
   