import HeroFormComponent from "../../components/HeroFormComponent";

import React, { useState } from "react";
import axios from "axios";
import Success from "../../components/statusHandling/Success";
import Error from "../../components/statusHandling/Error";

export default function UserRegister() {
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
      const response = await axios.post("http://localhost:4000/user/register", {
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
      setStatus("failed")
      setMessage(err.message);
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
              title="Register Now!"
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              formData={formData}
              button="Register"
              message="Already have an account ? Login Now"
              toPath="/user/login"
            />
            {status === "success" ? <Success message={message} /> : <></>}
            {status === "failed" ? <Error message={message} /> : <></>}
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center h-screen">
          <img
            src={`/assets/auth/register.svg`}
            className="w-4/5 mx-auto"
            alt="Music Scene"
          />
        </div>
      </div>
    </div>
  );
}
