import "./Button.scss";

export const Button = ({ text, onClick, className, children }) => {
  return (
    <button
      className={`custom-button ${className}`}
      onClick={onClick}
      onMouseDown={(e) => e.currentTarget.classList.add("active")}
      onMouseUp={(e) => e.currentTarget.classList.remove("active")}
      onMouseLeave={(e) => e.currentTarget.classList.remove("active")}
    >
      {children || text}
    </button>
  );
};
