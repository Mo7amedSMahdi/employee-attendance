// LoginForm.tsx

import React, { useState } from "react";
import { LoginCredentials } from "../types/AuthTypes";
import { login } from "../services/AuthenticationService";
import Button from "@/ui/components/Button";
import TextField from "@/ui/components/TextField";

const LoginForm: React.FC = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    usernameOrEmail: "",
    password: "",
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(credentials);
      // Handle successful login (e.g., redirect user)
      console.log("Login successful");
    } catch (error) {
      // Handle login error (e.g., display error message)
      console.error("Login failed:", error.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={handleLogin}
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <input
        type="text"
        name="usernameOrEmail"
        placeholder="Username or Email"
        value={credentials.usernameOrEmail}
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
      />
      <br />
      <Button type="submit">Login</Button>


        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                <TextField label="Your email" placeholder="test@dot.com"/>
                <TextField type="password" label="Your password" placeholder="••••••••"/>
                
                
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                </div>
            </form>
        </div>

    </form>
  );
};

export default LoginForm;
