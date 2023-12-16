import { FC } from "react";

import { default as styled } from "styled-components";

import Cell from "@/components/Table/Cell";

import EditIcon from "../../assets/icons/edit.svg?react";
import SaveIcon from "../../assets/icons/save.svg?react";

export interface Props {
  isEditMode: boolean;
  onClick: () => void;
}

const ButtonsWrapper = styled.div`
  cursor: pointer;
`;

const ButtonsCell: FC<Props> = ({ isEditMode, onClick }) => {
  return (
    <Cell>
      <ButtonsWrapper onClick={onClick}>
        {isEditMode ? (
          <SaveIcon width="20px" height="20px" />
        ) : (
          <EditIcon width="30px" height="30px" />
        )}
      </ButtonsWrapper>
    </Cell>
  );
};

export default ButtonsCell;
