import React from "react";

export default function QuranDetails(props) {
  return (
    <div>
      <p>Quran Reciter: {props.audio.quran_reciter}</p>
      <p>Recite Type: {props.audio.recite_type}</p>
    </div>
  );
}
