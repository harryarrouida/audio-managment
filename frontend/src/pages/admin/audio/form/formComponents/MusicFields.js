import React from 'react';

export default function MusicFields(props) {
  return (
    <div className='w-3/5 mx-auto flex flex-col text-center gap-5'>
      <input
        type='text'
        name='singer'
        placeholder='Singer'
        onChange={props.handleChange}
        className='input input-bordered focus:outline-none'

      />
      <input
        type='text'
        name='interpreter'
        placeholder='Interpreter'
        onChange={props.handleChange}
        className='input input-bordered focus:outline-none'

      />
      <input
        type='text'
        name='composer'
        placeholder='Composer'
        onChange={props.handleChange}
        className='input input-bordered focus:outline-none'

      />
      <input
        type='text'
        name='music_writer'
        placeholder='Music Writer'
        text='Music Writer'
        onChange={props.handleChange}
        className='input input-bordered focus:outline-none'

      />
      <input
        type='text'
        name='musical_genre'
        placeholder='Musical Genre'
        onChange={props.handleChange}
        className='input input-bordered focus:outline-none'

      />
      <input
        type='text'
        name='lyrics'
        placeholder='Lyrics'
        onChange={props.handleChange}
        className='input input-bordered focus:outline-none'

      />
      <input
        type='text'
        name='orchestra'
        placeholder='Orchestra'
        onChange={props.handleChange}
        className='input input-bordered focus:outline-none'

      />
      <input
        type='text'
        name='distribution'
        placeholder='Distribution'
        onChange={props.handleChange}
        className='input input-bordered focus:outline-none'

      />
    </div>
  );
}
