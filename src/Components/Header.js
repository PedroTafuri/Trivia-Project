import React from "react";
import { connect } from "react-redux";
import { getTokenAction } from '../Redux/Actions'
import md5 from 'crypto-js/md5';
import '../Game.css'

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = ({
      score: 0
    })
    this.APITrivia = this.APITrivia.bind(this);
    this.getGravatarAvatar = this.getGravatarAvatar.bind(this);
  }

  APITrivia() {
    const { getToken } = this.props;
    fetch('https://opentdb.com/api_token.php?command=request')
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem('token', JSON.stringify(data.token))
      getToken(data.token)
    })
  }


  getGravatarAvatar(email) {
    const emailConverted = md5(email).toString();
    const link = `https://www.gravatar.com/avatar/${emailConverted}`
    return link
  }

  updateScore(){
    const { scoreFromRedux } = this.props;
    this.setState((prevState) => ({score: prevState.score + scoreFromRedux}))
  }

  componentDidMount() {
    this.APITrivia();
  }

  
  render(){
    const { name, email } = this.props;
    return(
        <header>
          <h1>Nome do Jogador: {name}</h1>
          <h1>Placar: { this.state.score }</h1>
          <img src={ this.getGravatarAvatar(email) } alt=''/>
        </header>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getToken: (payload) => dispatch(getTokenAction(payload))
})

const mapStateToProps = (state) => ({
  name: state.ReducerLogin.name,
  email: state.ReducerLogin.email,
  scoreFromRedux: state.ReducerGame.score,
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);