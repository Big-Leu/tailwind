"use client"
import { useEffect, useState } from 'react';
import DotLoader from "react-spinners/DotLoader";

const URL = 'http://localhost:8000';
const RedirectHandler = () => {
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#34D399");
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${URL}/api/v1/whoami`, {
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
        console.log('User data:', data);
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

  return (
    <div className="flex justify-center items-center h-screen">
      {loading && <div className="sweet-loading">
    
      <DotLoader
        color={color}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>}
    </div>
  );
};

export default RedirectHandler;