import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import AdminDrawerComponent from "../../../components/AdminDrawerComponent";

const FETCH_BY_NAME = gql`
  query FetchByName($title: String!) {
    audioByTitle(title: $title) {
      _id
      title
    }
  }
`;

export default function SearchAudio() {
  const [title, setTitle] = useState(null);
  const { data, loading, error, refetch } = useQuery(FETCH_BY_NAME, {
    variables: { title },
  });

  useEffect(() => {
    refetch();
  }, [title]);
  const token = localStorage.getItem("adminToken");
  if (!token) {
    window.location.href = "/admin/login";
    return null;
  }

  return (
    <div className="flex flex-between h-screen">
      <AdminDrawerComponent />
      <div className="w-3/5 ml-96">
        <div className="my-10 uppercase text-2xl text-center">
          fetch an audio with title
        </div>
        <div className="relative w-4/5 mx-auto my-20">
          <form className="text-center">
            <label htmlFor="Search" className="sr-only">
              Title
            </label>
            <input
              type="text"
              id="Search"
              placeholder="Search for..."
              className="input input-bordered focus:outline-none w-2/3"
              // className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm p-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </form>
          <div className="my-20">
            {loading ? <div>Loading...</div> : <></>}
            {/* {error ? <div>Error: {error.message}</div> : <></>} */}
            {data &&
              data.audioByTitle.map((audio) => (
                <li key={audio._id} className="my-5">
                  <Link to={`/admin/audio-details/${audio._id}`}>
                    {audio.title}
                  </Link>
                </li>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
