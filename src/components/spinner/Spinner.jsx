import "./spinner.css";
const Spinner = () => {
  return (
    <div className="absolute w-full max-w-full h-screen max-h-screen flex items-center justify-center left-0 right-0 top-0 bottom-0">
      <div className="loader"></div>
    </div>
  );
};

export default Spinner;
