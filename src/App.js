import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";

//css
import "./assets/app.css"

//components
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import DataTypes from "./components/pages/dataTypes";
import ObjectOrientedProgramming from "./components/pages/oop";
import DataStructures from "./components/pages/dataStructures";
import Algorithms from "./components/pages/algorithms";
import Sorting from "./components/pages/sorting";
import Searching from "./components/pages/searching";

class App extends Component {
  render() {
    return(
      <Router>
          <body>
            <Header />
            <Route exact path='/' component={Home} />
            <Route exact path='/DataTypes' component={DataTypes} />
            <Route exact path='/ObjectOrientedProgramming' component={ObjectOrientedProgramming} />
            <Route exact path='/DataStructures' component={DataStructures} />
            <Route exact path='/Algorithms' component={Algorithms} />
            <Route exact path='/Sorting' component={Sorting} />
            <Route exact path='/Searching' component={Searching} />
            <Footer />
          </body>
      </Router>
    );
  }
}

export default App;