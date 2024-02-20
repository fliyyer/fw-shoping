import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const useLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('user');
    if (!token) {
      navigate('/login');
    }
  });
};
