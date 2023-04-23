import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import QZone from "../../QZone/QZone";
import bg from '../../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button className="mb-2 w-100" variant="outline-primary">
        {" "}
        <FaGoogle /> Login With Google
      </Button>{" "}
      <Button className="w-100" variant="outline-secondary">
        {" "}
        <FaGithub /> Login With Github
      </Button>{" "}
      <div>
        <h4>Find us on</h4>
        <ListGroup className="display-6">
          <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone/>
      <div className="mt-4">
        <img className="w-100" src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
