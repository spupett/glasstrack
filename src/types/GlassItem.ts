export type GlassItem = {
  id: string;
  color: string[];
  glassType: string;
  texture?: string;
  widthInches: number;
  heightInches: number;
  purchaseCost: number;
  quantity: number;
  purchasedFrom?: string;
  manufacturer: string;
  productNumber?: string;
  imageUrl?: string;
  scrap: boolean;
};
