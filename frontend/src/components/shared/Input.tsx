const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <>
      <input
        {...props}
        className="placeholder: w-90 rounded-md bg-orange-200 px-2 py-2 text-sm text-gray-950 outline-none placeholder:text-gray-500"
      />
    </>
  );
};

export default Input;
