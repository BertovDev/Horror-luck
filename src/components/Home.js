import React, { useEffect, useRef, useState } from "react";
import gsap, { Power3, Power2 } from "gsap";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row, Image } from "react-bootstrap";

import { Link } from "react-router-dom";

import { Linkedin, Github, Twitter } from "react-bootstrap-icons";
import MyLinks from "./MyLinks";

export default function Home() {
  const ref = useRef();
  const refTittle = useRef();


  useEffect(() => {
    gsap.from(refTittle.current, 4, {
      opacity: 0,
      scale: 0.6,
      ease: Power2.easeOut,
    });
    gsap.from(".pump1", 2, {
      opacity: 0,
      scale: 0.5,
      ease: Power3.easeInOut,
    });
  }, []);


  return (
    <Container
      style={{ height: "85vh" }}
      className="pump1 d-flex justify-content-center align-items-center"
    >
      <Row>
        <Col xs={12}>
          <h1
            ref={refTittle}
            className="aply-font"
            style={{ color: "#FF7930" }}
          >
            Horror Luck
          </h1>
          <div style={{ color: "white" }}>
            <h3>Dont know what horror movie watch ?</h3>
            <h3>Leave it to luck</h3>
          </div>
        </Col>

        <Col xs={12} className="pt-4">
          <Link to="/movies">
            <Button size="lg" variant="dark">
              Start
            </Button>
          </Link>
        </Col>
        <Col xs={12} className="mt-5">
          <MyLinks/>
        </Col>
      </Row>
    </Container>
  );
}
