'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { userApi } from '@/services/api';


export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await userApi.login(username, password);
      if (response.token) {
        // Lưu token và chuyển hướng
        localStorage.setItem('accessToken', response.token);
        router.push('/'); // hoặc router.push('/admin')
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields here */}
    </form>
  );
}