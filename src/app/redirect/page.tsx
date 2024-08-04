"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const RedirectHandler = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const fetchUserData = async (token: string) => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/auth/google/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const userData = await response.json();
        console.log('User Data:', userData);
        // Handle user data (e.g., store in state, redirect to dashboard, etc.)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const token = Cookies.get('fastapiusersauth'); // Get the token from cookies

    if (token) {
      fetchUserData(token);
    } else {
      console.error('Authorization token not found in cookies');
      router.push('/login'); // Redirect to login if token is not found
    }
  }, [isClient, router]);

  return null; // This component does not render anything
};

export default RedirectHandler;