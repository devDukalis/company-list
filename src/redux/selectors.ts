import { RootState } from "@/redux/store";
import { ID } from "@/models";

export const allCompaniesInState = (state: RootState) => state.companies.allCompanies;
export const selectedCompaniesInState = (state: RootState) => state.companies.selectedCompanies;
export const selectedEmployeesInState = (state: RootState) => state.companies.selectedEmployees;
export const employeeIsSelectedInState = (employeeID?: ID) => (state: RootState) => {
  const allSelectedEmployees = state.companies.selectedEmployees;
  return !!allSelectedEmployees.find((selected) => selected.id === employeeID);
};
