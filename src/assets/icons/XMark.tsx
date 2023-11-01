import React from "react";
import { IconProps } from "../../types";
import { usePointContext } from "../../contexts/pointContext";

const XMark: React.FC<IconProps> = ({ handleClick, classValue }) => {
  const { setActivePoint, setToggleInfo } = usePointContext();

  return (
    <svg
      onClick={() => {
        handleClick(false);
        setActivePoint({});
        setToggleInfo(false);
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className={`${classValue}`}
      width={10}
      height={10}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default XMark;
