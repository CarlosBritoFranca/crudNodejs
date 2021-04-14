import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaUser } from "react-icons/fa";

import { ContainerRegister, ContentResgister } from "./styles";

export default function Register() {
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");

  function register(e) {
    e.preventDefault();

    setRegEmail(regEmail);
    setRegPassword(regPassword);
    setRegConfirmPassword(regConfirmPassword);

    if (regPassword !== regConfirmPassword) {
      alert("As senha digitadas não conferem!!!");
    }

    console.log(regEmail);
    console.log(regPassword);
    console.log(regConfirmPassword);
  }

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <ContainerRegister>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <ContentResgister>
                      <FaUser />
                      <p>Registre-se</p>
                    </ContentResgister>
                  </Card.Title>
                  <Form>
                    <Form.Control
                      type="email"
                      className="mt-4"
                      placeholder="E-mail"
                      value={regEmail}
                      onChange={e => setRegEmail(e.target.value)}
                    />
                    <Form.Control
                      type="password"
                      className="mt-4"
                      placeholder="Senha"
                      value={regPassword}
                      onChange={e => setRegPassword(e.target.value)}
                    />
                    <Form.Control
                      type="password"
                      className="mt-4"
                      placeholder="Confirme a Senha"
                      value={regConfirmPassword}
                      onChange={e => setRegConfirmPassword(e.target.value)}
                    />
                    <h6 className="mt-3 mb-3 float-left">
                      <Link to="/">Voltar</Link>
                    </h6>

                    <Button
                      type="submit"
                      block
                      variant="primary"
                      onClick={register}
                    >
                      Registrar
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </ContainerRegister>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
