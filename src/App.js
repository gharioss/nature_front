import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Welcome from "./components/views/welcome/Welcome";
import "./app.css";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
