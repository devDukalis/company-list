import { createSlice } from "@reduxjs/toolkit";
import { Employee } from "@/models";

interface EmployeeState {
  employees: Employee[];
}

const initialState: EmployeeState = {
  employees: [
    { id: 1, firstName: "Ivan", lastName: "Ivanov", employment: "developer", companyId: 1 },
    { id: 2, firstName: "Max", lastName: "Polo", employment: "designer", companyId: 2 },
    { id: 3, firstName: "Peter", lastName: "Lucker", employment: "devops", companyId: 2 },
    { id: 4, firstName: "John", lastName: "Wick", employment: "mercenary", companyId: 3 },
    { id: 5, firstName: "Victor", lastName: "Brahn", employment: "manager", companyId: 1 },
  ],
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
});

export default employeeSlice.reducer;
