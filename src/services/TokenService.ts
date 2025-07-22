import axios from 'axios';

const verifyToken = async (token: string): Promise<{ success: boolean; email?: string; verified?: boolean }> => {
    try {
      const response = await axios.get('http://localhost:8080/api/tokens/verify', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.valid) {
        return {
          success: true,
          email: response.data.payload.email,
          verified: response.data.payload.verified,
        };
      }

      return { success: false };
    } catch {
      return { success: false };
    }
};

const getTokenCookie = (): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; token=`);
  if (parts.length === 2) return parts.pop()!.split(';').shift()!;
  return null;
};

export { verifyToken, getTokenCookie };