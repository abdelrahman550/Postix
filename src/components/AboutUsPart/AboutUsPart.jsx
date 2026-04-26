import DashBoardTile from "../AboutUsCard/DashBoardTile";

export default function AboutUsPart() {
  return (
    <>
      <div className="left-intro-pt order-2 w-[90%] md:w-[60%] lg:order-0 lg:w-lg xl:w-xl">
        <div className="hidden lg:block">
          <h1 className="text-6xl font-extrabold tracking-tight text-[#5B21B6]">
            Postix
          </h1>
          <p className="mt-4 text-2xl font-semibold text-slate-800">
            Connect with friends and the world around you on Postix.
          </p>
        </div>

        <div className="about-card mt-6 rounded-2xl border border-[#c9d5ff] bg-white/80 p-4 text-center shadow-sm backdrop-blur sm:p-5 lg:text-left">
          <p className="text-sm font-extrabold tracking-wide text-[#5B21B6] uppercase">
            About Postix
          </p>
          <p className="mt-1 text-lg font-bold text-slate-900">
            Your Modern Social Platform
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Postix is a next-generation social media platform designed for
            sharing posts, connecting with friends, and engaging with content
            that matters to you. Built with simplicity and performance in mind,
            Postix helps people stay connected in a fast, clean, and intuitive
            way.
          </p>
          <div className="dashboard-info mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            <DashBoardTile text={"Founded"} value={"2026"} />
            <DashBoardTile text={"Early Users"} value={"10K+"} />
            <DashBoardTile text={"Posting & Interaction"} value={"Real-time"} />
            <DashBoardTile text={"Web Experience"} value={"Cross-platform"} />
          </div>
        </div>
      </div>
    </>
  );
}
