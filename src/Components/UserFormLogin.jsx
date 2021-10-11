import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUserEmailAndNameAction } from '../Redux/Actions/index';

class UserFormLogin extends React.Component {
  constructor(props){
    super(props)
    this.state = ({
      name: '',
      email: '',
    })
    this.handleChange = this.handleChange.bind(this);
    this.ableButton = this.ableButton.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange (e){
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
  
  ableButton () {
    const { name, email } = this.state;
    return !(name !== '' && this.validateEmail(email) );
  }

  handleClick () {
    const { getUserEmailAndName } = this.props;
    getUserEmailAndName(this.state)
  }
  
  render(){
    return(
      <div>
        <form className="App-header">
          <label htmlFor="name">Nome
            <input onChange={ this.handleChange } type="text" id="name" name="name"/>
          </label>
          <label htmlFor="email">Email
            <input onChange={ this.handleChange } type="text" id="email" name="email"/>
          </label>
          <Link to="/game"><button onClick={ this.handleClick } disabled={ this.ableButton() } type='button'>Jogar</button></Link>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUserEmailAndName: (payload) => dispatch(getUserEmailAndNameAction(payload))
})

export default connect(null, mapDispatchToProps)(UserFormLogin);