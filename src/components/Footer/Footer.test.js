import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer.js";

test("renders Footer container with correct text", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  const footer = screen.getByRole("contentinfo");
  expect(footer).toBeInTheDocument();
});

test('renders the logo with the logo "Чіп Чендж"', () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  const logoImage = screen.getByAltText("Logo");
  expect(logoImage).toBeInTheDocument();
});

test("renders company information", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  const companyInfo = screen.getByText(/04128, м.Київ, вул. Хрещатик, 19/i);
  expect(companyInfo).toBeInTheDocument();
});

test("renders navigation links", () => {
  render(
    <BrowserRouter>
      <Footer />
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

test("renders support phone numbers", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  const supportPhone = screen.getByText("3773");
  const freePhone = screen.getByText("8 800 111 22 33");
  expect(supportPhone).toBeInTheDocument();
  expect(freePhone).toBeInTheDocument();
});

test("renders social media links with icons", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  const facebookLink = screen.getByRole("link", { name: /facebook/i });
  const instagramLink = screen.getByRole("link", { name: /instagram/i });
  const twitterLink = screen.getByRole("link", { name: /twitter/i });
  const youtubeLink = screen.getByRole("link", { name: /youtube/i });
  expect(facebookLink).toBeInTheDocument();
  expect(instagramLink).toBeInTheDocument();
  expect(twitterLink).toBeInTheDocument();
  expect(youtubeLink).toBeInTheDocument();
});
