import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";
const Portfolio = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/soon" element={<ComingSoon />} />
        </Routes>
      </Router>
    </>
  );
};

export default Portfolio;
