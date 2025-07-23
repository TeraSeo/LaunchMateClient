'use client';

import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { verifyOtp } from '@/services/UserService';
import { useRouter } from 'next/navigation';
import OtpVerifyButton from '@/components/auth/buttons/OtpVerifyButton';
import OtpInputFields from '../fields/OtpInputFields';
import AuthErrorText from '../texts/AuthErrorText';

interface ValidationFormProps {
  email: string;
}

const OtpForm: React.FC<ValidationFormProps> = ({ email }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    idx: number
  ) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 1);
    const newOtp = [...otp];
    newOtp[idx] = value;
    setOtp(newOtp);

    if (value && idx < 3) {
      const next = document.getElementById(`otp-input-${idx + 1}`);
      if (next) (next as HTMLInputElement).focus();
    }
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const otpCode = otp.join('');
    if (otpCode.length !== 4) {
      setError('Please enter the 4-digit code.');
      return;
    }

    const result = await verifyOtp({ email, code: otpCode });
    setLoading(false);

    if (result.success) {
      const expires = new Date();
      expires.setDate(expires.getDate() + 3);

      document.cookie = `token=${result.token}; path=/; expires=${expires.toUTCString()}; secure; samesite=strict`;

      await router.push('/dashboard');

      setTimeout(() => {
        location.reload();
      }, 3000);
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} alignItems="center">
        <OtpInputFields otp={otp} handleChange={handleChange} />

        <AuthErrorText error={error} />

        <OtpVerifyButton loading={loading} />
      </Stack>
    </form>
  );
}

export default OtpForm;