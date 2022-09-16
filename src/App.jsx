import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Image from "./pages/Image";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/image" element={<Image />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
