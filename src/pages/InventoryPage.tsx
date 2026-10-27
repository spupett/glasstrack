import GlassList from "../components/Glass";

import { sampleGlass } from "../data/sampleGlass";

export default function InventoryPage() {
  return (
    <div>
      <h1>Inventory Page</h1>

      {sampleGlass.map((glass) => (
        <GlassList key={glass.id} glass={glass} />
      ))}
    </div>
  );
}
