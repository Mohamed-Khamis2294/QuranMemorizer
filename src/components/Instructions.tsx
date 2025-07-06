import { useState, useEffect, useRef } from "react";
import {
  BookOpenText,
  ArrowRightLeft,
  Eye,
  Smile,
  X,
} from "lucide-react";

const Instructions = () => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Close modal on backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  return (
    <div dir="rtl" className="mx-4 mt-4 pt-16">
      {/* Open Modal Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-between w-full bg-yellow-500 dark:bg-yellow-600 text-black px-4 py-3 rounded-2xl font-bold shadow"
      >
        <span>تعليمات الاستخدام</span>
        <span className="p-2 rounded text-green-700">اضغط هنا لتظهر التعليمات</span>
      </button>

      {/* Modal with Backdrop & Animation */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-center transition-opacity duration-300"
          onClick={handleBackdropClick}
        >
          <div
            ref={modalRef}
            className="bg-amber-400 dark:bg-yellow-500 text-black p-6 rounded-2xl shadow-lg w-[90%] max-w-xl space-y-4 relative animate-fade-in-up"
          >
            {/* Close Button */}
            <button onClick={() => setOpen(false)} className="absolute top-3 left-3">
              <X />
            </button>

            {/* Modal Content */}
            <div className="flex items-start gap-2">
              <BookOpenText className="mt-1" />
              <p>
                هذا الموقع يساعدك على تسميع القرآن لنفسك، ومن الأفضل الذهاب إلى{" "}
                <span className="font-bold underline">محفظ أو شيخ</span> ليساعدك في ذلك.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <ArrowRightLeft className="mt-1" />
              <p>
                <span className="font-semibold">أولاً:</span> اختر السورة ورقم الآية التي ترغب من عندها البدء في الحفظ.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <ArrowRightLeft className="mt-1" />
              <p>
                <span className="font-semibold">ثانياً:</span> ستظهر أول كلمة من آخر آية معروضة في الصفحة.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <Eye className="mt-1" />
              <p>
                تلك الكلمة تظهر
                <span className="text-green-700 font-semibold"> باللون الأخضر </span>، ويمكنك الضغط عليها لعرض الآية كاملة أو الضغط مرة أخرى لعرض أول كلمة فقط.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <Eye className="mt-1" />
              <p>
                أو الضغط على الأزرار التي تظهر تحت آخر آية تم عرضها لعرض كلمة كلمة. وبعد الانتهاء يمكنك الانتقال إلى الآية التالية.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <Eye className="mt-1" />
              <p>
                <span className="text-green-700 font-semibold">
               كما يمكنك الاستماع لآخر آية معروضة واختيار القارئ 
                </span>
                <span> </span>
                ويمكنك عرض تفسير آخر آية.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <Smile className="mt-1" />
              <p>
                بعد قراءة التعليمات يمكنك إغلاقها بالضغط على زر الإغلاق، ويمكنك عرضها مرة أخرى عند الحاجة.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Instructions;
