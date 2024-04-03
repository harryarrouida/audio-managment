import React from "react";

const LANGS = ["English", "Arab", "French", "Spanish"];

export default function GeneralFields({ formData, handleChange }) {
  return (
    <div className="flex w-full gap-2 mx-auto">
      <div className="flex flex-col mx-auto w-1/3 gap-5">
        <input
          name="title"
          id="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="input input-bordered focus:outline-none"
        />
        <input
          name="date_production"
          id="date_production"
          placeholder="Date Production"
          value={formData.date_production}
          onChange={handleChange}
          className="input input-bordered focus:outline-none"
        />
        <input
          name="productors"
          id="productors"
          placeholder="Productors"
          value={formData.productors}
          onChange={handleChange}
          className="input input-bordered focus:outline-none"
        />
        <input
          name="nbr_invoice"
          id="nbr_invoice"
          placeholder="Nbr Invoice"
          value={formData.nbr_invoice}
          onChange={handleChange}
          className="input input-bordered focus:outline-none"
        />
        <input
          name="nbr_contract"
          id="nbr_contract"
          placeholder="Nbr Contract"
          value={formData.nbr_contract}
          onChange={handleChange}
          className="input input-bordered focus:outline-none"
        />
      </div>
      <div className="flex flex-col mx-auto w-1/3 gap-5">
        <input
          name="type_support"
          id="type_support"
          placeholder="Type Support"
          value={formData.type_support}
          onChange={handleChange}
          className="input input-bordered focus:outline-none"
        />
        <input
          name="nbr_support"
          id="nbr_support"
          placeholder="Nbr Support"
          value={formData.nbr_support}
          onChange={handleChange}
          className="input input-bordered focus:outline-none"
        />
        <input
          name="tech_comments"
          id="tech_comments"
          placeholder="Tech Comments"
          value={formData.tech_comments}
          onChange={handleChange}
          className="input input-bordered focus:outline-none"
        />
        <input
          name="quality"
          id="quality"
          placeholder="Quality"
          value={formData.quality}
          onChange={handleChange}
          className="input input-bordered focus:outline-none"
        />
        <select
          name="language"
          onChange={handleChange}
          className="select select-bordered focus:outline-none max-w-xs w-full"
        >
          <option selected disabled>
            Select a language
          </option>
          {LANGS.map((lang) => (
            <option value={lang}>{lang}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col mx-auto w-1/3 gap-5">
        <input
          name="frequency"
          id="frequency"
          placeholder="Frequency"
          value={formData.frequency}
          onChange={handleChange}
          className="input input-bordered focus:outline-none"
        />
        <input
          name="format"
          id="format"
          placeholder="Format"
          value={formData.format}
          onChange={handleChange}
          className="input input-bordered focus:outline-none"
        />
        <input
          name="synopsis"
          id="synopsis"
          placeholder="Synopsis"
          value={formData.synopsis}
          onChange={handleChange}
          className="input input-bordered focus:outline-none"
        />
        <input
          name="version"
          id="version"
          placeholder="Version"
          value={formData.version}
          onChange={handleChange}
          className="input input-bordered focus:outline-none"
        />
        <input
          name="sequence"
          id="sequence"
          placeholder="Sequence"
          value={formData.sequence}
          onChange={handleChange}
          className="input input-bordered focus:outline-none"
        />
      </div>
    </div>
  );
}
