import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Card,
  CardTitle,
  CardBody
} from "reactstrap";

export default class HotSpring7 extends React.Component {
  render() {
    return (
      <ListGroup>
        <Card>
          <CardBody>
            <CardTitle>
              The names of ten gallant martyred men of CRPF are :
            </CardTitle>
          </CardBody>
        </Card>
        <ListGroupItem>1st Battlion CT Iman Singh</ListGroupItem>
        <ListGroupItem>1st Battlion CT Norbu Lama</ListGroupItem>
        <ListGroupItem>2nd Battlion CT Beg Raj</ListGroupItem>
        <ListGroupItem>2nd Battlion CT Makhan Lal</ListGroupItem>
        <ListGroupItem>3rd Battlion CT Shiv Nath</ListGroupItem>
        <ListGroupItem>3rd Battlion CT Hangjeet Singh</ListGroupItem>
        <ListGroupItem>3rd Battlion CT Dharam Singh</ListGroupItem>
        <ListGroupItem>3rd Battlion CT Sarwan Dass</ListGroupItem>
        <ListGroupItem>3rd Battlion CT Tshering Norbu</ListGroupItem>
      </ListGroup>
    );
  }
}
