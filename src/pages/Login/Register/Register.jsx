import React, { useContext } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {

  const {createUser} = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value
    const photo = form.photo.value
    const email = form.email.value
    const password = form.password.value
    console.log(name,photo,email,password);

    createUser(email,password)
    .then((result) => {
      const createdUser = result.user
      console.log(createdUser);
    })
    .catch((error) => {
      console.log(error);
    })

  }

  return (
    <>
      <div>
        <Container>
          <Row className="vh-80 mt-5 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <Card className="px-4">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h4 className="fw-bold mb-2 text-center text-uppercase ">
                      Register Your Account
                    </h4>
                    <div className="mb-3">
                      <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="Name">
                          <Form.Label className="text-center">Name</Form.Label>
                          <Form.Control 
                          type="text" 
                          name="name" 
                          placeholder="Enter Name" 
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Photo URl</Form.Label>
                          <Form.Control
                            type="text"
                            name="photo"
                            placeholder="Photo url"
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            required
                            placeholder="Enter email"
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            name="password"
                            required
                            placeholder="Password"
                          />
                        </Form.Group>
                        
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        ></Form.Group>
                        <div className="d-grid">
                          <Button variant="primary" type="submit">
                            Create Account
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Already have an account??{" "}
                          <Link to='/login' className="text-primary fw-bold">
                            Sign In
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Register;
