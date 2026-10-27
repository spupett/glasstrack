import HomePage from "./pages/HomePage";
import InventoryPage from "./pages/InventoryPage";
import AddGlassPage from "./pages/AddGlassPage";
import MainNavigation from "./components/MainNavigation";
import { Routes, Route } from "react-router";

import "./App.css";

function App() {
  return (
    <>
      {/* Render the main navigation bar at the top of the page */}
      <MainNavigation />

      {/* Sets up the routes for the application */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/add-glass" element={<AddGlassPage />} />
      </Routes>
    </>
  );
}

export default App;
