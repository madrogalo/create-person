import "./Toggle.css";

export const Toggle = ({
  checked,
  idToggle,
  onChange,
}: {
  checked: boolean;
  idToggle: string;
  onChange: (checked: boolean) => void;
}) => {
  return (
    <div className="toggle-wrapper">
      <input
        type="checkbox"
        className="toggle-checkbox"
        id={idToggle}
        checked={checked}
        onChange={() => {
          onChange(!checked);
        }}
      />
      <label className="toggle-label" htmlFor={idToggle} />
    </div>
  );
};
