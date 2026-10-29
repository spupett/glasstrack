export type AddGlassItem = {
  manufacturer?: string;
  productNumber?: string;
  color?: string; // comma-separated list of colors for input
  glassType: string;
  texture?: string;
  widthInches?: number;
  heightInches?: number;
  purchaseCost: number;
  quantity: number;
  storageLocation?: string;
  notes?: string;
  purchasedFrom: string;
  imageUrl?: string;
  scrap?: boolean;
};
