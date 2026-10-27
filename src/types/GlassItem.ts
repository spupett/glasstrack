export type GlassItem = {
  id: string;
  manufacturer: string;
  productNumber?: string;
  color: string;
  glassType: string;
  texture?: string;
  widthInches: number;
  heightInches: number;
  purchaseCost: number;
  quantity: number;
  storageLocation?: string;
  notes?: string;
  purchasedFrom?: string;
  imageUrl?: string;
};
