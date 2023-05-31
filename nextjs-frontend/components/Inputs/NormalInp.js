const NormalInp = ({
  disable = 0,
  type = "text",
  placeholder = "Type here",
  ...props
}) => {
  return (
    <input
      disabled={disable}
      type={type}
      placeholder={placeholder}
      className="input input-bordered input-md w-full max-w-xs"
      {...props}
    />
  );
};

export default NormalInp;
