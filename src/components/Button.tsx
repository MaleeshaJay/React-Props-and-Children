interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  varient?: "primary" | "secondary";
}
const Button = ({ label, onClick, disabled = false, varient }: ButtonProps) => {
  return (
    <>
      <button
        type="button"
        className={
          varient ? `btn btn-outline-${varient}` : `btn btn-outline-primary`
        }
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
