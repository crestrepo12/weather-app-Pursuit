import React, { Component } from "react";
import axios from "axios";

class Forecast extends Component {
  constructor(props) {
    super();

    this.state = {
      maxTempF: null,
      minTempF: null,
      weekForecast: []
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

  retrieveTemp = e => {
      this.setState({
          maxTempF: e.target.value,
          minTempF: e.target.value
      })
  }

  render() {
    const { weekForecast } = this.state;
    const iconStyle ={
        width: '100px',
        height: '100px'
    }

    return (
      <section className="weekly-forecast">
        {weekForecast.map(dayForecast => {
          return (
            <article className="day-forecast" key={dayForecast.timestamp}>
              <div className="date">{dayForecast.dateTimeISO.slice(0, 10)}</div>
              <img src={`./assets/${dayForecast.icon}`} alt={dayForecast.weather} style={{iconStyle}}/>
              <div value={dayForecast.maxTempF} name="maxTempF">High: {dayForecast.maxTempF} </div>
              <div value={dayForecast.minTempF} name="minTempC">Low: {dayForecast.minTempF} </div>
            </article>
          );
        })}
      </section>
    );
  }
}

export default Forecast;
