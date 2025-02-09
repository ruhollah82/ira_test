import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUS from "./components/ContactUS";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/contact" element={<ContactUS />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
