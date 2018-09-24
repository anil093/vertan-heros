import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import indiaflag from "../indiaflag.png";
import "../App.css";

class About extends React.Component {
  render() {
    return (
      <Jumbotron>
        <header className="App-header">
          <img src={indiaflag} className="App-logo" alt="logo" />
          <h2 className="App-title">
            Martyr <br />
            {this.props.name}
          </h2>
        </header>
        <p>
          <br />
          Shaheed Sarwan Dass was born on June 29th, 1935 in a poor family of
          Late Sh. Ram Asra as father and Late Smt. Nami as mother in Village
          Kittna, Tehsil Garshankar, Distt Hoshiarpur, Punjab. We are planning
          to erect Hot Springs Martyr Memorial at his birth place in near
          future. There used to be only one room , where Shaheed Sarwan Dass
          stayed with his family.During the heavy floods in Punjab in year 1988
          the roof fell down, the only thing his mother was worried about was an
          old trunk(metal suitcase) that she had kept very safely for a long
          period. And today I came to know why that trunk was so priceless.I
          have come across his childhood friends to know about him, everyone
          mentioned him to be handsome, tall, young and strong. Shaheed Sarwan
          Dass was born on June 29th, 1935 in a poor family of Late Sh. Ram Asra
          as father and Late Smt. Nami as mother in Village Kittna, Tehsil
          Garshankar, Distt Hoshiarpur, Punjab. We are planning to erect Hot
          Springs Martyr Memorial at his birth place in near future. There used
          to be only one room , where Shaheed Sarwan Dass stayed with his
          family.During the heavy floods in Punjab in year 1988 the roof fell
          down, the only thing his mother was worried about was an old
          trunk(metal suitcase) that she had kept very safely for a long period.
          And today I came to know why that trunk was so priceless.I have come
          across his childhood friends to know about him, everyone mentioned him
          to be handsome, tall, young and strong."
        </p>
      </Jumbotron>
    );
  }
}
export default About;
