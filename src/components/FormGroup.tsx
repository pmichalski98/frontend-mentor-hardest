import React from "react";

interface FgProps {
  label: string;
  placeholder: string;
}
const FormGroup = ({ label, placeholder }: FgProps) => {
  return (
    <>
      <label className="text-primary-marineBlue w-full " htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        placeholder={placeholder}
        type="text"
        className="w-full outline outline-1 mt-2 mb-6 rounded font-medium outline-secondary-coolGray/50 py-2 px-4"
      />
    </>
  );
};

export default FormGroup;
