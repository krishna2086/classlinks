import { SET_CURRENT_USER, USER_LOADING, GET_DATA,POST_DATA } from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  userProfile:[{name:"default"}],
  userData:{}
};

export default function(state = initialState, action) {
 // console.log(action.payload)

  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };

     case POST_DATA:
       return{
         ...state,
         userData:action.Payload
       } ;

       case GET_DATA:
       return{
         ...state,
       //  userProfile:{name:"krishna"}
       userProfile: action.payload
       } ;
    default:
      return state;
  }
}
