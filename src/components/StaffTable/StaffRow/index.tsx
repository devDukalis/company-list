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

import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";
import EditableCell from "@/components/Table/EditableCell";

export interface Props {
  employee?: Employee;
  companyId: ID;
}

export interface EmployeeForm {
  firstName: string;
  lastName: string;
  employment: string;
}

const StaffRow: FC<Props> = ({ employee, companyId }) => {
  const selectedWorkers = useAppSelector(selectedEmployeesInState);
  const dispatch = useAppDispatch();

  const isSelected = !!selectedWorkers.find((selected) => selected.id === employee?.id);
  const isAddWorkerRow = !employee;

  const {
    values: state,
    changeFieldValue,
    resetForm,
  } = useForm<EmployeeForm>({
    firstName: employee?.firstName ? employee.firstName : "",
    lastName: employee?.lastName ? employee.lastName : "",
    employment: employee?.employment ? employee.employment : "",
  });

  const [isEditMode, setEditMode] = useState<boolean>(isAddWorkerRow);

  const checkboxClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    if (isAddWorkerRow) return;
    if (value) {
      dispatch(selectEmployee(employee));
    } else {
      dispatch(deselectEmployee(employee));
    }
  };

  const saveClickHandler = () => {
    if (isAddWorkerRow) {
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
      <Cell>
        {!isAddWorkerRow && (
          <input type="checkbox" checked={isSelected} onChange={checkboxClickHandler} />
        )}
      </Cell>
      <EditableCell
        isEditMode={isEditMode}
        value={state.firstName}
        onChange={changeFieldValue("firstName")}
      />
      <EditableCell
        isEditMode={isEditMode}
        value={state.lastName}
        onChange={changeFieldValue("lastName")}
      />
      <EditableCell
        isEditMode={isEditMode}
        value={state.employment}
        onChange={changeFieldValue("employment")}
      />
      <Cell onClick={saveClickHandler}>{isEditMode ? "Сохранить" : "Редактировать"}</Cell>
    </Row>
  );
};

export default StaffRow;
