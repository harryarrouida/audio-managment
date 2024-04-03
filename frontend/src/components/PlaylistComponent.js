import React, { useState } from "react";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import Success from "./statusHandling/Success";

const DELETE_PLAYLIST = gql`
  mutation DeletePlaylist($id: ID!) {
    deletePlaylist(_id: $id) {
      name
    }
  }
`;

export default function PlaylistComponent(props) {
  const [status, setStatus] = useState(null);
  const [deletePlaylist] = useMutation(DELETE_PLAYLIST);

  const handleDelete = async () => {
    const result = deletePlaylist({
      variables: {
        id: props._id,
      },
    });
    if (result) {
      console.log("success", props._id);
      setStatus("success");
      setTimeout(() => {
        setStatus(null)
        return window.location.href = "/user/playlists"
      }, 2000)
    } else {
      setStatus("failed");
    }
  };
  return (
    <div className="w-1/2">
      <div class="flex justify-between w-full rounded-xl border-2 border-gray-200 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
        <div>
          <h2 class="mt-2 font-bold">
            <Link to={`/user/playlist/${props._id}`}>{props.name}</Link>
          </h2>
          <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            {props.description}
          </p>
        </div>
        <button className="btn btn-error text-white" onClick={handleDelete}>
          Delete
        </button>
      </div>
      {status === "success" ? (
        <Success message="playlist deleted successfully" />
      ) : (
        ""
      )}
      {status === "failed" ? (
        <Success message="failed playlist deleting" />
      ) : (
        ""
      )}
    </div>
  );
}
