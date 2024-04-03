import React from "react";

export default function QuranFields(props) {
  return (
    <div className="w-3/5 mx-auto flex flex-col text-center gap-5">
      <input
        type="text"
        name="quran_reciter"
        placeholder="Quran Reciter"
        onChange={props.handleChange}
        className="input input-bordered focus:outline-none"
      />
      <input
        type="text"
        name="recite_type"
        placeholder="Recite Type"
        onChange={props.handleChange}
        className="input input-bordered focus:outline-none"
      />
    </div>
  );
}
