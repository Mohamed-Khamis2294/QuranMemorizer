import { useState } from "react";
import {
  BookOpenText,
  ArrowRightLeft,
  Eye,
  ChevronDown,
  ChevronUp,
  Smile,
} from "lucide-react";

const Instructions = () => {
  const [open, setOpen] = useState(false);

  return (
    <div dir="rtl" className="mx-4 mt-4 pt-16" onClick={() => setOpen((prev) => !prev)} >
      {/* Toggle Button */}
      <div
        className="flex items-center justify-between w-full bg-yellow-500 dark:bg-yellow-600 text-black px-4 py-3 rounded-t-2xl font-bold shadow"
      >
        <span>تعليمات الاستخدام{!open&&(<span className="p-2 rounded text-green-700 ">اضغط هنا لتظهر التعليمات</span>)}</span>
        {open ? <ChevronUp /> : <ChevronDown />}
      </div>

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
              <span className="font-semibold">أولاً:</span> اختر السورة ورقم الاية التي ترغب من عندها البدء في الحفظ.
            </p>
          </div>

          <div className="flex items-start gap-2">
            <ArrowRightLeft className="mt-1" />
            <p>
              <span className="font-semibold">ثانياً:</span> ستظهر أول كلمةمن اخر  آية معروضة في الصفحة.
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
              وبعد الانتهاء يمكنك الانتقال الي الاية التالية .
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Eye className="mt-1" />
            <p>
              <span className="text-green-700 font-semibold">كما يمكنك الاستماع 
              لاخر اية معروضة بصوت الشيخ /مشاري راشد العفاسي</span>
              <span> </span>
              ويمكنك عرض تفسير اخر اية  
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Smile className="mt-1" />
            <p>
              بعد قراءة التعليمات يمكنك الان اغلاقها بالضغط علي اي جزء بها ويمكنك اظهارها مرة اخري عند الحاجة.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Instructions;
