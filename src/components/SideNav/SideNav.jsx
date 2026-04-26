import { Bookmark, Earth, Newspaper, Sparkles } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

export default function SideNav() {
  return (
    <div className="xl:sticky xl:top-20 grid xl:h-24 xl:basis-60 grid-cols-2 xl:grid-cols-1 gap-1 rounded-2xl bg-white p-3 shadow">
      <NavLink to={"/feed"} >

      <div className="side-nav-item active">
        <span>
          <Newspaper size={18} />
        </span>
        <span>Feed</span>
      </div>
      </NavLink>

      <NavLink to={"/profile"} >
      <div className="side-nav-item">
        <span>
          <Sparkles size={18} />
        </span>
        <span>My Posts</span>
      </div>
      </NavLink>
    </div>
  );
}
