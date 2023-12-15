import { ChangeEvent } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { allCompaniesInState, selectedCompaniesInState } from "@/redux/selectors";
import {
  deleteSelectedCompanies,
  deselectAllCompanies,
  selectAllCompanies,
} from "@/redux/features/companySlice";

import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";

const StaffHeader = () => {
  const companiesArray = useAppSelector(allCompaniesInState);
  const selectedCompanies = useAppSelector(selectedCompaniesInState);
  const dispatch = useAppDispatch();

  const checkboxChecked = companiesArray.length === selectedCompanies.length;

  const checkboxClick = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    if (checked) {
      dispatch(selectAllCompanies());
    } else {
      dispatch(deselectAllCompanies());
    }
  };

  const deleteClick = () => {
    dispatch(deleteSelectedCompanies());
  };

  return (
    <thead>
      <Row>
        <Cell>
          {companiesArray.length > 1 && (
            <input type="checkbox" checked={checkboxChecked} onChange={checkboxClick} />
          )}
        </Cell>
        <Cell>Имя</Cell>
        <Cell>Фамилия</Cell>
        <Cell>Должность</Cell>
        <Cell>
          {selectedCompanies.length > 0 && (
            <button type="button" onClick={deleteClick}>
              Удалить
            </button>
          )}
        </Cell>
      </Row>
    </thead>
  );
};

export default StaffHeader;
