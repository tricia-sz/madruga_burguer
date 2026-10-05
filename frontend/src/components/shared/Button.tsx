type ButtonType = {
  title: string;
  variant?: "default" | "outline" | "none";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, variant = "default", ...props }: ButtonType) => {
  const buttonVariant = () => {
    if (variant === "default") {
      return "mt-2 bg-orange-600 rounded-full bg-orange-600 py-2 font-semibold text-white";
    } else if (variant === "outline") {
      return "w-full bg-orange-200 cursor-pointer rounded-md border-2 border-orange-600";
    } else {
      return "w-full  cursor-pointer rounded-md border-2 border-blue-600";
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
