import { Container, Row, Col, Button } from "react-bootstrap";
import "./HomePage.css";
import home_content from "../../assets/images/home-content.png";
import Main from "../../components/Main/Main.js";

function HomePage() {
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
//   <div>
//   <div className="homepage-background">
//   <img src={main} alt="main" className="background-image" />
//     <Container>
//       <Row>
//         <Col md={6}>
//           <h2 className="content-title">Конвертер валют</h2>
//           <p className="content-description">
//             Переважна діяльність банківської групи за останні чотири звітні
//             квартали становить 50 і більше відсотків.
//           </p>
//           <Button variant="primary">Конвертувати валюту</Button>
//         </Col>
//         <Col md={6}>
//           <img src={card} alt="Банківська карта" className="img-card" />
//         </Col>
//       </Row>
//     </Container>
//   </div>
//   <div className="d-flex justify-content-center align-items-center vh-100">
//     <Container>
//       <Row className="align-items-center">
//         <Col md={6}>
//           <h2 className="content-title">Конвертер валют</h2>
//           <p className="content-description">
//             Переважна діяльність банківської групи за останні чотири звітні
//             квартали становить 50 і більше відсотків.
//           </p>
//           <Button variant="primary">Конвертувати валюту</Button>
//         </Col>
//         <Col md={6}>
//           <img
//             src={home_content}
//             alt="Конвертер валют"
//             className="img-home_content"
//           />
//         </Col>
//       </Row>
//     </Container>
//   </div>
// </div>
