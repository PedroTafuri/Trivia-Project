import React from "react";
import { connect } from "react-redux";
import '../Game.css';
import { APITriviaQuestion } from '../Redux/Actions'
import Header from "../Components/Header";
import Question from '../Components/Question';
import { selectedAnswerAction } from '../Redux/Actions'

class Game extends React.Component {
  constructor(props){
    super(props)
    this.state = ({
      time: 30,
      score:0,
      questionIndex: 0,
      buttonStatus: true,
    })
    this.startTimer = this.startTimer.bind(this);
    this.disableAbleButton = this.disableAbleButton.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetToNextQuestion = this.resetToNextQuestion.bind(this);

  }

  startTimer() {
    this.setState({time: 30})
    this.timer =  setInterval(() => {
     this.setState((prevState) => ({time: prevState.time - 1}))
     if(this.state.time === 0){
       this.disableAbleButton(true)
       this.props.GetSelectedAnswer('.')
     }
   }, 1000)
 }

  stopTimer(){
    clearInterval(this.timer)
  }
  
  resetToNextQuestion() {
    const { GetSelectedAnswer, history } = this.props;
    clearInterval(this.timer)
    this.sumScore()
    this.callNextQuestion()
    GetSelectedAnswer('')
    this.disableAbleButton(false)
    this.startTimer()
  }
  
  callNextQuestion(){
    // const { questionIndex } = this.state;
    this.setState((prevState) => ({questionIndex: prevState.questionIndex +1}))
    // if(questionIndex === 5) console.log('deu');
  }

  disableAbleButton(bool) {
    document.querySelectorAll('button').forEach((btn) => {
      btn.disabled = bool;
    });
    if(bool) this.stopTimer()
    this.setState({buttonStatus: !bool})
  }

  sumScore() {
    const { selectedAnswer, triviaQuestionsAPI } = this.props;
    const { time, questionIndex } = this.state;
    let difficulty = 1;
    let correctAnswer = 0;
    if(triviaQuestionsAPI.difficulty === "medium") difficulty += 1;
    if(triviaQuestionsAPI.difficulty === "hard") difficulty += 2;
    if(selectedAnswer ===  triviaQuestionsAPI[questionIndex].correct_answer) correctAnswer = 1;
    this.setState(prevState => ({score: prevState.score + (10 + (time * difficulty)) * correctAnswer}))  
  }
  
  
  componentDidMount() {
    const { triviaAPI } = this.props;
    triviaAPI()
    this.startTimer()
}
  
  
  render(){
    const { time, score, questionIndex, buttonStatus } = this.state;
    const { triviaQuestionsAPI, loading } = this.props
    return(
      <div>
          <Header />
          <p>{score}</p>
        <main>
         { loading ? 'loading...' : <Question disableAbleButton={ this.disableAbleButton } trivia={ triviaQuestionsAPI[questionIndex] }/>}
         { loading ? null :  <button type="buttons" disabled={ buttonStatus }  onClick={ this.resetToNextQuestion } name='Próxima' className='next-question'>Próxima</button>}
         { loading ? null : <p>{ time }</p>}
        </main>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  token: state.ReducerLogin.token,
  selectedAnswer: state.ReducerGame.selectedAnswer,
  loading: state.ReducerGame.loading,
  triviaQuestionsAPI: state.ReducerGame.triviaQuestionsAPI,
})

const mapDispatchToProps = (dispatch) => ({
  triviaAPI: () => dispatch(APITriviaQuestion()),
  GetSelectedAnswer: (payload) => dispatch(selectedAnswerAction(payload)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Game);