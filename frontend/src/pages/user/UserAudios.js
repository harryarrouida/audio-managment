import React, { useEffect, useState } from "react";
import UserDrawerComponent from "../../components/UserDrawerComponent";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import AudioComponent from "../../components/AudioComponent";

const FETCH_AUDIOS = gql`
  query {
    audios {
      _id
      title
      date_production
      productors
      nbr_invoice
      nbr_contract
      type_support
      nbr_support
      tech_comments
      quality
      language
      frequency
      synopsis
      type
      commentator
      event_location
      event_date
      sequence
      presenter
      preparation
      format
      version
      speaker
      causerie_reciter
      causerie_location
      quran_reciter
      recite_type
      singer
      interpreter
      composer
      music_writer
      musical_genre
      lyrics
      orchestra
      distribution
      author
      actor
      fiction_writer
      adaptation
    }
  }
`;

const PUSH_AUDIO = gql`
  mutation PushAudioToPlaylist($playlistId: ID!, $audioId: ID!) {
    pushAudioToPlaylist(playlistId: $playlistId, audioId: $audioId) {
      name
      description
      audios
      user
    }
  }
`;

export default function UserAudios() {
  const [chosen, setChosen] = useState("");

  const chosenChange = (e) => {
    setChosen(e.target.value);
  };

  const { data, loading, error } = useQuery(FETCH_AUDIOS);
  const [pushAudio] = useMutation(PUSH_AUDIO);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error: {error.message}</div>;

  const token = localStorage.getItem("userToken");
  if (!token) {
    window.location.href = "/user/login";
    return null;
  }

  const add = async (audioId) => {
    try {
      const result = await pushAudio({
        variables: {
          playlistId: chosen,
          audioId: audioId,
        },
      });
      console.log("success");
    } catch (error) {
      console.error("Error adding audio to playlist:", error);
    }
  };

  return (
    <div>
      <UserDrawerComponent />
      <div className="ml-96 flex flex-col gap-8 my-10">
        {data &&
          data.audios.map((audio) => (
            <AudioComponent
              key={audio._id}
              badge="new"
              toPath={`/user/audio-details/${audio._id}`}
              title={audio.title}
              description="Audio Playing is not available for the moment"
              type={audio.type}
              language={audio.language}
              quality={audio.quality}
              frequency={audio.frequency}
            />
          ))}
      </div>
    </div>
  );
}
