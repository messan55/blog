import React from 'react';
import { connect } from "react-redux";
// import { setAuthentification } from "../actions/index";
import { Link } from "react-router-dom";

function Header(props) {
  // console.log(props)
  // const updateAuth = () => {
  //   props.setAuthentification(!props.isLoggedIn);
  // }
  const renderAuthentificationLink = () => {
    console.log(props.isLoggedIn);
    if (props.isLoggedIn) {
      return (
        <li>
          <Link to={"/logout"}>Déconnexion</Link>
        </li>
      );
    } else {
      return [
        <li key={1}>
          <Link to={"/login"}>Connexion</Link>
        </li>,
        <li key={2}>
          <Link to={"/signup"}>Inscription</Link>
        </li>
      ];
    }
  };

  return(
    <nav className="nav-wrapper">
      <ul>
        <li>
          <Link to={"/"}>Accueil</Link>
        </li>
        {renderAuthentificationLink()}
      </ul>
    </nav>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

// const mapDispatchToProps = {
//   setAuthentification
// };

export default connect(mapStateToProps)(Header);