import { ChangeEvent, FC } from "react";

import styledComponent from "styled-components";

import Cell from "@/components/Table/Cell";

const Input = styledComponent.input`
  max-width: 150px;
`;

export interface Props {
  isEditMode: boolean;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const EditableCell: FC<Props> = ({ isEditMode, value, onChange }) => {
  return <Cell>{isEditMode ? <Input value={value} onChange={onChange} /> : value}</Cell>;
};

export default EditableCell;
