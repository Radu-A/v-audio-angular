export interface ProductModel {
  id: number;
  name: string;
  color: string;
  slug: string;
  category: string;
  price: number;
  short: string;
  description: string;
  feature_1: number;
  feature_2: number;
  feature_3: number;
  specs: Record<string, string>;
  photos: string[];
}

export interface ResponseModel {
  data: {
    products: ProductModel[];
  };
  results: number;
  status: string;
}
