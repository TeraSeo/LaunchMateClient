'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Stack } from '@mui/material';
import UsernameField from '@/components/auth/fields/UsernameField';
import EmailField from '@/components/auth/fields/EmailField';
import PasswordField from '@/components/auth/fields/PasswordField';
import RegisterButton from '@/components/auth/buttons/RegisterButton';
import AuthErrorText from '@/components/auth/texts/AuthErrorText';
import { createUser } from '@/services/UserService';

const RegisterForm: React.FC = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const result = await createUser(form);
    setLoading(false);

    if (result.success) {
      router.push('/login');
    } else if (result.reason === 'duplicate') {
      setError('An account with this email already exists.');
    } else {
      setError('Failed to register. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={{ xs: 2, sm: 3 }}>
        <UsernameField username={form.username} handleChange={handleChange} />
        <EmailField email={form.email} handleChange={handleChange} />
        <PasswordField password={form.password} handleChange={handleChange} />

        <AuthErrorText error={error} />

        <RegisterButton loading={loading} />
      </Stack>
    </form>
  );
};

export default RegisterForm;