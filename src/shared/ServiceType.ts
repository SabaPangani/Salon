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
  type: string;
  color: string;
  isChecked: boolean;
  duration: string;
  price: string;
  description: string;
  aftercareDescription: string;
  categoryId: string;
};
