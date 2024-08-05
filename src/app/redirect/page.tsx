"use client"
import { useEffect } from 'react';

const RedirectHandler = () => {
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/whoami', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // Include cookies in the request
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        handleResponse(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleResponse = (response: any) => {
    if (response.status === "FETCHED" && response.result.length > 0) {
      const user = response.result[0];
      const name = user.name;
      const email = user.email;
      const picture = user.picture;

      // Store user details in session storage
      sessionStorage.setItem('user_name', name);
      sessionStorage.setItem('user_email', email);
      sessionStorage.setItem('user_picture', picture);

      // Redirect to the dashboard without user details in the URL
      window.location.href = '/dashboard';
    } else {
      console.error('Invalid response or no user data found');
    }
  };

  return null; // This component does not render anything
};

export default RedirectHandler;