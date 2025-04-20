import "./Button.css";

interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  return (
    <button type="submit" className="button">
      {text}
    </button>
  );
};
