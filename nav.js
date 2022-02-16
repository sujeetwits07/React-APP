import React from "react";
import { Nav, Logo, List } from "../../styled/css";
const Navbar = () => {
  return (
    <>
      <Nav>
        <Logo>
          <h1>Logo</h1>
        </Logo>
        <List>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </List>
      </Nav>
    </>
  );
};

export default Navbar;
