import React, { Component } from "react";
import { Route } from 'react-router-dom';

import Homepage from "./component/Homepage";
import Pricing from "./component/Pricing";

import $ from 'jquery'; 



class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Homepage}/>
        <Route path="/pricing" component={Pricing}/>
      </div>
    );
  }
}

export default App;
