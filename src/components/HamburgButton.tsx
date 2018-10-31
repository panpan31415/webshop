import * as React from "react";

interface IProps {
  active: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const HamburgButton: React.SFC<IProps> = (props: IProps) => {
  let display = "";
  if (props.active) {
    display = "hambrug-button--active";
  } else {
    display = "";
  }
  return (
    <button className={display + " hambrug-button"} onClick={props.onClick}>
      <span className="hambrug-button__bar">
        <hr className="hambrug-button__bar-line hambrug-button__bar-line--1" />
      </span>
      <span className="hambrug-button__bar">
        <hr className="hambrug-button__bar-line hambrug-button__bar-line--2" />
      </span>
      <span className="hambrug-button__bar">
        <hr className="hambrug-button__bar-line hambrug-button__bar-line--3" />
      </span>
    </button>
  );
};
export default HamburgButton;
