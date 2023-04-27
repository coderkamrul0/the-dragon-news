import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Header/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../pages/Shared/Header/LeftNav/LeftNav";
import RightNav from "../pages/Shared/Header/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div>
      <Header />
      <NavigationBar/>
      <Container>
        <Row>
          <Col lg={3}>
                <LeftNav/>
          </Col>
          <Col lg={6}>
                <Outlet></Outlet>
          </Col>
          <Col lg={3}>
                <RightNav/>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
