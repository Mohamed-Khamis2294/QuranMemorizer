import { useEffect, useState } from "react";

const PageDropdown = ({
  onselect,
  optionsNumbersArray,
}: {
  onselect: (x: number) => void;
  optionsNumbersArray: number[];
}) => {
  const [selected, setSelected] = useState<number>(optionsNumbersArray[0]);
  useEffect(()=>{
    setSelected(optionsNumbersArray[0])
  },[optionsNumbersArray])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);
    setSelected(value);
    onselect(value);
  };

  return (
    <div className="p-4">
      <label htmlFor="page-select" className="mr-2 font-medium dark:text-white">
        اختر الصفحة:
      </label>
      <select
        id="page-select"
        value={selected}
        onChange={handleChange}
        className="border border-gray-300 dark:border-gray-600 rounded px-3 py-1 bg-white dark:bg-gray-800 dark:text-white"
      >
        {optionsNumbersArray?.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PageDropdown;
