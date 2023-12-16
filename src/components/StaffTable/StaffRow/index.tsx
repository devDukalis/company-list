import { useState, ChangeEvent, FC } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectedEmployeesInState } from "@/redux/selectors";
import {
  addEmployee,
  deselectEmployee,
  selectEmployee,
  updateEmployee,
} from "@/redux/features/companySlice";

import { ID, Employee } from "@/models";
import useForm from "@/hooks/useForm";
import { generateUniqueKey } from "@/utils/generateUniqueKey";

import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";
import EditableCell from "@/components/Table/EditableCell";
import ButtonsCell from "@/components/ButtonsCell";

export interface Props {
  employee?: Employee;
  companyId: ID;
  style?: React.CSSProperties;
}

export interface EmployeeForm {
  firstName: string;
  lastName: string;
  employment: string;
  id: string;
}

const StaffRow: FC<Props> = ({ employee, companyId }) => {
  const selectedEmployees = useAppSelector(selectedEmployeesInState);
  const dispatch = useAppDispatch();

  const isSelected = !!selectedEmployees.find((selected) => selected.id === employee?.id);
  const isAddEmployeeRow = !employee;

  const {
    values: state,
    changeFieldValue,
    resetForm,
  } = useForm<EmployeeForm>({
    firstName: employee?.firstName ? employee.firstName : "",
    lastName: employee?.lastName ? employee.lastName : "",
    employment: employee?.employment ? employee.employment : "",
    id: generateUniqueKey(),
  });

  const [isEditMode, setEditMode] = useState<boolean>(isAddEmployeeRow);

  const checkboxClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    if (isAddEmployeeRow) return;
    if (value) {
      dispatch(selectEmployee(employee));
    } else {
      dispatch(deselectEmployee(employee));
    }
  };

  const saveClickHandler = () => {
    if (isAddEmployeeRow) {
      const toSend = {
        employee: {
          companyId,
          ...state,
        },
        companyId,
      };
      dispatch(addEmployee(toSend));
      resetForm();
      return;
    }
    if (isEditMode) {
      const updatedEmployee = {
        ...employee,
        ...state,
      };
      dispatch(updateEmployee(updatedEmployee));
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };

  return (
    <Row selected={isSelected}>
      <Cell
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "8px",
        }}>
        {!isAddEmployeeRow && (
          <input
            type="checkbox"
            checked={isSelected}
            onChange={checkboxClickHandler}
            id={`select-employee-${state.id}`}
          />
        )}
      </Cell>

      <EditableCell
        isEditMode={isEditMode}
        value={state.firstName}
        onChange={changeFieldValue("firstName")}
        placeholder="Имя"
        id={`select-fistName-${state.id}`}
      />

      <EditableCell
        isEditMode={isEditMode}
        value={state.lastName}
        onChange={changeFieldValue("lastName")}
        placeholder="Фамилия"
        id={`select-lastName-${state.id}`}
      />

      <EditableCell
        isEditMode={isEditMode}
        value={state.employment}
        onChange={changeFieldValue("employment")}
        placeholder="Должность"
        id={`select-employment-${state.id}`}
      />

      <ButtonsCell onClick={saveClickHandler} isEditMode={isEditMode} />
    </Row>
  );
};

export default StaffRow;
