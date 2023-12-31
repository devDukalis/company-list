import { RootState } from "@/redux/store";

export const allCompaniesInState = (state: RootState) => state.companies.allCompanies;
export const selectedCompaniesInState = (state: RootState) => state.companies.selectedCompanies;
export const selectedEmployeesInState = (state: RootState) => state.companies.selectedEmployees;
