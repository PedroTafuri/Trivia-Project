import { GET_TOKEN, GET_EMAIL_AND_NAME } from '../Actions'


const INITIAL_STATE = { 
  token: '',
  name: '',
  email: '',
};

function ReducerLogin(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_TOKEN:
      return {
        ...state,
        token: action.payload,
      }
      case GET_EMAIL_AND_NAME:
        return {
          ...state,
          name: action.payload.name,
          email: action.payload.email,
        }
    default:
      return state;
  }
}

export default ReducerLogin;