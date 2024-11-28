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
  const historyItems = screen.getAllByText(/1000 uah → 36,65 usd/i);

  expect(historyTitle).toBeInTheDocument();
  expect(historyItems.length).toBeGreaterThan(0);
});

// test('clears history when "Очистити історію" button is clicked', () => {
//   render(<ConverterPage />);
//   const clearHistoryButton = screen.getByRole("button", { name: /очистити історію/i });
//   fireEvent.click(clearHistoryButton);
//   const historyItems = screen.queryByText(/1000 uah → 36,65 usd/i);
//   expect(historyItems).toBeNull();
// });
