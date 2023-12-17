import { ChangeEvent } from "react";

import { default as styled } from "styled-components";

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

import DeleteIcon from "../../../assets/icons/delete.svg?react";

const ButtonWrapper = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
`;

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
        <Cell
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minWidth: "180px",
            marginTop: "9px",
          }}>
          {companiesArray.length > 1 && (
            <>
              <input
                type="checkbox"
                checked={checkboxChecked}
                onChange={checkboxClick}
                id="company"
                autoComplete="companiesAll"
              />
              <label htmlFor="company">Выделить все</label>
            </>
          )}
        </Cell>

        <Cell>Название</Cell>

        <>
          <Cell style={{ minWidth: "190px" }}>Кол-во сотрудников</Cell>
        </>

        <Cell style={{ minWidth: "300px" }}>Адрес</Cell>

        <Cell>
          {selectedCompanies.length > 0 && (
            <ButtonWrapper onClick={deleteClick} style={{ marginRight: "5px" }}>
              <DeleteIcon width="25px" height="25px" />
            </ButtonWrapper>
          )}
        </Cell>
      </HeaderRow>
    </TableHead>
  );
};

export default CompanyHeader;
