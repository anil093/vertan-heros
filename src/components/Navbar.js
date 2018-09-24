import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="#About">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Photo Gallery</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#HotSpring">Hot Spring</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">All Shaheed</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Video</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">News Update</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#Contact">Contact Us</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
