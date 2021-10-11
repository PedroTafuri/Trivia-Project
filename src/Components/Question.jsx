import React from "react";
import { connect } from "react-redux";
import { getTokenAction } from '../Redux/Actions'
import Button from "../Components/button";
import '../Game.css'

class Question extends React.Component {
  // constructor(props){
  //   super(props)
    
  // }
  setClassName(answer) {
    const {selectedAnswer, trivia, disableAbleButton } = this.props;
    let className = [];
    if(answer === trivia.correct_answer){
      className.push('correct');
    }else{
      className.push('wrong');
    }

    if(selectedAnswer !== ''){
      className.push('selected')
      disableAbleButton(true)
    }
    return className.join(' ')
  }
  
  render(){
    const { trivia } = this.props;
    return(
      <div>
        <h2>{ trivia.category }</h2>
          <h2>{ trivia.question }</h2>
          {[...trivia.incorrect_answers, trivia.correct_answer]
          .sort()
          .map((answer, index) => (<Button className={ this.setClassName(answer) } key={index} name={ answer } />))
          }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getToken: (payload) => dispatch(getTokenAction(payload))
})

const mapStateToProps = (state) => ({
  name: state.ReducerLogin.name,
  email: state.ReducerLogin.email,
  token: state.ReducerLogin.token,
  selectedAnswer: state.ReducerGame.selectedAnswer,
})

export default connect(mapStateToProps, mapDispatchToProps)(Question);