import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import './Header.css';

function Header() {
  return (
    <Navbar expand="lg" className="navbar-custom py-2">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <img src={logo} alt="Logo" />
          Чіп Чендж
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
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
          <Nav className="ml-auto">
            <Nav.Item className="nav-item-custom">
              <Nav.Link as={Link} to="/profile">
                <i className="bi bi-box-arrow-right"></i>
                Особистий кабінет
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
