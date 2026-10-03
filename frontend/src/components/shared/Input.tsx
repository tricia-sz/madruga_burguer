const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <>
      <input
        {...props}
        className="placeholder: w-90 rounded-md bg-white px-2 py-2 text-sm outline-none placeholder:text-gray-500"
      />
    </>
  );
};

export default Input;
