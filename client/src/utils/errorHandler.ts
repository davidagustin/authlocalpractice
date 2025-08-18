import { ApiError } from '../types';

export const handleApiError = (error: any): string => {
  if (error.response?.data?.errors) {
    return error.response.data.errors.map((err: any) => err.msg).join(', ');
  }
  return error.response?.data?.message || 'An error occurred';
};
