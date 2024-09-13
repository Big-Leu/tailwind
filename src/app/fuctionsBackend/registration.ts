import { z } from "zod";

const loginSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters long"),
  lastName: z.string().min(2, "Last name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters long"),
  phone: z.string().min(10, "Phone number must be at least 10 characters long"),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export const handleRegister = async (data: LoginFormInputs) => {
  try {
    console.log(data);
    const response = await fetch('http://localhost:8000/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        is_active: true,
        is_superuser: false,
        is_verified: false,
      }),
    });
    console.log(response);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const baseResponse = await fetch('http://localhost:8000/api/v1/Base/register', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: data.firstName,
        lastName: data.lastName,
        mobile: data.phone,
        userEmail: data.email,
      }),
    });

    if (!baseResponse.ok) {
      throw new Error('Network response was not ok');
    }
    window.location.href = '/login';
    // console.log("User registered successfully");
  } catch (error) {
    console.error('Error during registration:', error);
  }
};
