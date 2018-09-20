import React, { Component } from "react";

class Forecast extends Component {
  render() {
    return (
      <section className="weekly-forecast">
        {this.props.weekForecast.map(dayForecast => {
          return (
            <article className="day-forecast" key={dayForecast.timestamp}>
              <div className="date">{dayForecast.dateTimeISO.slice(0, 10)}</div>

              <img
                src={`./assets/${dayForecast.icon}`}
                alt={dayForecast.weather}
                width="55"
                height="55"
              />

              <div className="temperature">
                <div>
                  High: {`${dayForecast.maxTempF} ${this.props.tempUnit}`}
                </div>
                <div>
                  Low: {`${dayForecast.minTempF} ${this.props.tempUnit}`}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    );
  }
}

export default Forecast;
