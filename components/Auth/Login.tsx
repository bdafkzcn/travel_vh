"use client";
import React, {ChangeEvent, FormEvent, useState} from 'react'
import Image from "next/image"
import PasswordInput from './PasswordInput'
import LoadingButton from '../Helper/LoadingButton'
import { BASE_API_URL } from '@/server';
import { handleAuthRequest } from '../utils/apiRepuest';
import axios from "axios";
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '@/store/authSlice';
import { useRouter } from 'next/router';

interface FormData {
  userId: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData> ({
    userId: "",
    password:"",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit= async(e: FormEvent) => {
    e.preventDefault();
    const loginReq = async () => 
      await axios.post(`${BASE_API_URL}/users/login`, formData, {
        withCredentials: true,
      });

      const result = await handleAuthRequest(loginReq, setIsLoading);

      if(result) {
        dispatch(setAuthUser(result.data.data.user));
        toast.success(result.data.message);
        router.push("/");
      }
    
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
        {/*banner*/}
        <div className="lg:col-span-4 h-screen hidden lg:block">
          <Image 
            src="/images/signIn.jpg"
            alt="login"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
        {/*form*/}
        <div className="lg:col-span-3 flex flex-col items-center justify-center h-screen ">
        <h1 className='font-bold text-xl sm:text-2xl text-left uppercase mb-8'>
          <span className='text-rose-600'> Đăng nhập</span>
        </h1>
        <form className='block w-[90%] sm:w-[80%] md:w-[60%] lg:w-[90%] xl:w-[80%]'>
          <div className='mb-4'>
            <label htmlFor='name' className='font-semibold mb-2 block'>
              Tên đăng nhập
            </label>
            <input 
              type="text"
              name='username'
              placeholder='Nhập tên đăng nhập'
              className='px-4 py-3 bg-gray-200 rounded-lg w-full block outline-none'
              value={formData.userId}
              onChange={handleChange}

           />
          </div>

          <div className='mb-4'>
            < PasswordInput 
              label='Mật khẩu' 
              name='password' 
              placeholder='Nhập mật khẩu' 
              value={formData.password}
              onChange={handleChange}
              />
          </div>
          <h1 className='mt-4 text-lg text-gray-800'> Nhớ tài khoản</h1>
          <LoadingButton 
             size={"lg"} 
             className='w-full mt-3' 
             type="submit" 
             isLoading={isLoading}
             >Đăng nhập</LoadingButton>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login
