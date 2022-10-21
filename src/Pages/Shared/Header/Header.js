import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import { authContext } from "../../../Context/UserContext";
import LeftNav from "../LeftNav/LeftNav";
import { FaRegUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";

const Header = () => {
  const { user, handleSignOut } = useContext(authContext);

  const btnLogOut = () => {
    handleSignOut()
      .then(() => toast.success("successfully sign out."))
      .catch((error) => console.error(error));
  };

  return (
    <Navbar
      className="mb-4"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link className="text-decoration-none" to="/">
            Dhaka News
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>All News</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
          </Nav>
          <Nav>
            <div className="mt-2 p-0">
              {user ? (
                <>
                  <span className="me-3">{user.displayName}</span>
                  <Button onClick={btnLogOut} variant="outline-primary">
                    Log Out
                  </Button>
                </>
              ) : (
                <div className="d-md-flex d-sm-block">
                  <>
                    <Link
                      className="text-decoration-none me-3 text-secondary"
                      to="/login"
                    >
                      Log In
                    </Link>
                  </>
                  <>
                    <Link
                      className="text-decoration-none text-secondary"
                      to="/register"
                    >
                      Register
                    </Link>
                  </>
                </div>
              )}
            </div>
            <Nav.Link className="m-0" eventKey={2}>
              <span>
                {user?.photoURL ? (
                  <p className="m-0">
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                      src={user?.photoURL}
                      alt=""
                    />
                  </p>
                ) : (
                  <>
                    <FaRegUserCircle></FaRegUserCircle>
                  </>
                )}
              </span>
            </Nav.Link>
          </Nav>
          <div className="d-lg-none">
            <LeftNav> </LeftNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
