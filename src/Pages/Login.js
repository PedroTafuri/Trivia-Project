import React from "react";
import { Link } from "react-router-dom";
import Button from "../Components/button";
import TriviaLogo from "../Components/TriviaLogo";
import UserFormLogin from '../Components/UserFormLogin';

class Login extends React.Component {
  render(){
    return(
      <div>
        <TriviaLogo />
        <UserFormLogin />
        <Link to='/settings'><Button name='Configurações'/></Link>  
      </div>
    )
  }
}

export default Login;