import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useRouter } from "next/router";
import Image from "next/image";
export default function Header(props) {
  const router = useRouter();
  const [posts, setposts] = useState([]);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary justify-content-evenly"
      >
        <Container>
          <Navbar.Brand className="logo" href="/">
            Logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-menus">
              <Nav.Link href="#features">
                <div className="d-flex">
                  <Image
                    height="45"
                    width="47"
                    unoptimized
                    src="/assets/i.fa-home.png"
                  />
                  <div className="d-flex flex-column ms-3">
                    <span className="nav-heading-text">Address</span>
                    <span className="nav-heading-desc mt-1">
                      Example England
                    </span>
                  </div>
                </div>
              </Nav.Link>
              <Nav.Link href="#pricing">
                {" "}
                <div className="d-flex">
                  <Image
                    height="45"
                    width="47"
                    unoptimized
                    src="/assets/i.fa-envelope.png"
                  />
                  <div className="d-flex flex-column ms-3">
                    <span className="nav-heading-text">Email</span>
                    <span className="nav-heading-desc mt-1">
                      example@booking.com
                    </span>
                  </div>
                </div>
              </Nav.Link>
              <Nav.Link href="#pricing">
                {" "}
                <div className="d-flex align-items-center">
                  <div className="phone-badge">
                    <Image
                      height="45"
                      className="mb-2"
                      width="47"
                      unoptimized
                      src="/assets/i.fas.png"
                    />
                  </div>
                  <div className="phone-number-div d-flex flex-column">
                    <span className="nav-heading-phone">+1-234-000-2345</span>
                  </div>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="sec-nav-bar d-flex align-items-center">
        <div className="links-div">
          <span onClick={() => router.push("/")} className="link-name">
            Home
          </span>
          <span
            onClick={() => router.push("/Posts")}
            className="link-name ms-5"
          >
            Post
          </span>
        </div>
      </div>
      {/* <div onClick={() => props.addToCartHandler({ data: posts })}>Header</div>
      <div onClick={() => router.push("/Posts")}>Link to Posts</div> */}
    </>
  );
}
