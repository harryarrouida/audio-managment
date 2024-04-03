import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

import QuranFields from "./formComponents/QuranFields";
import NewsFields from "./formComponents/NewsFields";
import EmissionFields from "./formComponents/EmissionFields";
import FictionFields from "./formComponents/FictionFields";
import CauserieFields from "./formComponents/CauserieFields";
import MusicFields from "./formComponents/MusicFields";
import GeneralFields from "./formComponents/GeneralFields";

import Success from "../../../../components/statusHandling/Success";
import Error from "../../../../components/statusHandling/Error";

const CREATE_AUDIO = gql`
  mutation CreateAudio($input: AudioInput!) {
    createAudio(audioInput: $input) {
      _id
      title
    }
  }
`;

const TYPES = ["Music", "Quran", "News", "Emission", "Causerie", "Fiction"];

export default function Form() {
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState(null);
  const [createAudio] = useMutation(CREATE_AUDIO);

  const handleCSVFieldChange = (name, value) => {
    const updatedValue = value.split(",").map((item) => item.trim());
    setFormData((prevState) => ({
      ...prevState,
      [name]: updatedValue,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      [
        "productors",
        "presenter",
        "preparation",
        "singer",
        "author",
        "actor",
      ].includes(name)
    ) {
      handleCSVFieldChange(name, value);
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      console.log(formData)
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createAudio({
        variables: {
          input: formData,
        },
      });
      console.log("successful", result);
      setStatus("success");
    } catch (error) {
      console.log("failed", error);
      setStatus("failed");
    }

    setTimeout(() => {
      setStatus(null);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* General fields... */}
      <GeneralFields handleChange={handleChange} formData={formData} />
      <div className="w-1/1 text-center my-5">
        <select
          name="type"
          onChange={handleChange}
          className="select select-bordered focus:outline-none text-slate-800 mx-auto w-full"
        >
          <option disabled selected>
            Select a type
          </option>
          {TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Conditional fields... */}
      {formData.type === "Music" && <MusicFields handleChange={handleChange} />}
      {formData.type === "Emission" && (
        <EmissionFields handleChange={handleChange} />
      )}
      {formData.type === "Quran" && <QuranFields handleChange={handleChange} />}
      {formData.type === "News" && <NewsFields handleChange={handleChange} />}
      {formData.type === "Fiction" && (
        <FictionFields handleChange={handleChange} />
      )}
      {formData.type === "Causerie" && (
        <CauserieFields handleChange={handleChange} />
      )}

      <div className="mx-auto text-center">
        <button className="btn btn-primary text-white my-10" type="submit">
          Submit
        </button>
      </div>

      {/* Status messages... */}
      {status === "success" && (
        <Success message={"Audio Created Successfully"} />
      )}
      {status === "failed" && <Error message={"Failed To Create Audio"} />}
    </form>
  );
}
