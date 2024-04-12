export type EmployeeType = {
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

export const EmptyEmployee = {
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
