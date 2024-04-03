import HeroFormComponent from "../../components/HeroFormComponent";

import React, { useState } from "react";
import axios from "axios";
import Success from "../../components/statusHandling/Success";
import Error from "../../components/statusHandling/Error";

export default function UserLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState();

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/user/login", {
        username,
        password,
      });
      setStatus("success");
      setMessage(response.data.message);
      localStorage.setItem("userToken", response.data.token);
      setTimeout(() => {
        window.location.href = "/user/profile";
      }, 4000);
    } catch (err) {
      setStatus("failed");
      setMessage(err.response.data.message);
      console.log("Invalid credentials. Please try again.");
      setTimeout(() => {
        setStatus(null);
      }, 4000);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(/assets/bg.jpeg)`,
      }}
    >
      <div className="bg-opacity-60"></div>
      <div className="text-neutral-content flex w-full">
        <div className="w-1/2 h-screen flex justify-center items-center">
          <div>
            <HeroFormComponent
              title="Welcome Back!"
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              formData={formData}
              button="Login"
              message="Don't have an account ? Register Now"
              toPath="/user/register"
            />
            {status === "success" ? <Success message={message} /> : <></>}
            {status === "failed" ? <Error message={message} /> : <></>}
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center h-screen">
          <img
            src={`/assets/auth/Login.svg`}
            className="w-4/5 mx-auto"
            alt="Music Scene"
          />
        </div>
      </div>
    </div>
  );
}
