import React, { Container, Form, Row, Col, Button } from "react-bootstrap";
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
      <Main />
      <div className="converter-page-section">
        <Container className="converter-page-section_container">
          <h2 className="converter-page-section_title text-center mb-4">
            Конвертер валют
          </h2>
          <Form>
            <Row className="align-items-center mb-3">
              <Col lg="auto">
                <Form.Label className="converter-page-section_label">
                  В мене є:
                </Form.Label>
                <Row>
                  <Col>
                    <Form.Control
                      className="converter-page-section_count"
                      type="number"
                      placeholder="1000"
                    />
                  </Col>
                  <Col>
                    <Form.Select className="converter-page-section_currency">
                      <option className="converter-page-section_currency-option">
                        UAH
                      </option>
                      <option className="converter-page-section_currency-option">
                        USD
                      </option>
                      <option className="converter-page-section_currency-option">
                        EUR
                      </option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
              <Col lg="auto" className="icon-arrow">
                <i className="bi bi-arrow-left-right"></i>
              </Col>
              <Col lg="auto">
                <Form.Label className="converter-page-section_label">
                  Хочу придбати:
                </Form.Label>
                <Row>
                  <Col>
                    <Form.Control
                      className="converter-page-section_count"
                      type="number"
                      placeholder="38.7"
                    />
                  </Col>
                  <Col>
                    <Form.Select className="converter-page-section_currency">
                      <option className="converter-page-section_currency-option">
                        USD
                      </option>
                      <option className="converter-page-section_currency-option">
                        UAH
                      </option>
                      <option className="converter-page-section_currency-option">
                        EUR
                      </option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="converter-page-section_choose mb-3">
              <Col lg="auto" className="converter-page-section_date">
                <Form.Control
                  className="converter-page-section_date-choose"
                  type="date"
                />
              </Col>
              <Col lg="auto" className="converter-page-section_save text-right">
                <Button
                  className="converter-page-section_save-button"
                  variant="primary"
                  type="submit"
                >
                  Зберегти результат
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
      <div className="conversion-history-section">
        <Container className="conversion-history-section_container">
          <Row className="justify-content-between align-items-center mb-4">
            <Col>
              <h3>Історія конвертації</h3>
            </Col>
            <Col xs="auto">
              <Button variant="primary">Очистити історію</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="history-container">
                {historyData.map((item, index) => (
                  <div key={index} className="history-item">
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
