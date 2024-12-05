import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";

function renderWithRouter(ui) {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
}

test("renders HomePage main container", () => {
  renderWithRouter(<HomePage />);
  const mainContainer = screen.getByRole("main");
  expect(mainContainer).toBeInTheDocument();
});

test('renders HomePage title "Чіп Чендж"', () => {
  renderWithRouter(<HomePage />);
  const title = screen.getByText("Чіп Чендж", { exact: false });
  expect(title).toBeInTheDocument();
});

test('renders description "Обмінник валют - навчальний"', () => {
  renderWithRouter(<HomePage />);
  const description = screen.getByText("Обмінник валют - навчальний", {
    exact: false,
  });
  expect(description).toBeInTheDocument();
});

test('renders "Конвертер валют" button in the first section', () => {
  renderWithRouter(<HomePage />);
  const firstButton = screen.getAllByText("Конвертер валют")[0];
  expect(firstButton).toBeInTheDocument();
});

test('renders image with alt "Credit card"', () => {
  renderWithRouter(<HomePage />);
  const image = screen.getByAltText("Credit card");
  expect(image).toBeInTheDocument();
});

test('renders second section title "Конвертер валют"', () => {
  renderWithRouter(<HomePage />);
  const secondSectionTitle = screen.getAllByText("Конвертер валют")[1];
  expect(secondSectionTitle).toBeInTheDocument();
});

test("renders second section description", () => {
  renderWithRouter(<HomePage />);
  const secondSectionDescription = screen.getByText(
    /Переважна діяльність банківської/i
  );
  expect(secondSectionDescription).toBeInTheDocument();
});

test('renders "Конвертувати валюту" button in the second section', () => {
  renderWithRouter(<HomePage />);
  const secondButton = screen.getByText("Конвертувати валюту");
  expect(secondButton).toBeInTheDocument();
});

test('renders second section image with alt "Laptop and card"', () => {
  renderWithRouter(<HomePage />);
  const secondImage = screen.getByAltText("Laptop and card");
  expect(secondImage).toBeInTheDocument();
});
