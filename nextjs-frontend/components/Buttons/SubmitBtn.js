const SubmitBtn = ({ ...props }) => {
  return (
    <button type="submit" className="btn btn-active btn-accent" {...props}>
      Send
    </button>
  );
};

export default SubmitBtn;
