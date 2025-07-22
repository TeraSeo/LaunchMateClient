'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Stack } from '@mui/material';
import EmailField from '@/components/auth/fields/EmailField';
import PasswordField from '@/components/auth/fields/PasswordField';
import LoginButton from '@/components/auth/buttons/LoginButton';
import { validateUser } from '@/services/UserService';
import AuthErrorText from '@/components/auth/texts/AuthErrorText';

const LoginForm: React.FC = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await validateUser(form);
    setLoading(false);

    if (result.success && result.token) {
      localStorage.setItem('token', result.token);
      router.push('/otp/validation');
    } else {
      setError('Failed to login. Please check your credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={{ xs: 2, sm: 3 }}>
        <EmailField email={form.email} handleChange={handleChange} />
        <PasswordField password={form.password} handleChange={handleChange} />
        <AuthErrorText error={error} />
        <LoginButton loading={loading} />
      </Stack>
    </form>
  );
};

export default LoginForm;