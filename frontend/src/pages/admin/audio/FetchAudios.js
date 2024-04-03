import React from "react";
import AdminDrawerComponent from "../../../components/AdminDrawerComponent";

import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

//   query {
//     audios {
//       _id
//       title
//       date_production
//       productors
//       nbr_invoice
//       nbr_contract
//       type_support
//       nbr_support
//       tech_comments
//       quality
//       language
//       frequency
//       synopsis
//       type
//       commentator
//       event_location
//       event_date
//       sequence
//       presenter
//       preparation
//       format
//       version
//       speaker
//       causerie_reciter
//       causerie_location
//       quran_reciter
//       recite_type
//       singer
//       interpreter
//       composer
//       music_writer
//       musical_genre
//       lyrics
//       orchestra
//       distribution
//       author
//       actor
//       fiction_writer
//       adaptation
//     }
//   }
// `;

const FEED_AUDIOS = gql`
  query FeedAudios($offset: Int!, $limit: Int!) {
    feedAudios(offset: $offset, limit: $limit) {
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

export default function FetchAudios() {
  // fetch the audios
  const { data, loading, error, fetchMore } = useQuery(FEED_AUDIOS, {
    variables: {
      offset: 0,
      limit: 5,
    },
  });
  if (loading) return <div>loading...</div>;
  if (error) return <div>error: {error.message}</div>;

  // check if it's an admin
  const token = localStorage.getItem("adminToken");
  if (!token) {
    window.location.href = "/admin/login";
    return null;
  }
  const fetch = () => {
    fetchMore({
      variables: {
        offset: data.feedAudios.length,
        limit: 5,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return fetchMoreResult;
      },
    });
  };
  return (
    <div className="flex flex-between h-screen">
      <AdminDrawerComponent />
      <div className="w-3/5 ml-96">
        <div className="my-10 uppercase text-2xl text-center">
          Fetch Audios
        </div>

        <div className="rounded-lg border border-gray-200 my-20">
          <div className="overflow-x-auto rounded-t-lg">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    TITLE
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    TYPE
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    LANGUAGE
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    DATA PRODUCTION
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 text-center">
                {data &&
                  data.feedAudios.map((audio) => (
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        <Link to={`/admin/audio-details/${audio._id}`}>
                          {audio.title}
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {audio.type}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {audio.language}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {audio.date_production}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div class="join mx-auto text-center">
          <button class="join-item btn">prev</button>
          <button class="join-item btn" onClick={fetch}>
            next
          </button>
        </div>
      </div>
    </div>
  );
}
