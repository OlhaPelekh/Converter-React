import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

test("renders HomePage main container", () => {
  render(<HomePage />);
  const mainContainer = screen.getByRole("main");
  expect(mainContainer).toBeInTheDocument();
});

test('renders HomePage title "Чіп Чендж"', () => {
  render(<HomePage />);
  const title = screen.getByText("Чіп Чендж", { exact: false });
  expect(title).toBeInTheDocument();
});

test('renders description "Обмінник валют - навчальний"', () => {
  render(<HomePage />);
  const description = screen.getByText("Обмінник валют - навчальний", {
    exact: false,
  });
  expect(description).toBeInTheDocument();
});

test('renders "Конвертер валют" button in the first section', () => {
  render(<HomePage />);
  const firstButton = screen.getAllByText("Конвертер валют")[0];
  expect(firstButton).toBeInTheDocument();
});

test('renders image with alt "Credit card"', () => {
  render(<HomePage />);
  const image = screen.getByAltText("Credit card");
  expect(image).toBeInTheDocument();
});

test('renders second section title "Конвертер валют"', () => {
  render(<HomePage />);
  const secondSectionTitle = screen.getAllByText("Конвертер валют")[1];
  expect(secondSectionTitle).toBeInTheDocument();
});

test("renders second section description", () => {
  render(<HomePage />);
  const secondSectionDescription = screen.getByText(
    /Переважна діяльність банківської/i
  );
  expect(secondSectionDescription).toBeInTheDocument();
});

test('renders "Конвертувати валюту" button in the second section', () => {
  render(<HomePage />);
  const secondButton = screen.getByText("Конвертувати валюту");
  expect(secondButton).toBeInTheDocument();
});

test('renders second section image with alt "Laptop and card"', () => {
  render(<HomePage />);
  const secondImage = screen.getByAltText("Laptop and card");
  expect(secondImage).toBeInTheDocument();
});
