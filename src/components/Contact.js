import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

const Contact = props => {
  return (
    <div>
      <Card>
        <CardHeader>Contact Us</CardHeader>
        <CardBody>
          <CardTitle>Amarjit Singh Kittna</CardTitle>
          <CardText>
            Village & P.O Kittna Tehsil Garhshankar Distt Hoshiarpur, Punjab Ph
            No. 91-9872260747
          </CardText>
          <Button>Email Us</Button>
        </CardBody>
        <CardFooter>Anil @ 2018</CardFooter>
      </Card>
    </div>
  );
};

export default Contact;
