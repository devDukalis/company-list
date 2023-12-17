import { ChangeEvent, FC } from "react";

import { default as styled } from "styled-components";

import Cell from "@/components/Table/Cell";

const Input = styled.input`
  max-width: 150px;
  min-height: 30px;
`;

export interface Props {
  isEditMode: boolean;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  id?: string;
  style?: React.CSSProperties;
}

const EditableCell: FC<Props> = ({ isEditMode, value, onChange, placeholder, id, style }) => {
  return (
    <Cell style={{ ...style }}>
      {isEditMode ? (
        <Input value={value} onChange={onChange} placeholder={placeholder} id={id} />
      ) : (
        <div>{value}</div>
      )}
    </Cell>
  );
};

export default EditableCell;
