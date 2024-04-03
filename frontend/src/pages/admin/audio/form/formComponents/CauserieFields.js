import React from 'react';

export default function CauserieFields(props) {
  return (
    <div className='w-3/5 mx-auto flex flex-col text-center gap-5'>
      <input
        type='text'
        name="speaker"
        placeholder='Speaker'
        onChange={props.handleChange}
        className='input input-bordered focus:outline-none'
      />
      <input
        type='text'
        name="causerie_reciter"
        placeholder='Causerie Reciter'
        onChange={props.handleChange}
        className='input input-bordered focus:outline-none'

      />
      <input
        type='text'
        name="causerie_location"
        placeholder='Causerie Location'
        onChange={props.handleChange}
        className='input input-bordered focus:outline-none'
      />
    </div>
  );
}
