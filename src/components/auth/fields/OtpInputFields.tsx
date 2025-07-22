'use client';

import React from 'react';
import { Stack, TextField } from '@mui/material';
import { Colors } from '@/constants/Color';

interface OtpInputFieldsProps {
  otp: string[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, idx: number) => void;
}

const OtpInpputFields: React.FC<OtpInputFieldsProps> = ({ otp, handleChange }: OtpInputFieldsProps) => {
  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      {otp.map((digit, idx) => (
        <TextField
          key={idx}
          id={`otp-input-${idx}`}
          value={digit}
          onChange={(e) => handleChange(e, idx)}
          inputProps={{
            maxLength: 1,
            style: {
              textAlign: 'center',
              fontSize: '2rem',
              width: '3rem',
              height: '3.2rem',
              borderRadius: 8,
              background: Colors.PRIMARY_LIGHT,
            },
          }}
          sx={{
            '& input': {
              p: 0,
              textAlign: 'center',
              fontWeight: 700,
              color: Colors.TEXT,
              background: Colors.PRIMARY_LIGHT,
              borderRadius: 2,
            },
          }}
        />
      ))}
    </Stack>
  );
}

export default OtpInpputFields;