import { Fragment } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    navigate("/products");
  };
  return (
    <Fragment>
      <section className="login mt-5 my-auto">
        <div className="container d-flex justify-content-center">
          <Form onSubmit={login} className="logincha">
            <h4 className="text-center">login</h4>
            <Form.Group controlId="email">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="text"
                name="email"
                placeholder="Username
                or
                email"
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="password"
                placeholder="password"
              />
            </Form.Group>
            <h6 className="forget">did you forget</h6>
            <Button className="mt-3 mx-auto d-flex btn-success text-white" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </section>
    </Fragment>
  );
};

export default LoginPage;
