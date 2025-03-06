"use client";
import React, { ChangeEvent, FormEvent, useState } from 'react';
import Image from "next/image";
import PasswordInput from './PasswordInput';
import LoadingButton from '../Helper/LoadingButton';
import { BASE_API_URL } from '@/server';
import { handleAuthRequest } from '../utils/apiRepuest';
import axios from "axios";
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '@/store/authSlice';
import { useRouter } from 'next/navigation';

interface FormData {
  userId: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    userId: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const loginReq = async () =>
      await axios.post(`${BASE_API_URL}/users/login`, formData, {
        withCredentials: true,
      });

    const result = await handleAuthRequest(loginReq, setIsLoading);

    if (result) {
      dispatch(setAuthUser(result.data.data.user));
      toast.success(result.data.message);
      router.push("/");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-12 shadow-lg rounded-lg overflow-hidden">
        {/* Banner */}
        <div className="lg:col-span-4 h-screen hidden lg:block">
          <Image src="/images/signIn.jpg" alt="login" width={1000} height={1000} className="w-full h-full object-cover" />
        </div>
        
        {/* Form */}
        <div className="lg:col-span-3 flex flex-col items-center justify-center p-8 w-full">
          <h1 className='text-2xl font-bold text-rose-600 uppercase mb-6 text-center'>Đăng nhập</h1>
          
          <form onSubmit={handleSubmit} className='w-full max-w-sm space-y-6'>
            <div>
              <label htmlFor='userId' className='font-semibold mb-2 block'>Tên đăng nhập</label>
              <input 
                type="text"
                name='userId'
                placeholder='Nhập tên đăng nhập'
                className='px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg w-full outline-none focus:ring-2 focus:ring-rose-500'
                value={formData.userId}
                onChange={handleChange}
              />
            </div>

            <div>
              <PasswordInput 
                label='Mật khẩu' 
                name='password' 
                placeholder='Nhập mật khẩu' 
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className='flex justify-between items-center text-sm'>
              <span></span>
              <h2 className='text-red-600 font-semibold cursor-pointer'>Quên mật khẩu?</h2>
            </div>

            <LoadingButton 
              size={"lg"} 
              className='w-full bg-orange-500 hover:bg-orange-600 font-bold text-center rounded-lg px-4 py-3 transition'
              type="submit" 
              isLoading={isLoading}
            >
              Đăng nhập ngay
            </LoadingButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
