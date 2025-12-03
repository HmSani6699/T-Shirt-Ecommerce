import { FiSearch } from "react-icons/fi";

const SearchInputField = ({ value, setValue, placeholder }) => {
  return (
    <div className="flex items-center bg-white rounded-full border border-gray-200 py-[6px] px-[20px] w-full lg:w-[400px]">
      <FiSearch className="text-[20px] text-gray-500 bg-white" />

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="bg-white outline-none rounded-full  w-full pl-[6px] "
        placeholder={placeholder ? placeholder : "I am looking for..."}
      />
    </div>
  );
};

export default SearchInputField;
