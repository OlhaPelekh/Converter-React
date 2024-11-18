import { Container, Row, Col,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Footer.css';

function FooterPage() {
  return (
    <footer className="footer-custom py-4">
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <p className="footer-text">
              &copy; 2024 Чіп Чендж. Усі права захищені.
            </p>
          </Col>
          <Col sm={12} md={6} className="text-md-right">
            <Nav>
              <Nav.Item>
                <Nav.Link as={Link} to="/privacy-policy" className="footer-link">
                  Політика конфіденційності
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/terms-of-service" className="footer-link">
                  Умови використання
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterPage;
