export const GET_TOKEN = 'GET_TOKEN';
export const GET_EMAIL_AND_NAME = 'GET_EMAIL_AND_NAME';
export const SELECTED_ANSWER = 'SELECTED_ANSWER';
export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';

export const getTokenAction = (payload) => ({
  type: GET_TOKEN,
  payload,
})

export const loading = (payload) => ({
  type: LOADING,
  payload,
})

export const success = (payload) => ({
  type: SUCCESS,
  payload,
})

export const getUserEmailAndNameAction = (payload) => ({
  type: GET_EMAIL_AND_NAME,
   payload,
})

export const selectedAnswerAction = (payload) => ({
  type: SELECTED_ANSWER,
   payload,
})

// export function APITriviaQuestion() {
//   return async (dispatch) => {
//   const token = JSON.parse(localStorage.getItem('token'))
//   dispatch(loading())
//   const data = await (await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)).json()
//   dispatch(success(data.results))
//   }
// }

export function APITriviaQuestion() {
  return async (dispatch) => {
    const token = JSON.parse(localStorage.getItem('token'));
    dispatch(loading());
      const data = await (await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)).json();
      return dispatch(success(data.results));
  };
}
