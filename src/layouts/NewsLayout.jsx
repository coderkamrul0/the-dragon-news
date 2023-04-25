import React from "react";
import Header from "../pages/Shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../pages/Shared/Header/LeftNav/LeftNav";
import RightNav from "../pages/Shared/Header/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Header/Footer/Footer";

const NewsLayout = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg={9}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default NewsLayout;
