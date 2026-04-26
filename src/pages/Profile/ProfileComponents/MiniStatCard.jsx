import React from 'react'

export default function MiniStatCard({ title, value }) {
  return (
    <div className="rounded-[22px] border border-[#DDD6FE] bg-[#EDE9FE] px-5 py-4 shadow-sm">
      <div className="text-xs font-extrabold tracking-wide text-[#5B21B6]">
        {title}
      </div>
      <div className="mt-3 text-2xl font-extrabold text-slate-900">{value}</div>
    </div>
  )
}
