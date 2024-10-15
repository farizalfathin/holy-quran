import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Custom404 from "./pages/404";
import DetailSurah from "./pages/DetailSurah";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surah/:id" element={<DetailSurah />} />
        <Route path="*" element={<Custom404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
