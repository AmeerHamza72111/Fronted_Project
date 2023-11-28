import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./Header2.css";
const Header2 = () => {
  return (
    <div className="adjustCenter">
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="textcolor" href="#home">
              2023 Plannners & Kits
            </Nav.Link>
            <Nav.Link href="#about">New Arrivals</Nav.Link>

            <NavDropdown
              title={
                <span>
                  Stationary <FontAwesomeIcon icon={faAngleDown} />
                </span>
              }
              id="basic-nav-dropdown"
              renderMenuOnMount={true} // This prop is needed to fix the issue
            >
              <style>
                {`
                .navbar-nav .nav-link::after {
                  display: none !important;
                }
              
              `}
              </style>
              <NavDropdown.Item href="#action/1.1">Action 1.1</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.2">Action 1.2</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.3">Action 1.3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <span>
                  Gift Deals <FontAwesomeIcon icon={faAngleDown} />
                </span>
              }
            >
              <NavDropdown.Item href="#action/1.1">Action 1.1</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.2">Action 1.2</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.3">Action 1.3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <span>
                  Fashion <FontAwesomeIcon icon={faAngleDown} />
                </span>
              }
            >
              <NavDropdown.Item href="#action/1.1">Action 1.1</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.2">Action 1.2</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.3">Action 1.3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <span>
                  Accessories <FontAwesomeIcon icon={faAngleDown} />
                </span>
              }
            >
              <NavDropdown.Item href="#action/1.1">Action 1.1</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.2">Action 1.2</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.3">Action 1.3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <span>
                  Art Supplies <FontAwesomeIcon icon={faAngleDown} />
                </span>
              }
            >
              <NavDropdown.Item href="#action/1.1">Action 1.1</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.2">Action 1.2</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.3">Action 1.3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <span>
                  Home & Decore <FontAwesomeIcon icon={faAngleDown} />
                </span>
              }
            >
              <NavDropdown.Item href="#action/1.1">Action 1.1</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.2">Action 1.2</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.3">Action 1.3</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#contact">Flash Sale</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header2;
