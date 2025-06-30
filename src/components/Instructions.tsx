import { useState } from "react";
import {
  BookOpenText,
  ArrowRightLeft,
  Eye,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Instructions = () => {
  const [open, setOpen] = useState(false);

  return (
    <div dir="rtl" className="mx-4 mt-4 pt-16">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-between w-full bg-yellow-500 dark:bg-yellow-600 text-black px-4 py-3 rounded-t-2xl font-bold shadow"
      >
        <span>تعليمات الاستخدام</span>
        {open ? <ChevronUp /> : <ChevronDown />}
      </button>

      {/* Collapsible content */}
      {open && (
        <div className="bg-amber-400 dark:bg-yellow-500 text-black p-6 rounded-b-2xl shadow-lg border border-t-0 border-yellow-500 space-y-4 transition-all duration-300 ease-in-out">
          <div className="flex items-start gap-2">
            <BookOpenText className="mt-1" />
            <p>
              هذا الموقع يساعدك على تسميع القرآن لنفسك، و من الأفضل الذهاب إلى{" "}
              <span className="font-bold underline">محفظ أو شيخ</span> ليساعدك في ذلك. 
            </p>
          </div>

          <div className="flex items-start gap-2">
            <ArrowRightLeft className="mt-1" />
            <p>
              <span className="font-semibold">أولاً:</span> اختر الجزء والصفحة التي تحفظها.<span className="bg-green-500 text-white px-2 py-0.5 rounded">او</span> السورة ورقم الاية التي ترغب من عندها البدء في الحفظ.
            </p>
          </div>

          <div className="flex items-start gap-2">
            <ArrowRightLeft className="mt-1" />
            <p>
              <span className="font-semibold">ثانياً:</span> ستظهر أول كلمةمن اول  آية من الصفحة، ثم عند الضغط على{" "}
              <span className="bg-green-500 text-white px-2 py-0.5 rounded">التالي</span>، تظهر أول كلمة فقط من الآية التالية.
            </p>
          </div>

          <div className="flex items-start gap-2">
            <Eye className="mt-1" />
            <p>
              تلك الكلمة تظهر
              <span className="text-green-700 font-semibold">باللون الأخضر</span>، ويمكنك الضغط عليها لعرض الآية كاملة او الضغط عليها مرة اخري لعرض اول كلمة فقط.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Eye className="mt-1" />
            <p>
              او الضغط علي الازرار التي تظهر تحت اخر اية تم عرضها لعرض كلمة كلمة.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Instructions;
