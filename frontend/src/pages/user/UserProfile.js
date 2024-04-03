import React, { useEffect, useState } from "react";
import axios from "axios";
import UserDrawerComponent from "../../components/UserDrawerComponent";

export default function AdminDashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:4000/user/getUser", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);
  if (!localStorage.getItem("userToken")) {
    window.location.href = "/user/login";
    return null;
  }

  const handleLogout = () => {
    if (window.confirm()) {
      localStorage.removeItem("userToken");
      return (window.location.href = "/user/login ");
    }
  };

  return (
    <div>
      <UserDrawerComponent />
      <div className="ml-96">
        <div className="my-10 w-4/5">
          <div className="bg-white overflow-hidden shadow rounded-lg border">
            <div className="px-4 py-5 sm:px-6 flex justify-normal gap-2">
              <div>
                <img
                  src="/assets/user/user-circle.svg"
                  className="w-[50px]"
                ></img>
              </div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  User Profile
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  User Account info
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    username
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user ? user.username : ""}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    password
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user ? user.password : ""}
                  </dd>
                </div>
              </dl>
            </div>
            <hr />
            <div className="flex px-5 py-3 w-1/2 gap-5">
              <button
                className="btn btn-error text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
