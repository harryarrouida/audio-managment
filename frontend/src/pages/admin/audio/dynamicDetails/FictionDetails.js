import React from "react";

export default function FictionDetails(props) {
  return (
    <div>
      <p>Author: {props.audio.author.join(", ")}</p>
      <p>Actor: {props.audio.actor.join(", ")}</p>
      <p>Fiction Writer: {props.audio.fiction_writer}</p>
      <p>Adaptation: {props.audio.adaptation}</p>
    </div>
  );
}
