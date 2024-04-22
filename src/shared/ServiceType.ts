export type CategoryType = {
  categoryId: string;
  name: string;
  color: string;
  isChecked: boolean;
  description: string;
  services: ServiceType[];
};

export type ServiceType = {
  id: string;
  name: string;
  duration: string;
  price: string;
  percentage: string;
  description: string;
  aftercareDescription: string;
  categoryId: string;
};
