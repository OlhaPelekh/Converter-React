import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Main.css";
import { useNavigate } from "react-router-dom"; 
import card from "../../assets/images/standard-mastercard-card.png";

function Main() {
  const navigate = useNavigate(); 
  return (
      <div className="homepage-background">
        <Container className="homepage-background_container ">
          <Row className="justify-content-center">
            <Col className="homepage-background_chip" lg={{ span: 5, offset: 1 }}>
              <h1 className="homepage-background_chip-title">Чіп Чендж</h1>
              <p className="homepage-background_chip-description">
                Обмінник валют - навчальний
              </p>
              <Button
                className="homepage-background_chip-button"
                variant="primary"
                onClick={() => navigate("/converter")}
              >
                Конвертер валют
              </Button>
            </Col>
            <Col className="homepage-background_chip-img" lg={{ span: 5, offset: 1 }}>
              <img src={card} alt="Credit card" />
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Main;