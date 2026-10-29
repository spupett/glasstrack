import type { AddGlassItem } from "../types/AddGlassItem";
import { useState } from "react";

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

export default function AddGlassPage() {
  const [form, setForm] = useState<AddGlassItem>(initialValues);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = event.target;
    console.log(name, value, checked);
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(form);
    setForm(initialValues); // reset
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
