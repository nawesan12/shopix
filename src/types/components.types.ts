export type BadgeMessage = {
  message: string;
};

export type BreadcrumbPathList = {
  paths: string[];
};

export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
