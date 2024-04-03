import React from "react";

export default function NewsDetails(props) {
  return (
    <div>
      <p>Commentator: {props.audio.commentator}</p>
      <p>Event Location: {props.audio.event_location}</p>
      <p>Event Date: {props.audio.event_date}</p>
      <p>Sequence: {props.audio.sequence}</p>
    </div>
  );
}
