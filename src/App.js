import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DevenirAideMenagere from "./components/footer/devenirAideMenagere/DevenirAideMenagere";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Accueil />} />
        <Route path="/devenirAideMenagere" element={<DevenirAideMenagere />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
export default App;
