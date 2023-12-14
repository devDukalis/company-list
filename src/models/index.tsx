export interface Company {
  id: number;
  title: string;
  address: string;
  employeesCounter: number;
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  employment: string;
  companyId: number;
}
