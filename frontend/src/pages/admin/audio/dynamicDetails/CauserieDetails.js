import React from "react";

export default function CauserieDetails(props) {
  return (
    <div>
      <p>Speaker: {props.audio.speaker}</p>
      <p>Causerie Reciter: {props.audio.causerie_reciter}</p>
      <p>Causerie Location: {props.audio.causerie_location}</p>
    </div>
  );
}
