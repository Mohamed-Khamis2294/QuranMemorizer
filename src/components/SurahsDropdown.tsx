import  { memo } from 'react';
import { surahNames } from './../utils/data';

const SurahsDropdown = ({
  setSurahChoise,
  surahChoise,
}: {
  setSurahChoise: (value: string) => void;
  surahChoise: string;
}) => {
  return (
    <>
      <div className="my-4">
        <label
          htmlFor="surah-choice"
          className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          اختر السورة:
        </label>

        <select
          id="surah-choice"
          name="surah-choice"
          value={surahChoise}
          onChange={(e) => setSurahChoise(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                     focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                     transition duration-200"
        >
          <option value="">-- اختر سورة --</option>
          {surahNames.map((surah, idx) => (
            <option key={idx} value={surah.name}>
              {surah.name}
            </option>
          ))}
        </select>
      </div>
      <h1 className="text-center font-bold text-2xl">{surahChoise}</h1>
    </>
  );
};

export default memo(SurahsDropdown);
