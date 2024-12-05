import React from 'react';
import  { Container, Row, Col, Button } from "react-bootstrap";
import "./HomePage.css";
import { useNavigate } from "react-router-dom"; 
import home_content from "../../assets/images/home-content.png";
import Main from "../../components/Main/Main.js";

function HomePage() {
  const navigate = useNavigate(); 
  return (
    <main>
      <Main />
      <div className="homepage-section">
        <Container className="homepage-section_container">
          <Row className="justify-content-center align-items-center">
            <Col className="homepage-section_converter" lg={5}>
              <h2 className="homepage-section_converter-title">
                Конвертер валют
              </h2>
              <p className="homepage-section_converter-description">
                Переважна діяльність банківської
                <br />
                групи за останні чотири звітні квартали
                <br />
                становить 50 і більше відсотків.
              </p>
              <Button
                className="homepage-section_converter-button"
                variant="primary"
                onClick={() => navigate("/converter")}
              >
                Конвертувати валюту
              </Button>
            </Col>
            <Col className="homepage-section_converter" lg={5}>
              <img
                className="homepage-section_converter-img"
                src={home_content}
                alt="Laptop and card"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}

export default HomePage;