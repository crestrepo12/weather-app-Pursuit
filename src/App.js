import React, { Component } from "react";
import "./App.css";
// import axios from "axios";
import Forecast from "./components/Forecast";

/*NOTE: 
ACCESS CURRENT WEATHER -> http://api.aerisapi.com/forecasts/11101?client_id=CLIENT_ID&client_secret=CLIENT_SECRET
CLIENT: SVVhlCO2nl5rpYkVUNcXc  (ACCESS ID)
CLIENT_SECRET: s208gxgDi3a9BYtA5z0Uu7LJc8BzedCNcdI4uQnC  (SECRET KEY)
*/
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      maxTempF: null,
      minTempF: null,
    };
  }

  renderForecast(temp) {
    return <Forecast temp={this.state.temp}/>
  }
  render() {
    return (
      <div className="App">
        <input type="button" value="Show Fahrenheit" />
        <Forecast temp={this.state.temp} />
      </div>
    );
  }
}

export default App;
