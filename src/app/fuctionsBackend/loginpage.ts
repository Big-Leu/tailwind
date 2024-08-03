

export const handleLoginGoogle = async (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault(); // Prevent default action

  try {
    const response = await fetch('http://localhost:8000/api/v1/auth/google/authorize', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Login successful:', data);
  } catch (error) {
    console.error('Error during login:', error);
  }
};