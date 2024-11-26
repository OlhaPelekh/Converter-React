import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
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
import logo from "../../assets/icons/logo.png";

function FooterPage() {
  return (
    <footer className="footer-custom">
      <Container className="footer_container">
        <Row className="footer_row">
          <Col className="footer_info" lg={2}>
            <div className="footer_info-brand">
              <Navbar.Brand
                as={Link}
                to="/"
                className="navbar-brand-custom-footer"
              >
                <img
                  className="navbar-brand-custom-footer-img"
                  src={logo}
                  alt="Logo"
                />
                Чіп Чендж
              </Navbar.Brand>
            </div>
            <p className="footer_info-title">
              04128, м.Київ, вул. Хрещатик, 19 <br />
              Ліцензія НБУ №156 <br />© ПАТ "Чіп Чендж", 2019-2023
            </p>
          </Col>
          <Col className="footer_services" lg={2}>
            <Nav>
              <Nav.Link
                as={Link}
                to="/services"
                className="nav-link-custom-footer"
              >
                Послуги
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/converter"
                className="nav-link-custom-footer"
              >
                Конвертер валют
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contacts"
                className="nav-link-custom-footer"
              >
                Контакти
              </Nav.Link>
              <Nav.Link as={Link} to="/ask" className="nav-link-custom-footer">
                Задати питання
              </Nav.Link>
            </Nav>
          </Col>
          <Col className="footer_phone-support" lg={2}>
            <IoIosPhonePortrait
              className="footer_phone-support-icon"
              size={18.5}
            />
            <div className="footer_phone-support-container">
              <p className="footer_phone-support-phone mb-1">3773</p>
              <p className="footer_phone-support-text mb-0">
                Цілодобова підтримка
              </p>
            </div>
          </Col>
          <Col className="footer_phone" lg={2}>
            <FaPhoneAlt className="footer_phone-icon" size={18.5} />
            <div className="footer_phone-container">
              <p className="footer_phone-phone mb-1">
                8 800 111 22 33
              </p>
              <p className="footer_phone-text mb-0">
                Безкоштовно для дзвінків в межах України
              </p>
            </div>
          </Col>
          <Col className="footer_social-networks" lg={2}>
            <Nav>

              <Nav.Link
                as={Link}
                to="https://www.facebook.com"
                className="nav-link-custom-social-networks"
              >
                <FaFacebookF />
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="https://www.instagram.com"
                className="nav-link-custom-social-networks"
              >
                <FaInstagram />
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="https://www.twitter.com"
                className="nav-link-custom-social-networks"
              >
                <FaTwitter />
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="https://www.youtube.com"
                className="nav-link-custom-social-networks"
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
