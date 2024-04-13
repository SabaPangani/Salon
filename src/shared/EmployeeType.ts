export type EmployeeType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  color: string;
  jobTitle: string;
  serviceId: string;
  startDate: Date;
  endDate: Date;
};

export const EmptyEmployee: EmployeeType = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  color: "",
  jobTitle: "",
  serviceId: "",
  startDate: new Date(),
  endDate: new Date(),
};
