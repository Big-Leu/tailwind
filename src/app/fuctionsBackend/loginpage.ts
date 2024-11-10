import React from 'react';

const URL = 'http://localhost:8000'

export const handleLoginGoogle = async (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
  e.preventDefault(); // Prevent default action

  try {
    const response = await fetch(`${URL}/api/v1/auth/google/authorize`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const authorizationUrl = data.authorization_url;
    if (authorizationUrl) {
      window.location.href = authorizationUrl;
      console.log('Redirecting to:', authorizationUrl);
    } else {
      throw new Error('Authorization URL not found in response');
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
};