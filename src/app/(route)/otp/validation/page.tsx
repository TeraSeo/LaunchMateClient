'use client';

import React, { useEffect, useState } from 'react';
import { Box, Paper, Container } from '@mui/material';
import { Colors } from '@/constants/Color';
import size from '@/constants/Size';
import OtpTitleText from '@/components/auth/texts/OtpTitleText';
import { useRouter } from 'next/navigation';
import { NextPage } from 'next';
import OtpForm from '@/components/auth/forms/\bOtpForm';
import RenewOtpButton from '@/components/auth/buttons/RenewOtpButton';
import { verifyToken } from '@/services/TokenService';
import { renewOtp } from '@/services/UserService';

const OtpValidationPage: NextPage = () => {
  const [email, setEmail] = useState('');
  const [cooldown, setCooldown] = useState(0);
  const [feedback, setFeedback] = useState('');

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    } else {
      checkToken(token);
    }
  }, []);

  const checkToken = async (token: string) => {
    const result = await verifyToken(token);
    if (!result.success) {
      router.push('/login');
      return;
    }

    setEmail(result.email!);
  };

  const handleRenewOtp = async () => {
    const result = await renewOtp(email);
    if (result.success) {
      setFeedback('OTP has been resent!');
      setCooldown(60); // 60초 카운트다운 시작
  
      const interval = setInterval(() => {
        setCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setFeedback('Failed to resend OTP. Try again.');
    }
  };  

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: Colors.GRADIENT_PRIMARY,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={12}
          sx={{
            p: { xs: 3, sm: 5, md: 6 },
            borderRadius: { xs: 3, sm: 4, md: 5 },
            background: Colors.BACKGROUND,
            boxShadow: Colors.SHADOW_HEAVY,
            border: `1.5px solid ${Colors.SECONDARY_LIGHT}`,
            minWidth: size.loginPaper.minWidth,
            maxWidth: size.loginPaper.maxWidth,
            mx: 'auto',
          }}
        >
          <OtpTitleText />

          <OtpForm email={email} />
          <RenewOtpButton
                onClick={handleRenewOtp}
                disabled={cooldown > 0}
                cooldown={cooldown}
                feedback={feedback}
            />
        </Paper>
      </Container>
    </Box>
  );
}

export default OtpValidationPage;