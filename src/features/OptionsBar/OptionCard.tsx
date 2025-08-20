import { Button, Image } from "@chakra-ui/react";
import React from "react";
import { Tooltip } from "../../components/Tooltip/Tooltip";
import useStoreImageOptions from "../../hook/useOptionsImage";
import "./OptionCard.css";

interface optionCardProps {
  icon?: string;
  hoverText?: string;
  onClickAction?: () => void;
  OptionNumber?: number;
}

export const OptionCard: React.FC<optionCardProps> = ({
  onClickAction,
  hoverText,
  icon,
  OptionNumber,
}) => {
  const { OptionSelected } = useStoreImageOptions();

  console.log(
    "🚀 ~ OptionNumber == OptionSelected:",
    OptionNumber == OptionSelected
  );
  return (
    <Tooltip content={hoverText}>
      <Button
        onClick={() => onClickAction && onClickAction()}
        bgColor={"transparent"}
        h={"full"}
        p={0}
        _hover={{ bgColor: "blackAlpha.400" }}
        className={OptionNumber == OptionSelected ? "selected-option" : ""}
      >
        <Image
          src={icon}
          objectFit={"contain"}
          alt={"table frame"}
          p={2}
          h={"100%"}
        />
      </Button>
    </Tooltip>
  );
};
