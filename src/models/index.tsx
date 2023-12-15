export type ID = string | number;

export interface Employee {
  id: ID;
  firstName: string;
  lastName: string;
  employment: string;
  companyId: ID;
}

export interface Company {
  id: ID;
  title: string;
  address: string;
  staff: Employee[];
}

export type AddCompanyPayload = Omit<Company, "id">;
