type ButtonType = {
  title: string;
  variant?: "default" | "outline" | "none";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, variant = "default", ...props }: ButtonType) => {
  const buttonVariant = () => {
    if (variant === "default") {
      return "w-64 mt-2 bg-orange-600 rounded-full bg-orange-600 py-3 font-semibold text-white";
    } else if (variant === "outline") {
      return "w-64 py-3 rounded-full bg-orange-400 cursor-pointer ";
    } else {
      return "w-64  text-white  py-3 cursor-pointer rounded-full border-2 border-blue-600";
    }
  };

  // "mt-2 rounded-full bg-orange-200 py-2 font-semibold text-blcak";
  return (
    <button {...props} className={buttonVariant()}>
      {title}
    </button>
  );
};

export default Button;
