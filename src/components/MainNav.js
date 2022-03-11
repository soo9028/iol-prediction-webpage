import React, { Component } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Carousel,
  Card,
  Image,
} from "react-bootstrap";
import "./MainNav.css";

const MainNav = () => {
  return (
    <React.Fragment>
      <Navbar className="navbar navbar-expand-lg" bg="light" expand="sm">
        <Container>
          <Navbar.Brand className="navbar-brand" href="#home">
            LOOCUS IOL
          </Navbar.Brand>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>

      <Image src="./images/hiworks_20220311_8118.PNG.png"></Image>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="./images/snoopy.jpeg/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default MainNav;
