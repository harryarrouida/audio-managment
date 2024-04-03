import React from "react";
import { Link } from "react-router-dom";

export default function UserDrawerComponent() {
  return (
    <div className="fixed top-0">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/39/Logo_SNRT.svg"
                alt="logo"
                className="w-1/2 text-center mx-auto"
              ></img>
            </li>
            <li>
              <div className="flex mt-5">
                <Link to={"/user/profile"}>Profile</Link>
              </div>
            </li>
            <li>
              <div className="flex">
                <Link to={"/user/audios"}>Audios</Link>
              </div>
            </li>
            <li>
              <div className="flex">
                <Link to={"/user/playlists"}>Playlists</Link>
              </div>
            </li>
            <li>
              <div className="flex">
                <Link to={"/user/create-playlist"}>Add Playlist</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
