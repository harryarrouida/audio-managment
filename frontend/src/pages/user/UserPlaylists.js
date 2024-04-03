import React, { useEffect, useState } from "react";
import UserDrawerComponent from "../../components/UserDrawerComponent";
import { gql, useMutation, useQuery } from "@apollo/client";
import PlaylistComponent from "../../components/PlaylistComponent";
import axios from "axios";

const FETCH_PLAYLISTS = gql`
  query FetchPlaylists($id: ID!) {
    playlists(_id: $id) {
      _id
      name
      description
    }
  }
`;

export default function UserPlaylists() {
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:4000/user/getUser", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.log("can't get the user");
      }
    };
    fetchUser();
  }, []);
  const { data, loading, error} = useQuery(FETCH_PLAYLISTS, {
    variables: {
      id: user ? user._id : "",
    },
  });

  if (loading) return <div>loading</div>;
  if (error) return <div>error: {error.message}</div>;

  return (
    <div>
      <UserDrawerComponent />
      <div className="ml-96 flex flex-col gap-5 my-10">
        {data.playlists.map((playlist) => (
          <PlaylistComponent
            _id={playlist._id}
            name={playlist.name}
            description={playlist.description}
          />
        ))}
      </div>
    </div>
  );
}
