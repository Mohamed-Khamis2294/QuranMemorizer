import { memo } from "react";

const Buttons = ({
  numbers,
  onselect,
  activeJuz,
}: {
  numbers: number[];
  onselect: (x: number) => void;
  activeJuz: number;
}) => {
  return (
    <div>
      <h2 className="text-xl text-center mb-2 font-semibold dark:text-white">
        Select Juz
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-2">
        {numbers.map((_, i) => {
          const juzNumber = i + 1;
          const isActive = juzNumber === activeJuz;

          return (
            <button
              key={juzNumber}
              onClick={() => onselect(juzNumber)}
              className={`w-10 h-10 rounded text-center leading-10 transition-colors  duration-200 font-medium ${
                isActive
                  ? "bg-blue-500 text-white cursor-auto dark:bg-blue-600"
                  : "bg-amber-400 text-black cursor-pointer dark:bg-yellow-600 dark:text-black"
              }`}
            >
              {juzNumber}
            </button>
          );
        })}
      </div>
    </div>
  );
};


export default memo(Buttons);
