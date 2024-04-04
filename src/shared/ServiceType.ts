export type CategoryType = {
  name: string;
  color: string;
  description: string;
  services: ServiceType[];
};

export type ServiceType = {
  name: string;
  type: string;
  color: string;
  serviceDescription: string;
  aftercareDescription: string;
  categoryId: string;
};
