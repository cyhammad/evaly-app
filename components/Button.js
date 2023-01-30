import React from 'react';

export default function Button({
  icon,
  title,
  color,
  className,
  onClick,
  disabled,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type='button'
      className={`${className} appButton flex items-center ${
        icon ? 'justify-between' : 'justify-center'
      } rounded-md ${
        color || 'bg-red-700'
      } px-2 py-1.5 md:px-2.5 md:py-2 lg:px-4 lg:py-3  text-white font-light disabled:bg-gray-700`}
      data-ripple-light='true'
    >
      <span
        className={`text-sm sm: text-md md:text-lg sm:font-medium md:font-semibold ${
          icon ? 'pr-3' : 'pr-0'
        }`}
      >
        {title}
      </span>
      {icon}
    </button>
  );
}
