import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "./ConverterPage.css";
import Main from "../../components/Main/Main.js";
import axios from "axios";
import { z } from "zod";

const amountSchema = z.number().positive("Сума має бути більше 0");
const dateSchema = z.string().refine((date) => {
  const selected = new Date(date);
  const now = new Date();
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  return selected >= sevenDaysAgo && selected <= now;
}, "Дата має бути в межах останніх 7 днів");

function ConverterPage() {
  const [rates, setRates] = useState({});
  const [amountFrom, setAmountFrom] = useState("");
  const [amountTo, setAmountTo] = useState("");
  const [currencyFrom, setCurrencyFrom] = useState("UAH");
  const [currencyTo, setCurrencyTo] = useState("USD");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
  const [historyData, setHistoryData] = useState(
    JSON.parse(localStorage.getItem("historyData")) || []
  );
  const [errors, setErrors] = useState({});

  const API_KEY = "5760a44b60c1411cbad9044c3a94a985";
  const API_URL = "https://openexchangerates.org/api/";

  useEffect(() => {
    const fetchRates = async () => {
      const endpoint =
        selectedDate === new Date().toISOString().slice(0, 10)
          ? "latest.json"
          : `historical/${selectedDate}.json`;

      const response = await axios.get(`${API_URL}${endpoint}?app_id=${API_KEY}`);
      setRates(response.data.rates);
    };

    const validationResult = dateSchema.safeParse(selectedDate);
    if (validationResult.success) {
      fetchRates();
    } else {
      setErrors((prev) => ({ ...prev, date: validationResult.error.errors[0].message }));
    }
  }, [selectedDate]);

  const convertCurrency = (value, from, to) => {
    if (!rates[from] || !rates[to]) return 0;
    const rate = rates[to] / rates[from];
    return (value * rate).toFixed(2);
  };

  const handleAmountFromChange = (e) => {
    const value = parseFloat(e.target.value);
    const validationResult = amountSchema.safeParse(value);

    if (validationResult.success) {
      setErrors((prev) => ({ ...prev, amountFrom: null }));
      setAmountFrom(value);
      setAmountTo(convertCurrency(value, currencyFrom, currencyTo));
    } else {
      setErrors((prev) => ({ ...prev, amountFrom: validationResult.error.errors[0].message }));
    }
  };

  const handleAmountToChange = (e) => {
    const value = parseFloat(e.target.value);
    const validationResult = amountSchema.safeParse(value);

    if (validationResult.success) {
      setErrors((prev) => ({ ...prev, amountTo: null }));
      setAmountTo(value);
      setAmountFrom(convertCurrency(value, currencyTo, currencyFrom));
    } else {
      setErrors((prev) => ({ ...prev, amountTo: validationResult.error.errors[0].message }));
    }
  };

  const saveConversion = () => {
    if (!amountFrom || !amountTo || errors.amountFrom || errors.amountTo) return;

    const newEntry = {
      date: selectedDate,
      amountFrom: `${amountFrom} ${currencyFrom}`,
      amountTo: `${amountTo} ${currencyTo}`,
    };

    const updatedHistory = [newEntry, ...historyData].slice(0, 10);
    setHistoryData(updatedHistory);
    localStorage.setItem("historyData", JSON.stringify(updatedHistory));
  };

  const clearHistory = () => {
    setHistoryData([]);
    localStorage.removeItem("historyData");
  };

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
                      value={amountFrom}
                      onChange={handleAmountFromChange}
                      isInvalid={!!errors.amountFrom}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.amountFrom}
                    </Form.Control.Feedback>
                  </Col>
                  <Col>
                    <Form.Select
                      className="converter-page-section_currency"
                      value={currencyFrom}
                      onChange={(e) => setCurrencyFrom(e.target.value)}
                    >
                      <option>UAH</option>
                      <option>USD</option>
                      <option>EUR</option>
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
                      value={amountTo}
                      onChange={handleAmountToChange}
                      isInvalid={!!errors.amountTo}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.amountTo}
                    </Form.Control.Feedback>
                  </Col>
                  <Col>
                    <Form.Select
                      className="converter-page-section_currency"
                      value={currencyTo}
                      onChange={(e) => setCurrencyTo(e.target.value)}
                    >
                      <option>USD</option>
                      <option>UAH</option>
                      <option>EUR</option>
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
                  value={selectedDate}
                  min={new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)}
                  max={new Date().toISOString().slice(0, 10)}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  isInvalid={!!errors.date}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.date}
                </Form.Control.Feedback>
              </Col>
              <Col lg="auto" className="converter-page-section_save text-right">
                <Button
                  className="converter-page-section_save-button"
                  variant="primary"
                  onClick={saveConversion}
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
              <Button variant="primary" onClick={clearHistory}>
                Очистити історію
              </Button>
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