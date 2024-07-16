import { BiLoaderAlt } from "react-icons/bi";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <BiLoaderAlt className="w-12 h-12 animate-spin text-brand-600" />
    </div>
  );
};

export default Spinner;
