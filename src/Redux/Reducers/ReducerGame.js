import { SELECTED_ANSWER, GET_SCORE, SUCCESS, LOADING } from '../Actions'


const INITIAL_STATE = { 
  selectedAnswer: '',
  loading: true,
  triviaQuestionsAPI: [],
};

function ReducerLogin(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SELECTED_ANSWER:
      return {
        ...state,
        selectedAnswer: action.payload,
      }
      case LOADING:
        return {
          ...state,
          loading: true
        }
      case SUCCESS:
        return { ...state, loading: false, triviaQuestionsAPI: action.payload}
    default:
      return state;
  }
}

export default ReducerLogin;