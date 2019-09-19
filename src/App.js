import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//css
import "./assets/css/app.css"

//components
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import DataTypes from "./components/pages/dataTypes";
import ObjectOrientedProgramming from "./components/pages/oop";
import DataStructures from "./components/pages/dataStructures";
import Algorithms from "./components/pages/algorithms";
import BigO from "./components/pages/bigO";
import Sorting from "./components/pages/sorting";

class App extends Component {
  render() {
    return(
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Header />
        <Route exact path='/' component={Home} />
          <div id="body-container">
            <Route exact path='/ObjectOrientedProgramming' component={ObjectOrientedProgramming} />
            <Route exact path='/DataTypes' component={DataTypes} />
            <Route exact path='/DataStructures' component={DataStructures} />
            <Route exact path='/Algorithms' component={Algorithms} />
            <Route exact path='/bigO' component={BigO} />
            <Route exact path='/Sorting' component={Sorting} />
          </div>
        <Footer />
      </Router>
    );
  }
}

export default App;