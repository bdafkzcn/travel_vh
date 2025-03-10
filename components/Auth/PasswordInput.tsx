"use client";
import { Eye, EyeOff } from 'lucide-react';
import React, { ChangeEvent, useState } from 'react'

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  inputClassName?: string;
  labelClassName?: string;
  iconClassName?: string;
}

const PasswordInput = ({
  name,
  label,
  placeholder='Enter password',
  value,
  onChange,
  inputClassName="",
  labelClassName="",
  iconClassName=""
}:Props) => {

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () =>{
      setShowPassword(!showPassword);
    };

  return (
    <>
    {label && (
      <label className={`font-semibold mb-2 block text-orange-500 ${labelClassName}`}>
        {label}
      </label>
    )}
    <div className='relative'>
      <input 
      type={showPassword ? "text" : "password"} 
      placeholder={placeholder} 
      value={value}
      name= {name} 
      onChange={onChange} 
      className={`px-2 py-4 bg-gray-50 border border-gray-300 rounded-lg h-10 w-full outline-none focus:ring-2 focus:ring-rose-500 ${inputClassName}`}
      />
      
    <button 
      type="button" 
      onClick={togglePasswordVisibility} 
      className={`absolute outline-none right-3 top-3 p-0 ${iconClassName}`}>
      {showPassword ? (
        <Eye className='h-4 w-4' />
      ) : (
        <EyeOff className='h-4 w-4' />
      )}
    </button>
    </div>
    </>
 
  );
};

export default PasswordInput
