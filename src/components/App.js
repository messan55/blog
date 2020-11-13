import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import LoginPage from "./LoginPage";
import LogoutPage from "./LogoutPage";
import Signup from "./Signup";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LoginPage} />
      <Route exact path="/logout" component={LogoutPage} />
      <Route exact path="/signup" component={Signup} />
    </BrowserRouter>
    </div>  
  );
}

export default App;
