import React from 'react';

export default function Button({ icon, title, color }) {
  return (
    <button
      type='button'
      class={`appButton flex items-center justify-between rounded-md ${
        color || 'bg-red-700'
      } px-2 py-1.5 md:px-2.5 md:py-2 lg:px-4 lg:py-3  text-white font-light`}
      data-ripple-light='true'
    >
      <span className='text-sm sm: text-md md:text-lg pr-3'>{title}</span>
      {icon}
    </button>
  );
}
