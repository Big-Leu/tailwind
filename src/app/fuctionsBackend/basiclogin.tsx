import { z } from "zod";
import profile from "../assets/profile.svg";
const URL = 'http://localhost:8000'
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  staySignedIn: z.boolean().optional(),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export const handleLogin = async (data: LoginFormInputs) => {
  try {
    const formData = new FormData();
    formData.set('username', data.email);
    formData.set('password', data.password);
    const response = await fetch(`${URL}/api/v1/auth/jwt/login`, {
      method: 'POST',
      body: formData,
      credentials: 'include', 
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const baseResponse = await fetch(`${URL}/api/v1/userdata`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!baseResponse.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await baseResponse.json();
    console.log('User data:', responseData);
    handleResponse(responseData);
  } catch (error) {
    console.error('Error during login:', error);
  }
};

const handleResponse = (response: any) => {
  console.log('User data:', response);
  if (response && response.userName && response.email) {
    const name = response.userName;
    const email = response.email;
    const picture = response.userProfile || 'https://imgs.search.brave.com/UH-8ZCM_HoREpykPVIgfSMfhVpfHaLhsicc-9tlDubM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDY0MDkz/OTguanBn'; // Replace with actual default profile picture URL

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