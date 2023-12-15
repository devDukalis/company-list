import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddCompanyPayload, Company } from "@/models";
import { generateUniqueKey } from "@/utils/generateUniqueKey";

interface CompanyState {
  allCompanies: Company[];
  selectedCompanies: Company[];
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
};

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    addNewCompany: (state, action: PayloadAction<AddCompanyPayload>) => {
      const newCompany = { ...action.payload, id: generateUniqueKey() };
      state.allCompanies = [...state.allCompanies, newCompany];
    },
  },
});

export const { addNewCompany } = companySlice.actions;

export default companySlice.reducer;
