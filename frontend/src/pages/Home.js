import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const scenes = [
    "music1.svg",
    "music2.svg",
    "music3.svg",
    "music4.svg",
    "music5.svg",
    "music6.svg",
    "music7.svg",
    "music8.svg",
  ];
  const [chosen, setChosen] = useState();
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * scenes.length);
    setChosen(scenes[randomIndex]);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(/assets/bg.jpeg)`,
      }}
    >
      <div className="bg-opacity-60"></div>
      <div className="text-neutral-content flex w-full">
        <div className="w-1/2 h-screen flex justify-center items-center">
          <div className="px-20">
            <h1 className="text-5xl font-bold my-5 leading-normal">
              Welcome to SNRT Audio Management
            </h1>
            <p className="mb-5">
              Your ultimate solution for organizing and enjoying your audio
              content.
            </p>

            <div className="my-8">
              <Link
                to="/user/login"
                className="btn btn-primary text-white mr-4"
              >
                Login
              </Link>
              <Link
                to="/user/register"
                className="btn btn-secondary text-white"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center h-screen">
          <img
            src={`/assets/scenes/${chosen}`}
            className="w-4/5 mx-auto"
            alt="Music Scene"
          />
        </div>
      </div>
    </div>
  );
}
