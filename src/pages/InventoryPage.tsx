import GlassPreview from "../components/GlassPreview";
import { useState } from "react";

import type { GlassItem } from "../types/GlassItem";

export default function InventoryPage(props: { inventory: GlassItem[] }) {
  const [selectedColor, setSelectedColor] = useState("");
  const { inventory } = props;

  // map (usual), Set (deduplicates), ... -> converts to array
  const colors = [...new Set(inventory.flatMap((glass) => glass.color))];
  // if selected color is !empty, filter by that color; otherwise show all
  const filteredGlass = selectedColor
    ? inventory.filter((glass) => glass.color.includes(selectedColor))
    : inventory;

  return (
    <div>
      <h1>Inventory Page</h1>

      <label htmlFor="color-filter">Filter by color: </label>
      <select
        id="color-filter"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)} // sets state
      >
        <option value="">All</option>
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>

      {filteredGlass.map((glass) => (
        <GlassPreview
          key={glass.id}
          glass={glass}
          selectedColor={selectedColor}
        />
      ))}
    </div>
  );
}
