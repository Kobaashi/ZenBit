import anothercity  from "../assets/AnotherCity.png"
import { useState } from "react";
import {
    Link,
} from 'react-router-dom';
import { environment } from "../environment/backend";
import { useNavigate } from "react-router-dom";

export function Register() {

  const [user_name, setUser_Name] = useState("");
  const [user_email, setUser_Email] = useState("");
  const [user_password, setUser_Password] = useState("");
  const [error, setError] = useState("");
    const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      try {
        const res = await fetch(`${environment.apiUrl}/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_name, user_email, user_password }),
          credentials: "include",
        });
  
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Login failed");
  
        console.log("Login successful, token:", data.token);
        navigate("/deals")
      } catch (err: any) {
        alert(err.message);
      }
    };

  return(<>
    <div className="nav-menu bg-[#172234] w-full h-[80px]"></div>
    <div className="container flex">
      <div className="container-image">
      <img src={anothercity} alt="city" className="w-[900px] h-full"/>
      </div>
      <div className="container-form mx-[100px] my-[335px] w-[400px]">
          <h2 className="font-Merriweather font-bold text-[28px] leading-[34px] mb-[20px]">Register</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h3 className="font-Merriweather font-bold text-[14px] leading-[20px] -mb-[10px]">Name</h3>
            <input
              type="text"
              placeholder="User Name"
              value={user_name}
              onChange={(e) => setUser_Name(e.target.value)}
              className="p-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B29F7E]"
            />
            <h3 className="font-Merriweather font-bold text-[14px] leading-[20px] -mb-[10px]">Email</h3>
            <input
              type="email"
              placeholder="Email"
              value={user_email}
              onChange={(e) => setUser_Email(e.target.value)}
              className="p-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B29F7E]"
            />
            <h3 className="font-Merriweather font-bold text-[14px] leading-[20px] -mb-[10px]">Password</h3>
            <input
              type="password"
              placeholder="Password"
              value={user_password}
              onChange={(e) => setUser_Password(e.target.value)}
              className="p-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B29F7E]"
            />
            <p className="text-[#B29F7E] cursor-pointer ml-[240px] mb-[20px] text-center">
              Forget password?
            </p>
            <button
              type="submit"
              className="mt-4 bg-[#B29F7E] text-white py-3 rounded-md font-bold hover:bg-[#172234] hover:text-[#B29F7E] transition"
            >
              Sign In
            </button>
          </form>
          <p className="text-gray-300 mt-4 text-center">
            Already have an account? <span className="text-[#B29F7E] cursor-pointer">
              <Link to="/login">
                Log In
              </Link>
            </span>
          </p>
        </div>
    </div>
  </>)
}
