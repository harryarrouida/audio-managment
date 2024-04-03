import React from 'react';

export default function EmissionFields(props) {
  return (
    <div className='w-3/5 mx-auto flex flex-col text-center gap-5'>
      <input
        type='text'
        name="presenter"
        placeholder='Presenter'
        onChange={props.handleChange}
        className='input input-bordered focus:outline-none'

      />
      <input
        type='text'
        name="preparation"
        placeholder='Preparation'
        onChange={props.handleChange}
        className='input input-bordered focus:outline-none'

      />
      <input
        type='text'
        name="format"
        placeholder='Format'
        onChange={props.handleChange}
        className='input input-bordered focus:outline-none'

      />
      <input
        type='text'
        name="version"
        placeholder='Version'
        onChange={props.handleChange}
        className='input input-bordered focus:outline-none'
      />
    </div>
  );
}
