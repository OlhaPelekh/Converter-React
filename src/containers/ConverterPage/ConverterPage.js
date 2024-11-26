import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "./ConverterPage.css";
import Main from "../../components/Main/Main.js";

function ConverterPage() {
    const historyData = [
        { date: "25.11.2020", amountFrom: "1000 UAH", amountTo: "36,65 USD" },
        { date: "25.11.2020", amountFrom: "1000 UAH", amountTo: "36,65 USD" },
        { date: "25.11.2020", amountFrom: "1000 UAH", amountTo: "36,65 USD" },
        { date: "25.11.2020", amountFrom: "1000 UAH", amountTo: "36,65 USD" },
        { date: "25.11.2020", amountFrom: "1000 UAH", amountTo: "36,65 USD" },
      ];
    return (
        <main>
            <Main/>
          <div className="converter-page-section">
            <Container className="converter-page-section_container">
              <h2 className="text-center mb-4">Конвертер валют</h2>
              <Form>
                <Row className="align-items-center mb-3">
                  <Col xs={6}>
                    <Form.Label>В мене є:</Form.Label>
                    <Row>
                      <Col>
                        <Form.Control type="number" placeholder="1000" />
                      </Col>
                      <Col>
                        <Form.Select>
                          <option>UAH</option>
                          <option>USD</option>
                          <option>EUR</option>
                        </Form.Select>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={6}>
                    <Form.Label>Хочу придбати:</Form.Label>
                    <Row>
                      <Col>
                        <Form.Control type="number" placeholder="38.7" />
                      </Col>
                      <Col>
                        <Form.Select>
                          <option>USD</option>
                          <option>UAH</option>
                          <option>EUR</option>
                        </Form.Select>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col xs={6}>
                    <Form.Label>Дата:</Form.Label>
                    <Form.Control type="date" />
                  </Col>
                </Row>
                <Button variant="primary" type="submit">
                  Зберегти результат
                </Button>
              </Form>
            </Container>
          </div>
          <div className="conversion-history-section">
      <Container className="conversion-history-section_container">
        <Row className="justify-content-between align-items-center mb-4">
          <Col >
            <h3>Історія конвертації</h3>
          </Col>
          <Col xs="auto">
            <Button variant="primary">Очистити історію</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex flex-wrap">
              {historyData.map((item, index) => (
                <div
                  key={index}
                  className="history-item d-flex justify-content-between align-items-center p-2 m-1"
                  style={{
                    background: "#f8f9fa",
                    borderRadius: "5px",
                    flex: "1 0 48%",
                    minWidth: "250px",
                  }}
                >
                  <span>{item.date}</span>
                  <span>
                    {item.amountFrom} → {item.amountTo}
                  </span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
        </main>
      );
}

export default ConverterPage;
