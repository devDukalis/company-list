import { useState, ChangeEvent, FC } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectedCompaniesInState } from "@/redux/selectors";
import {
  addNewCompany,
  deselectCompany,
  selectCompany,
  updateCompany,
} from "@/redux/features/companySlice";

import { Company } from "@/models";
import useForm from "@/hooks/useForm";

import Cell from "@/components/Table/Cell";
import Row from "@/components/Table/Row";
import EditableCell from "@/components/Table/EditableCell";
import ButtonsCell from "@/components/ButtonsCell";

export interface Props {
  company?: Company;
  id?: string | number;
}

export interface CompanyForm {
  title: string;
  address: string;
}

const CompanyRow: FC<Props> = ({ company, id }) => {
  const selectedCompanies = useAppSelector(selectedCompaniesInState);
  const dispatch = useAppDispatch();

  const isSelected = !!selectedCompanies.find((selected) => selected.id === company?.id);
  const isAddCompanyRow = !company;

  const {
    values: state,
    changeFieldValue,
    resetForm,
  } = useForm<CompanyForm>({
    title: company?.title ? company.title : "",
    address: company?.address ? company.address : "",
  });

  const [isEditMode, setEditMode] = useState<boolean>(isAddCompanyRow);

  const checkboxClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;

    if (isAddCompanyRow) return;

    if (value) {
      dispatch(selectCompany(company));
    } else {
      dispatch(deselectCompany(company));
    }
  };

  const buttonsCellClick = () => {
    if (isAddCompanyRow) {
      const newCompany = {
        ...state,
        staff: [],
      };
      dispatch(addNewCompany(newCompany));
      resetForm();
      return;
    }

    if (isEditMode) {
      const updatedCompany = {
        ...company,
        ...state,
      };
      dispatch(updateCompany(updatedCompany));
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };

  return (
    <Row selected={isSelected}>
      <Cell>
        {!isAddCompanyRow && (
          <input
            type="checkbox"
            checked={isSelected}
            onChange={checkboxClickHandler}
            id={`company-select-checkbox-${id}`}
          />
        )}
      </Cell>

      <EditableCell
        isEditMode={isEditMode}
        value={state.title}
        onChange={changeFieldValue("title")}
        placeholder="Название"
        id={`company-title-edit-${id}`}
      />

      <Cell>{company?.staff?.length}</Cell>

      <EditableCell
        isEditMode={isEditMode}
        value={state.address}
        onChange={changeFieldValue("address")}
        placeholder="Адрес"
        id={`company-address-edit-${id}`}
      />

      <ButtonsCell isEditMode={isEditMode} onClick={buttonsCellClick} />
    </Row>
  );
};
export default CompanyRow;
