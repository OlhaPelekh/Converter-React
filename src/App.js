import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import HomePage from "./containers/HomePage/HomePage.js";
import ServicesPage from "./containers/ServicesPage.js";
import ConverterPage from "./containers/ConverterPage.js";
import ContactsPage from "./containers/ContactsPage.js";
import AskPage from "./containers/AskPage.js";
import NotFoundPage from "./containers/NotFoundPage.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/converter" element={<ConverterPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/ask" element={<AskPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
