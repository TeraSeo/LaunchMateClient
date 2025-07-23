import { CreateUserForm, CreateUserResult, UserStatResult, ValidateUserForm, ValidateUserResult, VerifyOtpForm, VerifyOtpResult } from '@/constants/Form';
import { serverRoute } from '@/constants/Route';
import axios from 'axios';

const createUser = async (form: CreateUserForm): Promise<CreateUserResult> => {
  try {
    await axios.post(`${serverRoute}/api/users/create`, form);
    return { success: true };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 409) {
        // Email duplicated error
        return { success: false, reason: 'duplicate' };
      }
      return { success: false, reason: 'server' };
    } else {
      return { success: false, reason: 'network' };
    }
  }
};

const validateUser = async (form: ValidateUserForm): Promise<ValidateUserResult> => {
    try {
      const response = await axios.post(`${serverRoute}/api/users/validate`, form);

      if (response.data.success === true) {
        return { success: true, token: response.data.token };
      } else {
        return { success: false };
      }
    } catch {
      return { success: false };
    }
};

const renewOtp = async (email: string) => {
    try {
      await axios.post(`${serverRoute}/api/users/renew/otp`, { email });
      return { success: true };
    } catch (error) {
      console.error('Failed to renew OTP:', error);
      return { success: false };
    }
};

const verifyOtp = async (form: VerifyOtpForm): Promise<VerifyOtpResult> => {
    try {
      const response = await axios.post(`${serverRoute}/api/users/verify/otp`, form);

      if (response.data.success === true) {
        return { success: true, token: response.data.token };
      } else {
        return { success: false };
      }
    } catch {
      return { success: false };
    }
};

const getUserStat = async (token: string): Promise<UserStatResult> => {
  try {
    const response = await axios.get(`${serverRoute}/api/users/get/stats`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    });

    if (response.data.success === true) {
      return { success: true, userStat: response.data.userStat };
    } else {
      return { success: false };
    }
  } catch {
    return { success: false };
  }
};

export { createUser, validateUser, renewOtp, verifyOtp, getUserStat };