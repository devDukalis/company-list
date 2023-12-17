import { default as styled } from "styled-components";

import Cell from "@/components/Table/Cell";

import EditIcon from "../../assets/icons/edit.svg?react";
import SaveIcon from "../../assets/icons/save.svg?react";

const ButtonsWrapper = styled.div`
  cursor: pointer;
`;

interface Props {
  isEditMode: boolean;
  onClick: () => void;
}

const ButtonsCell: React.FC<Props> = ({ isEditMode, onClick }) => {
  const Icon = isEditMode ? SaveIcon : EditIcon;

  const iconSize = isEditMode
    ? { width: "20px", height: "20px" }
    : { width: "30px", height: "30px" };

  return (
    <Cell>
      <ButtonsWrapper onClick={onClick}>
        <Icon {...iconSize} />
      </ButtonsWrapper>
    </Cell>
  );
};

export default ButtonsCell;
