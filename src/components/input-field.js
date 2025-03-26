import React from 'react';

const InputField = ({ label, id, type = "text", maxLength = 50, placeholder, required = true }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-semibold text-gray-800 mt-4"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        maxLength={maxLength}
        className="duration-500 bg-gray-50 rounded-sm border focus:ring-1 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full h-11 p-2.5 outline-none"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputField;