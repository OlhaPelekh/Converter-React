import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ConverterPage from "./ConverterPage";

test("renders the converter form", () => {
  render(<ConverterPage />);
  const inputField = screen.getByPlaceholderText(/1000/i);
  const selectCurrency = screen.getAllByRole("combobox");
  const saveButton = screen.getByRole("button", { name: /зберегти результат/i });

  expect(inputField).toBeInTheDocument();
  expect(selectCurrency.length).toBe(2);
  expect(saveButton).toBeInTheDocument();
});

test("renders conversion history section", () => {
  render(<ConverterPage />);
  const historyTitle = screen.getByText(/історія конвертації/i);
  expect(historyTitle).toBeInTheDocument();
});

test('clears history when "Очистити історію" button is clicked', () => {
  localStorage.setItem(
    "historyData",
    JSON.stringify([
      { date: "2023-12-01", amountFrom: "1000 UAH", amountTo: "36,65 USD" },
    ])
  );
  
  render(<ConverterPage />);
  
  const clearHistoryButton = screen.getByRole("button", { name: /очистити історію/i });
  const historyItem = screen.getByText(/1000 uah → 36,65 usd/i);
  expect(historyItem).toBeInTheDocument();
  fireEvent.click(clearHistoryButton);
  const clearedHistory = screen.queryByText(/1000 uah → 36,65 usd/i);
  expect(clearedHistory).toBeNull();
  expect(localStorage.getItem("historyData")).toBeNull();
});

test("saves conversion to history", () => {
  render(<ConverterPage />);
  const inputField = screen.getByPlaceholderText(/1000/i);
  const saveButton = screen.getByRole("button", { name: /зберегти результат/i });
  fireEvent.change(inputField, { target: { value: "1000" } });
  fireEvent.click(saveButton);
  const historyItem = screen.getByText(/1000 uah →/i);
  expect(historyItem).toBeInTheDocument();
});

test("validates amount input", () => {
  render(<ConverterPage />);
  const inputField = screen.getByPlaceholderText(/1000/i);
  fireEvent.change(inputField, { target: { value: "-10" } });
  const errorMessage = screen.getByText(/Сума має бути більше 0/i);
  expect(errorMessage).toBeInTheDocument();
});

test("validates date input", () => {
  render(<ConverterPage />);
  const dateField = screen.getByDisplayValue(new Date().toISOString().slice(0, 10));
  fireEvent.change(dateField, { target: { value: "2022-01-01" } });
  const errorMessage = screen.getByText(/Дата має бути в межах останніх 7 днів/i);
  expect(errorMessage).toBeInTheDocument();
});
