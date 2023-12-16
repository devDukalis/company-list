import { ChangeEvent } from "react";

import { default as styled } from "styled-components";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectedCompaniesInState, selectedEmployeesInState } from "@/redux/selectors";
import {
  deleteSelectedEmployees,
  deselectAllEmployees,
  selectAllEmployees,
} from "@/redux/features/companySlice";

import Cell from "@/components/Table/Cell";
import Head from "@/components/Table/Head";
import HeaderRow from "@/components/Table/HeaderRow";

import DeleteIcon from "../../../assets/icons/delete.svg?react";

const ButtonWrapper = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
`;

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
    <Head>
      <HeaderRow>
        <Cell
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minWidth: "180px",
            marginTop: "9px",
          }}>
          {totalEmployeesAmount > 1 && (
            <>
              <input
                type="checkbox"
                checked={checkboxChecked}
                onChange={checkboxClick}
                id="staff"
                autoComplete="staffAll"
              />
              <label htmlFor="staff">Выделить все</label>
            </>
          )}
        </Cell>
        <Cell>Имя</Cell>
        <Cell>Фамилия</Cell>
        <Cell>Должность</Cell>
        <Cell>
          {selectedEmployees.length > 0 && (
            <ButtonWrapper onClick={deleteClick}>
              <DeleteIcon width="30px" height="30px" />
            </ButtonWrapper>
          )}
        </Cell>
      </HeaderRow>
    </Head>
  );
};

export default StaffHeader;
