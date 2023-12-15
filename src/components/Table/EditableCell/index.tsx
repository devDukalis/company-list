import { ChangeEvent, FC } from "react";

import Cell from "@/components/Table/Cell";

export interface Props {
  isEditMode: boolean;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const EditableCell: FC<Props> = ({ isEditMode, value, onChange }) => {
  return <Cell>{isEditMode ? <input value={value} onChange={onChange} /> : value}</Cell>;
};

export default EditableCell;
