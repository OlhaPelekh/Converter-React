import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import "./Footer.css";

function FooterPage() {
  return (
    <footer className="footer-custom">
      <Container className="footer_container">
        <Row className="footer_row">
          <Col className="footer_info" lg={3}>
            <h5>Чіп Чендж</h5>
            <p>04128, м.Київ, вул. Хрещатик, 19</p>
            <p>Ліцензія НБУ №156</p>
            <p>© ПАТ "Чіп Чендж", 2019-2023</p>
          </Col>
          <Col className="footer_services" lg={2}>
            <Nav>
              <Nav.Link as={Link} to="/services" className="nav-link-custom">
                Послуги
              </Nav.Link>
              <Nav.Link as={Link} to="/converter" className="nav-link-custom">
                Конвертер валют
              </Nav.Link>
              <Nav.Link as={Link} to="/contacts" className="nav-link-custom">
                Контакти
              </Nav.Link>
              <Nav.Link as={Link} to="/ask" className="nav-link-custom">
                Задати питання
              </Nav.Link>
            </Nav>
          </Col>
          <Col className="footer_phone-support" lg={2}>
            <p>
              <IoIosPhonePortrait size={20} /> 3773
            </p>
            <p>Цілодобова підтримка</p>
          </Col>
          <Col className="footer_phone" lg={3}>
            <p>
              {" "}
              <FaPhoneAlt size={20} /> 8 800 111 22 33
            </p>
            <p>Безкоштовно для дзвінків в межах України</p>
          </Col>
          <Col className="footer_social-networks" lg={2}>
            <Nav>
              <Nav.Link
                as={Link}
                to="https://www.facebook.com"
                className="nav-link-custom"
              >
                <FaFacebookF />
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="https://www.instagram.com"
                className="nav-link-custom"
              >
                <FaInstagram />
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="https://www.twitter.com"
                className="nav-link-custom"
              >
                <FaTwitter />
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="https://www.youtube.com"
                className="nav-link-custom"
              >
                <FaYoutube />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterPage;
