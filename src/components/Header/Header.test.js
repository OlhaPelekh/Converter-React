import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

test('renders Header logo with text "Чіп Чендж"', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const logoText = screen.getByText(/чіп чендж/i);
  expect(logoText).toBeInTheDocument();
});

test("renders Header navigation links", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const servicesLink = screen.getByText(/послуги/i);
  const converterLink = screen.getByText(/конвертер валют/i);
  const contactsLink = screen.getByText(/контакти/i);
  const askLink = screen.getByText(/задати питання/i);
  expect(servicesLink).toBeInTheDocument();
  expect(converterLink).toBeInTheDocument();
  expect(contactsLink).toBeInTheDocument();
  expect(askLink).toBeInTheDocument();
});

test("renders Header profile link with icon", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const profileLink = screen.getByText(/особистий кабінет/i);
  const profileIcon = screen.getByRole("img", { hidden: true });
  expect(profileLink).toBeInTheDocument();
  expect(profileIcon).toBeInTheDocument();
});
