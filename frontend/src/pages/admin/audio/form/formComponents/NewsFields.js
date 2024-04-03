import React from 'react';

export default function NewsFields(props) {
  return (
    <div className='w-3/5 mx-auto flex flex-col text-center gap-5'>
      <input
        type='text'
        name='commentator'
        placeholder='Commentator'
        onChange={props.handleChange}
        className='input input-bordered focus:outline-none'

      />
      <input
        type='text'
        name='event_location'
        placeholder='Event Location'
        onChange={props.handleChange}
        className='input input-bordered focus:outline-none'

      />
      <input
        type='text'
        name='event_date'
        placeholder='Event Date'
        onChange={props.handleChange}
        className='input input-bordered focus:outline-none'

      />
      <input
        type='text'
        name='sequence'
        placeholder='Sequence'
        onChange={props.handleChange}
        className='input input-bordered focus:outline-none'

      />
    </div>
  );
}
