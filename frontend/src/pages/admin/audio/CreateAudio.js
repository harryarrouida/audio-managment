import React from "react";
import AdminDrawerComponent from "../../../components/AdminDrawerComponent";
import Form from "./form/Form";

export default function CreateAudio() {
  const token = localStorage.getItem("adminToken");
  if (!token) {
    window.location.href = "/admin/login";
    return null;
  }
  return (
    <div className="flex flex-between h-screen">
      <AdminDrawerComponent />
      <div className="w-3/5 ml-96">
        <div className="my-10 uppercase text-2xl text-center">Create An Audio</div>
        <Form />
      </div>
    </div>
  );
}
