const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <>
      <label htmlFor="text" className="px-4 text-white"></label>
      <input
        className="placeholder: w-90 rounded-md bg-white px-2 py-2 text-sm outline-none"
        {...props}
      />
    </>
  );
};

export default Input;
