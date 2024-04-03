import React from "react";

export default function MusicDetails(props) {
  return (
    <div>
      <p>Singer: {props.audio.singer.join(", ")}</p>
      <p>Interpreter: {props.audio.interpreter}</p>
      <p>Composer: {props.audio.composer}</p>
      <p>Music Writer: {props.audio.music_writer}</p>
      <p>Musical Genre: {props.audio.musical_genre}</p>
      <p>Lyrics: {props.audio.lyrics}</p>
      <p>Orchestra: {props.audio.orchestra}</p>
      <p>Distribution: {props.audio.distribution}</p>
    </div>
  );
}
