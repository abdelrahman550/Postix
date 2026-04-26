import React from "react";

export default function DashBoardTile({ text, value }) {
  return (
    <>
      <div className="rounded-xl border border-[#DDD6FE] bg-[#EDE9FE] px-3 py-2">
        <p className="text-base font-extrabold text-[#5B21B6]">{value}</p>
        <p className="text-[11px] font-bold tracking-wide text-slate-600 uppercase">
          {text}
        </p>
      </div>
    </>
  );
}
