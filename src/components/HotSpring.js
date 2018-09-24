import React, { Component } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import "../App.css";

export default class HotSpring extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>
            HOT SPRINGS,LADAKH-THE PILGRIMAGE OF INDIAN POLICE FORCES
          </CardTitle>
          <hr />

          <img
            className="Picture"
            top
            width="400"
            src="http://www.sarwandasskittna.com/images/hs01.jpg"
            height="400"
          />
          <img
            className="Picture"
            top
            width="400"
            src="http://www.sarwandasskittna.com/images/hs1.jpg"
            height="400"
          />
        </CardBody>
      </Card>
    );
  }
}
