import React, { useEffect, useState } from "react";
import UserDrawerComponent from "../../components/UserDrawerComponent";
import { gql, useMutation } from "@apollo/client";
import axios from "axios";
import Success from "../../components/statusHandling/Success";
import Error from "../../components/statusHandling/Error";

const CREATE_PLAYLIST = gql`
  mutation CreatePlaylist($name: String!, $description: String!, $user: ID!) {
    createPlaylist(name: $name, description: $description, user: $user) {
      name
      description
    }
  }
`;

export default function CreatePlaylists() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    user: "",
  });
  const [user, setUser] = useState();
  const [status, setStatus] = useState(null)

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

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const [createPlaylist] = useMutation(CREATE_PLAYLIST);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createPlaylist({
        variables: {
          name: formData.name,
          description: formData.description,
          user: user ? user._id : "",
        },
      });
      if (result) {
        console.log("playlist created successfully");
        setStatus("success");
      }
    } catch (error) {
      setStatus("failed");
      console.log("failed creating playlist");
    }
    setTimeout(() => {
      setStatus(null)
    }, 3000)
  };
  return (
    <div>
      <UserDrawerComponent />
      <div className="ml-96">
        <section>
          <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form onSubmit={handleSubmit} class="space-y-4">
                  <div>
                    <label class="sr-only" for="name">
                      Name
                    </label>
                    <input
                      class="w-full input input-bordered"
                      placeholder="Name"
                      type="text"
                      id="name"
                      name="name"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label class="sr-only" for="message">
                      Description
                    </label>

                    <textarea
                      class="w-full textarea textarea-bordered"
                      placeholder="Message"
                      rows="8"
                      id="message"
                      name="description"
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div class="mt-4 flex justify-end">
                    <button
                      type="submit"
                      className="btn btn-primary text-white"
                    >
                      Add Playlist
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      {status === 'success' ? <Success message="playlist create successfully"/> : ""}
      {status === 'failed' ? <Error message="failed to create playlist"/> : ""}
    </div>
  );
}
