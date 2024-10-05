import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePageLayout from "./components/HomePageLayout";
import Navbar from "./components/Navbar";
import PhotoPage from "./PhotoPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<HomePageLayout />} />
        <Route path="photo" element={<PhotoPage />} />
      </Routes>
    </div>
  );
}

export default App;
