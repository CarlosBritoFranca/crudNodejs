import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaUser } from "react-icons/fa";

import { ContainerLogin, ContentLogin } from "./styles";

export default function Login() {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassWord] = useState("");

  function login(e) {
    e.preventDefault();

    setNewEmail(newEmail);
    setNewPassWord(newPassword);
  }

  return (
    <>
      <Container>
        <Row>
          <Col sm={4}></Col>
          <Col>
            <ContainerLogin>
              <Card className="mt-5">
                <Card.Body className="text-center">
                  <Card.Title>
                    <ContentLogin>
                      <FaUser />
                      <p> Login</p>
                    </ContentLogin>
                  </Card.Title>
                  <Form>
                    <Form.Control
                      type="email"
                      className="mt-4"
                      placeholder="E-mail"
                      value={newEmail}
                      onChange={e => setNewEmail(e.target.value)}
                    />
                    <Form.Control
                      type="password"
                      className="mt-4"
                      placeholder="Senha"
                      value={newPassword}
                      onChange={e => setNewPassWord(e.target.value)}
                    />
                    <h6 className="mt-3 mb-3 float-left">
                      <Link to="/register">Registre-se</Link>
                    </h6>
                    <Button
                      type="submit"
                      block
                      variant="primary"
                      className="mt-3"
                      onClick={login}
                    >
                      {" "}
                      Entrar{" "}
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </ContainerLogin>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    </>
  );
}
