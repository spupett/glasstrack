import HomePage from "./pages/HomePage";
import InventoryPage from "./pages/InventoryPage";
import AddGlassPage from "./pages/AddGlassPage";
import MainNavigation from "./components/MainNavigation";
import { Routes, Route } from "react-router";
import { sampleGlass } from "./data/sampleGlass";
import { useState, useEffect } from "react";
import type { GlassItem } from "./types/GlassItem";

import "./App.css";

// useState with an arrow function to lazily initialize the state from
// localStorage since we only need to load it once, then just keep it in state for the rest of
// the app's lifecycle
function App() {
  const [inventory, updateInventory] = useState<GlassItem[]>(() => {
    const savedInventory = localStorage.getItem("glasstrack.inventory");
    return savedInventory ? JSON.parse(savedInventory) : sampleGlass;
  });

  function handleGlassAdd(glass: GlassItem) {
    updateInventory((prevInventory: GlassItem[]) => [...prevInventory, glass]);
  }

  useEffect(() => {
    localStorage.setItem("glasstrack.inventory", JSON.stringify(inventory));
  }, [inventory]);

  return (
    <>
      {/* Render the main navigation bar at the top of the page */}
      <MainNavigation />

      {/* Sets up the routes for the application */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/inventory"
          element={<InventoryPage inventory={inventory} />}
        />
        <Route
          path="/add-glass"
          element={
            <AddGlassPage inventory={inventory} onGlassAdd={handleGlassAdd} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
