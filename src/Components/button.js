import React from "react";
import { connect } from "react-redux";
import { selectedAnswerAction } from '../Redux/Actions'

class Button extends React.Component {
  constructor(props){
    super(props)
    this.state = ({
    })
    this.selectedAnswer = this.selectedAnswer.bind(this);
  }

  selectedAnswer(e) {
    const { GetSelectedAnswer } = this.props;
    if(e.target.name !== 'Próxima') GetSelectedAnswer(e.target.name)

  }

  render(){
    const { name, className } = this.props;
    return(
  <button  onClick={this.selectedAnswer} name={ name } className={ className } type="button" >{ name }</button>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
GetSelectedAnswer: (payload) => dispatch(selectedAnswerAction(payload))
})

export default connect(null, mapDispatchToProps)(Button);