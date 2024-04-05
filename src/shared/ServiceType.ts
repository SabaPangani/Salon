export type CategoryType = {
  categoryId: string;
  name: string;
  color: string;
  description: string;
  services: ServiceType[];
};

export type ServiceType = {
  name: string;
  type: string;
  color: string;
  duration: string;
  price: string;
  serviceDescription: string;
  aftercareDescription: string;
  categoryId: string;
};
