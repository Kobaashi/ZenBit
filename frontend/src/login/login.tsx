import anothercity  from "../assets/AnotherCity.png"
import { useState } from "react";
import {
    Link,
} from 'react-router-dom';

export function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setError("");
    console.log("Logging in with:", { email, password });

  };

  return(<>
    <div className="nav-menu bg-[#172234] w-full h-[80px]"></div>
    <div className="container flex">
      <div className="container-image">
      <img src={anothercity} alt="city" className="w-[900px] h-full"/>
      </div>
      <div className="container-form mx-[100px] my-[335px] w-[400px]">
          <h2 className="font-Merriweather font-bold text-[28px] leading-[34px] mb-[20px]">Login</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h3 className="font-Merriweather font-bold text-[14px] leading-[20px] -mb-[10px]">Email</h3>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B29F7E]"
            />
             <h3 className="font-Merriweather font-bold text-[14px] leading-[20px] -mb-[10px]">Password</h3>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B29F7E]"
            />
            <p className="text-[#B29F7E] cursor-pointer ml-[240px] mb-[20px] text-center">
              Forget password?
            </p>
            <button
              type="submit"
              className="mt-4 bg-[#B29F7E] text-white py-3 rounded-md font-bold hover:bg-[#172234] hover:text-[#B29F7E] transition"
            >
              Log In
            </button>
          </form>
          <p className="text-gray-300 mt-4 text-center">
            Don't have an account? <span className="text-[#B29F7E] cursor-pointer">
              <Link to="/register">
                Sign Up
              </Link>
            </span>
          </p>
        </div>
    </div>
  </>)
}
