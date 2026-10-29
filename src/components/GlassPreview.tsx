import type { GlassItem } from "../types/GlassItem";

export default function GlassPreview(props: {
  glass: GlassItem;
  selectedColor: string;
}) {
  return (
    <div className="glass-preview-component">
      <p>Manufacturer: {props.glass.manufacturer}</p>

      <p>
        Color{props.glass.color.length > 1 ? "s" : ""}:{" "}
        {props.glass.color.join(", ")}
      </p>

      {props.glass.imageUrl ? (
        <img src={props.glass.imageUrl} alt="Glass" className="glass-image" />
      ) : (
        <div
          className="glass-image"
          style={{
            backgroundColor: props.selectedColor
              ? props.selectedColor
              : props.glass.color[0],
          }}
        />
      )}

      <div>{props.glass.scrap ? "Scrap" : ""}</div>
    </div>
  );
}
