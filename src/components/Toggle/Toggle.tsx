import { useState } from "react";
import "./Toggle.css";

export const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="toggle-wrapper">
      <input
        type="checkbox"
        className="toggle-checkbox"
        id="toggle"
        checked={isOn}
        onChange={() => setIsOn(!isOn)}
      />
      <label className="toggle-label" htmlFor="toggle" />
    </div>
  );
};
