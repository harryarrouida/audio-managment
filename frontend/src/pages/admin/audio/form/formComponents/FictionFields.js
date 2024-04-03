import React from 'react';

export default function FictionFields(props) {
  return (
    <div className='w-3/5 mx-auto flex flex-col text-center gap-5'>
      <input
        type='text'
        name='author'
        placeholder='Author'
        onChange={props.handleChange}
        className='input input-bordered focus:outline-none'

      />
      <input
        type='text'
        name='actor'
        placeholder='Actor'
        onChange={props.handleChange}
        className='input input-bordered focus:outline-none'

      />
      <input
        type='text'
        name='fiction_writer'
        placeholder='Fiction Writer'
        onChange={props.handleChange}
        className='input input-bordered focus:outline-none'

      />
      <input
        type='text'
        name='adaptation'
        placeholder='Adaptation'
        onChange={props.handleChange}
        className='input input-bordered focus:outline-none'

      />
    </div>
  );
}
