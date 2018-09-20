import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Forecast from "./components/Forecast";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weekForecast: [],
      maxTempF: null,
      minTempF: null,
      tempChange: false,
      tempUnit: "°F",
      conversionMessage: "Show Celcius"
    };
  }

  displayWeeklyForecast = e => {
    axios
      .get(
        "http://api.aerisapi.com/forecasts/11101?client_id=SVVhlCO2nl5rpYkVUNcXc&client_secret=s208gxgDi3a9BYtA5z0Uu7LJc8BzedCNcdI4uQnC"
      )
      .then(res => {
        console.log(res);
        this.setState({
          weekForecast: res.data.response[0].periods
        });
      })
      .catch(err => {
        console.log("error message: ", err);
      });
  };

  componentDidMount() {
    this.displayWeeklyForecast();
  }

  changeTempUnit = () => {
    const { tempChange } = this.state;
    if (tempChange === false) {
      this.setState({
        tempChange: true,
        tempUnit: "°C",
        conversionMessage: "Show Fahrenheit"
      });
    } else {
      this.setState({
        tempChange: false,
        tempUnit: "°F",
        conversionMessage: "Show Celcius"
      });
    }
  };

  render() {
    const {
      conversionMessage,
      maxTempF,
      minTempF,
      tempUnit,
      weekForecast
    } = this.state;

    console.log(this.state.maxTempF, "max");
    console.log(this.state, "state");
    return (
      <div className="App">
        <input
          type="button"
          value={conversionMessage}
          onClick={this.changeTempUnit}
        />
        <Forecast
          tempUnit={tempUnit}
          weekForecast={weekForecast}
          maxTempF={maxTempF}
          minTempF={minTempF}
        />
      </div>
    );
  }
}

export default App;
