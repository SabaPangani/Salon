export type ServiceContextType = {
  createCategory: (name: string, color: string, desc: string) => void;
  createService: (
    name: string,
    desc: string,
    afterCareDesc: string,
    categoryId: string
  ) => void;
};
