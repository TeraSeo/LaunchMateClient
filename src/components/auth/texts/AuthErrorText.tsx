'use client';

import React from 'react';
import { Typography } from '@mui/material';
import { Colors } from '@/constants/Color';

interface AuthErrorTextProps {
  error: string | null;
}

const AuthErrorText: React.FC<AuthErrorTextProps> = ({ error }) => {
  if (!error) return null;

  return (
    <Typography
      sx={{
        color: Colors.ERROR,
        fontWeight: 500,
        fontSize: { xs: '0.92rem', sm: '1rem' },
        textAlign: 'center',
        mt: 0.5,
      }}
    >
      {error}
    </Typography>
  );
};

export default AuthErrorText;