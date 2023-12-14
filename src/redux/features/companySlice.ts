import { createSlice } from "@reduxjs/toolkit";
import { Company } from "@/models";

interface CompanyState {
  companies: Company[];
}

const initialState: CompanyState = {
  companies: [
    { id: 1, title: "company A", address: "Company A address", employeesCounter: 3 },
    { id: 2, title: "company B", address: "Company B address", employeesCounter: 2 },
    { id: 3, title: "company C", address: "Company C address", employeesCounter: 1 },
  ],
};

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
});

export default companySlice.reducer;
