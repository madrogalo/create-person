import { useState } from "react";
import "./Toggle.css";

export const Toggle = ({
  checked,
  idToggle,
}: {
  checked: boolean;
  idToggle: string;
}) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="toggle-wrapper">
      <input
        type="checkbox"
        className="toggle-checkbox"
        id={idToggle}
        checked={isOn}
        onChange={() => {
          setIsOn(!isOn);
        }}
      />
      <label className="toggle-label" htmlFor={idToggle} />
    </div>
  );
};
