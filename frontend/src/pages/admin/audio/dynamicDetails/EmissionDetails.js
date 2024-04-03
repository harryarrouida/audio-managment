import React from "react";

export default function EmissionDetails(props) {
  return (
    <div>
      <p>Presenter: {props.audio.presenter.join(", ")}</p>
      <p>Preparation: {props.audio.preparation.join(", ")}</p>
      <p>Format: {props.audio.format}</p>
      <p>Version: {props.audio.version}</p>
    </div>
  );
}
