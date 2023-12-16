import { ChangeEvent } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectedCompaniesInState, selectedEmployeesInState } from "@/redux/selectors";
import {
  deleteSelectedEmployees,
  deselectAllEmployees,
  selectAllEmployees,
} from "@/redux/features/companySlice";

import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";

const StaffHeader = () => {
  const selectedCompanies = useAppSelector(selectedCompaniesInState);
  const selectedEmployees = useAppSelector(selectedEmployeesInState);
  const dispatch = useAppDispatch();

  const totalEmployeesAmount = selectedCompanies.reduce(
    (prev, curr) => prev + curr.staff.length,
    0,
  );
  const checkboxChecked = selectedEmployees.length === totalEmployeesAmount;

  const checkboxClick = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    if (checked) {
      dispatch(selectAllEmployees());
    } else {
      dispatch(deselectAllEmployees());
    }
  };

  const deleteClick = () => {
    dispatch(deleteSelectedEmployees());
  };

  return (
    <thead>
      <Row>
        <Cell>
          {totalEmployeesAmount > 1 && (
            <input type="checkbox" checked={checkboxChecked} onChange={checkboxClick} />
          )}
        </Cell>
        <Cell>Имя</Cell>
        <Cell>Фамилия</Cell>
        <Cell>Должность</Cell>
        <Cell>
          {selectedEmployees.length > 0 && (
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
