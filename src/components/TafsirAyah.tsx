import { useEffect, useState } from "react";
import { getTafsirAyah } from "../utils/http";

interface TafsirAyahProps {
  surahNumber: number;
  ayahNumber: number;
}

const TafsirAyah = ({ surahNumber, ayahNumber }: TafsirAyahProps) => {
  const [tafsir, setTafsir] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    if (!isVisible) return;

    const fetchTafsir = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await getTafsirAyah(surahNumber, ayahNumber);
        setTafsir(data.text);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTafsir();
  }, [surahNumber, ayahNumber, isVisible]);

  return (
    <div className="mt-3 text-center">
      <button
        onClick={toggleVisibility}
        className="text-blue-600 dark:text-blue-400 text-sm mb-2 hover:underline"
      >
        {isVisible ? "إخفاء التفسير" : "عرض التفسير"}
      </button>

      {isVisible && (
        <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-200">
          {loading ? (
            <p className="text-gray-500">جارٍ تحميل التفسير...</p>
          ) : error ? (
            <p className="text-red-500">فشل تحميل التفسير.</p>
          ) : (
            <>
              <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2 text-right">التفسير:</p>
              <p className="text-right">{tafsir}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TafsirAyah;
