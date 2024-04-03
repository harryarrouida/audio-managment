import React from "react";
import { Link } from "react-router-dom";

export default function AudioComponent(props) {
  return (
    <div>
      <article className="w-3/4 rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
        <div className="flex items-start sm:gap-8 w-full">
          <div
            className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
            aria-hidden="true"
          >
            <div className="flex items-center gap-1">
              <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
              <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
              <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
              <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
              <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
            </div>
          </div>

          <div className="w-full">
            <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
              {props.badge}
            </strong>

            <h3 className="mt-4 text-lg font-medium sm:text-xl">
              <Link to={props.toPath}>
                <div className="hover:underline">{props.title}</div>
              </Link>
            </h3>

            <p className="mt-1 text-sm text-gray-700">{props.description}</p>

            <div className="mt-4 sm:flex sm:items-center sm:gap-2">
              <div className="flex items-center gap-1 text-gray-500">
                <p className="text-xs font-medium underline">{props.type}</p>
              </div>

              <div className="mt-2 text-xs font-medium text-gray-500 sm:mt-0 flex">
                <div className=" hover:text-gray-700">{props.language}</div>-
                <div className=" hover:text-gray-700">{props.quality}</div>-
                <div className=" hover:text-gray-700">{props.frequency}</div>
              </div>
              <div className="flex justify-end w-full mx-auto gap-5">
                <button className="btn">Listen</button>
                <button className="btn btn-primary text-white">Add</button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
