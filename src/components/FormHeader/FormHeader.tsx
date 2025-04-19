import { FC } from "react";
import "./FormHeader.css";

type FormHeaderProps = {
  title: string;
};
export const FormHeader: FC<FormHeaderProps> = ({ title }) => {
  return (
    <div className="FormHeader">
      <span>&#8592;</span>
      {title}
    </div>
  );
};
