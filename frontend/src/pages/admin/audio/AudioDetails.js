import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import NewsDetails from "./dynamicDetails/NewsDetails";
import EmissionDetails from "./dynamicDetails/EmissionDetails";
import CauserieDetails from "./dynamicDetails/CauserieDetails";
import QuranDetails from "./dynamicDetails/QuranDetails";
import MusicDetails from "./dynamicDetails/MusicDetails";
import FictionDetails from "./dynamicDetails/FictionDetails";
import { useParams } from "react-router-dom";
import AdminDrawerComponent from "../../../components/AdminDrawerComponent";

const FETCH_AUDIO = gql`
  query fetchAudio($input: ID!) {
    audio(_id: $input) {
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
const DELETE_AUDIO = gql`
  mutation DeleteAudio($input: ID!) {
    deleteAudio(_id: $input) {
      _id
      title
    }
  }
`;

export default function AudioDetails() {
  const { _id } = useParams();
  const { data, loading, error } = useQuery(FETCH_AUDIO, {
    variables: { input: _id },
  });
  const [deleteAudio] = useMutation(DELETE_AUDIO, { variables: {  input: _id } });
  if (loading) return <div>loading...</div>;
  if (error) return <div>error happened: {error.message}</div>;

  const audio = data.audio;

  const handleDelete = async () => {
    if (window.confirm()) {
      await deleteAudio();
      return (window.location.href = "/admin/audios");
    }
  };

  return (
    <div className="flex flex-between h-screen">
      <AdminDrawerComponent />
      <div className="w-3/5 ml-96">
        <h2 className="text-2xl  my-10">Title: {audio.title}</h2>
        <p>Date Production: {audio.date_production}</p>
        <p>Productors: {audio.productors.join(", ")}</p>
        <p>Number of Invoice: {audio.nbr_invoice}</p>
        <p>Number of Contract: {audio.nbr_contract}</p>
        <p>Type of Support: {audio.type_support}</p>
        <p>Number of Support: {audio.nbr_support}</p>
        <p>Tech Comments: {audio.tech_comments}</p>
        <p>Quality: {audio.quality}</p>
        <p>Language: {audio.language}</p>
        <p>Frequency: {audio.frequency}</p>
        <p>Synopsis: {audio.synopsis}</p>
        <p>Type: {audio.type.join(", ")}</p>
        {console.log(audio.type)}

        {audio.type.map((item) => {
          switch (item) {
            case "News":
              return <NewsDetails audio={audio} />;
            case "Emission":
              return <EmissionDetails audio={audio} />;
            case "Causerie":
              return <CauserieDetails audio={audio} />;
            case "Quran":
              return <QuranDetails audio={audio} />;
            case "Music":
              return <MusicDetails audio={audio} />;
            case "Fiction":
              return <FictionDetails audio={audio} />;
            default:
              return null;
          }
        })}
        <button className="btn btn-error text-white my-5" onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
}
