import Navbar from "./components/Navbar";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
          <Routes>
            <Route exac path="/tareaquiz" element={<Home />} />
            <Route path="tareaquiz/home" element={<Home />} />
            <Route path="tareaquiz/pricing" element={<Pricing />} />
            <Route path="tareaquiz/about" element={<About />} />
          </Routes>
      </div>
    </>
  );
}

export default App;
