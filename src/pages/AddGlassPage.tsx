import type { AddGlassItem } from "../types/AddGlassItem";
import { useState } from "react";
import type { GlassItem } from "../types/GlassItem";

const initialValues: AddGlassItem = {
  glassType: "",
  purchaseCost: 0,
  quantity: 0,
  purchasedFrom: "",
  color: "",
  texture: "",
  widthInches: 0,
  heightInches: 0,
  scrap: false,
};

export default function AddGlassPage(props: {
  inventory: GlassItem[];
  onGlassAdd: (glass: GlassItem) => void;
}) {
  const [form, setForm] = useState<AddGlassItem>(initialValues);
  const { inventory } = props;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const newGlass = mapFormToInventoryItem(form);

    props.onGlassAdd(newGlass);

    console.log("Inventory after adding:", [...inventory, newGlass]);
    setForm(initialValues); // reset
  }

  function mapFormToInventoryItem(form: AddGlassItem): GlassItem {
    return {
      id: (inventory.length + 1).toString(),
      manufacturer: "",
      productNumber: "",
      color: form.color ? form.color.split(",").map((c) => c.trim()) : [],
      glassType: form.glassType,
      texture: form.texture,
      widthInches: form.widthInches ?? 0,
      heightInches: form.heightInches ?? 0,
      purchaseCost: form.purchaseCost,
      quantity: form.quantity,
      scrap: form.scrap ?? false,
      purchasedFrom: form.purchasedFrom,
      imageUrl: "",
    };
  }

  return (
    <>
      <div>
        <h1>Add Glass Page</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Color:
            <input
              type="text"
              name="color"
              value={form.color}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Texture:
            <input
              type="text"
              name="texture"
              value={form.texture}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Glass Type:
            <input
              type="text"
              name="glassType"
              value={form.glassType}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Purchase Cost:
            <input
              type="number"
              name="purchaseCost"
              value={form.purchaseCost}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Quantity:
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Purchased From:
            <input
              type="text"
              name="purchasedFrom"
              value={form.purchasedFrom}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Scrap:
            <input
              type="checkbox"
              name="scrap"
              checked={form.scrap}
              onChange={handleChange}
            />
          </label>
          <div style={{ visibility: form.scrap ? "hidden" : "visible" }}>
            <label>
              Width Inches:
              <input
                type="number"
                name="widthInches"
                value={form.widthInches}
                onChange={handleChange}
              />
            </label>
            <label>
              Height Inches:
              <input
                type="number"
                name="heightInches"
                value={form.heightInches}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <button type="submit">Add Glass</button>
      </form>
    </>
  );
}
