import { ChangeEvent } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { allCompaniesInState, selectedCompaniesInState } from "@/redux/selectors";
import {
  deleteSelectedCompanies,
  deselectAllCompanies,
  selectAllCompanies,
} from "@/redux/features/companySlice";

import Cell from "@/components/Table/Cell";
import TableHead from "@/components/Table/Head";
import HeaderRow from "@/components/Table/HeaderRow";

const CompanyHeader = () => {
  const companiesArray = useAppSelector(allCompaniesInState);
  const selectedCompanies = useAppSelector(selectedCompaniesInState);
  const checkboxChecked = companiesArray.length === selectedCompanies.length;
  const dispatch = useAppDispatch();

  const checkboxClick = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    checked ? dispatch(selectAllCompanies()) : dispatch(deselectAllCompanies());
  };

  const deleteClick = () => {
    dispatch(deleteSelectedCompanies());
  };

  return (
    <TableHead>
      <HeaderRow>
        <Cell>
          {companiesArray.length > 1 && (
            <input type="checkbox" checked={checkboxChecked} onChange={checkboxClick} />
          )}
        </Cell>
        <Cell>Название</Cell>
        <Cell>Кол-во сотрудников</Cell>
        <Cell>Адрес</Cell>
        <Cell>
          {selectedCompanies.length > 0 && (
            <button type="button" onClick={deleteClick}>
              Удалить
            </button>
          )}
        </Cell>
      </HeaderRow>
    </TableHead>
  );
};

export default CompanyHeader;
