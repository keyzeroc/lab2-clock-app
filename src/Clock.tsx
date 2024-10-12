import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function Clock() {
  const [now, setNow] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow((prev) => prev.add(1, "second"));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [now]);
  const transpClasses = "bg-clip-text text-transparent bg-bgText text-center";

  return (
    <div className="text-6xl sm:text-8xl md:text-10xl lg:text-12xl flex items-center justify-center gap-4 font-extrabold">
      <div className={`${transpClasses} min-w-[5rem]`}>{now.format("HH")}</div>
      <div className={`${transpClasses} mb-8`}>:</div>
      <div className={`${transpClasses} min-w-[5rem]`}>{now.format("mm")}</div>
      <div className={`${transpClasses} mb-8`}>:</div>
      <div className={`${transpClasses} min-w-[5rem]`}>{now.format("ss")}</div>
    </div>
  );
}
