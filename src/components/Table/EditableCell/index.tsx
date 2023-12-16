import { ChangeEvent, FC } from "react";

import { default as styled } from "styled-components";

import Cell from "@/components/Table/Cell";

const Input = styled.input`
  max-width: 150px;
`;

export interface EditableCellProps {
  isEditMode: boolean;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  id?: string;
}

const EditableCell: FC<EditableCellProps> = ({ isEditMode, value, onChange, placeholder, id }) => {
  return (
    <Cell>
      {isEditMode ? (
        <Input value={value} onChange={onChange} placeholder={placeholder} id={id} />
      ) : (
        <div>{value}</div>
      )}
    </Cell>
  );
};

export default EditableCell;
