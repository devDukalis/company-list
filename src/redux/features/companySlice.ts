import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { AddCompanyPayload, AddEmployeePayload, Company, Employee } from "@/models";
import { generateUniqueKey } from "@/utils/generateUniqueKey";

interface CompanyState {
  allCompanies: Company[];
  selectedCompanies: Company[];
  selectedEmployees: Employee[];
}

const initialState: CompanyState = {
  allCompanies: [
    {
      id: 1,
      title: "company A",
      address: "Company A address",
      staff: [
        {
          id: 1,
          firstName: "first1",
          lastName: "last1",
          employment: "empl1",
          companyId: 1,
        },
      ],
    },
    {
      id: 2,
      title: "company B",
      address: "Company B address",
      staff: [
        {
          id: 2,
          firstName: "first2",
          lastName: "last2",
          employment: "empl2",
          companyId: 1,
        },
      ],
    },
    {
      id: 3,
      title: "company C",
      address: "Company C address",
      staff: [
        {
          id: 3,
          firstName: "first3",
          lastName: "last3",
          employment: "empl3",
          companyId: 1,
        },
      ],
    },
  ],
  selectedCompanies: [],
  selectedEmployees: [],
};

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    addNewCompany: (state, action: PayloadAction<AddCompanyPayload>) => {
      const newCompany = { ...action.payload, id: generateUniqueKey() };
      state.allCompanies = [...state.allCompanies, newCompany];
    },
    updateCompany: (state, action: PayloadAction<Company>) => {
      state.allCompanies = state.allCompanies.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
    selectAllCompanies: (state) => {
      state.selectedCompanies = state.allCompanies;
    },
    deselectAllCompanies: (state) => {
      state.selectedCompanies = [];
    },
    selectCompany: (state, action: PayloadAction<Company>) => {
      state.selectedCompanies = [...state.selectedCompanies, action.payload];
    },
    deselectCompany: (state, action: PayloadAction<Company>) => {
      const companyId = action.payload.id;
      state.selectedCompanies = state.selectedCompanies.filter((item) => item.id !== companyId);
    },
    deleteSelectedCompanies: (state) => {
      const all = state.allCompanies;
      const selected = state.selectedCompanies;
      state.allCompanies = all.filter((el) => !selected.find((item) => item.id === el.id));
      state.selectedCompanies = [];
    },
    selectEmployee: (state, action: PayloadAction<Employee>) => {
      state.selectedEmployees = [...state.selectedEmployees, action.payload];
    },
    deselectEmployee: (state, action: PayloadAction<Employee>) => {
      const employeeId = action.payload.id;
      state.selectedEmployees = state.selectedEmployees.filter((item) => item.id !== employeeId);
    },
    updateEmployee: (state, action: PayloadAction<Employee>) => {
      const updatedEmployee = action.payload;
      const idOfCompany = updatedEmployee.companyId;
      const indexOfEmployeeCompany = state.allCompanies.findIndex(
        (item) => item.id === idOfCompany,
      );
      const company = state.allCompanies[indexOfEmployeeCompany];
      const staffOfCompany = company?.staff?.map((item) => {
        if (item.id === updatedEmployee.id) {
          return updatedEmployee;
        }
        return item;
      });
      state.allCompanies[indexOfEmployeeCompany].staff = staffOfCompany;
      companySlice.caseReducers.updateSelectedCompanies(state);
    },
    addEmployee: (state, action: PayloadAction<AddEmployeePayload>) => {
      const employeeData = action.payload.employee;
      const { companyId } = action.payload;
      const newEmployee = { ...employeeData, id: generateUniqueKey() };
      const indexOfCompany = state.allCompanies.findIndex((item) => item.id === companyId);
      const companyStaff = state.allCompanies[indexOfCompany]?.staff ?? [];
      companyStaff.push(newEmployee);
      state.allCompanies[indexOfCompany].staff = companyStaff;
      companySlice.caseReducers.updateSelectedCompanies(state);
    },
    updateSelectedCompanies: (state) => {
      state.selectedCompanies = state.selectedCompanies.map((sCompany) => {
        const aCompany = state.allCompanies.find((item) => item.id === sCompany.id);
        if (aCompany) return aCompany;
        return sCompany;
      });
      companySlice.caseReducers.updateSelectedEmployees(state);
    },
    updateSelectedEmployees: (state) => {
      state.selectedEmployees = state.selectedEmployees.filter((employee) => {
        const { companyId } = employee;
        const foundCompany = state.selectedCompanies.find((company) => company.id === companyId);
        return !!foundCompany;
      });
    },
    selectAllEmployees: (state) => {
      let employees: Employee[] = [];
      state.selectedCompanies.forEach((company) => {
        employees = [...employees, ...company.staff];
      });
      state.selectedEmployees = employees;
    },
    deselectAllEmployees: (state) => {
      state.selectedEmployees = [];
    },
    deleteSelectedEmployees: (state) => {
      const sEmployees = state.selectedEmployees;
      state.allCompanies = state.allCompanies.map((company) => {
        const companyStaff = company.staff;
        const newStaff = companyStaff.filter(
          (member) =>
            !sEmployees.find((item) => {
              const eqId = item.id === member.id;
              const eqCompanies = item.companyId === member.companyId;
              return eqId && eqCompanies;
            }),
        );
        return { ...company, staff: newStaff };
      });
      state.selectedEmployees = [];
      companySlice.caseReducers.updateSelectedCompanies(state);
    },
  },
});

export const {
  addNewCompany,
  updateCompany,
  selectAllCompanies,
  deselectAllCompanies,
  selectCompany,
  deselectCompany,
  deleteSelectedCompanies,
  selectEmployee,
  deselectEmployee,
  updateEmployee,
  addEmployee,
  selectAllEmployees,
  deselectAllEmployees,
  deleteSelectedEmployees,
} = companySlice.actions;

export default companySlice.reducer;
