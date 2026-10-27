export default function Glass(props: {
  glass: import("../types/GlassItem").GlassItem;
}) {
  return (
    <div className="glass-component">
      <div>
        <p>Manufacturer: {props.glass.manufacturer}</p>
        <p>Color: {props.glass.color}</p>
        <p>Glass Type: {props.glass.glassType}</p>
      </div>
      <div>
        <p>Width: {props.glass.widthInches} inches</p>
        <p>Height: {props.glass.heightInches} inches</p>
        <p>Purchase Cost: ${props.glass.purchaseCost}</p>
        <p>Quantity: {props.glass.quantity}</p>
      </div>
      <div>
        <p>Storage Location: {props.glass.storageLocation}</p>
        <p>Notes: {props.glass.notes}</p>
        <p>Purchased From: {props.glass.purchasedFrom}</p>
        <p>Image URL: {props.glass.imageUrl}</p>
      </div>
    </div>
  );
}
