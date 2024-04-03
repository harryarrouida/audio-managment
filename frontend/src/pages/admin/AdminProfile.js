import React, { useEffect, useState } from "react";
import AdminDrawerComponent from "../../components/AdminDrawerComponent";
import axios from "axios";

export default function AdminProfile() {
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/admin/getAdmin",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
            },
          }
        );
        setAdminData(response.data);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    fetchAdmin();
  }, []);
  if (!localStorage.getItem("adminToken")) {
    window.location.href = "/admin/login";
    return null;
  }

  const handleLogout = () => {
    if (window.confirm()) {
      localStorage.removeItem("adminToken");
      return (window.location.href = "/admin/login ");
    }
  };

  return (
    <div>
      <AdminDrawerComponent />
      <div className="ml-96">
        <div className="my-10 w-4/5">
          <div className="bg-white overflow-hidden shadow rounded-lg border">
            <div className="px-4 py-5 sm:px-6 flex justify-normal gap-2">
              <div>
                <img src="/assets/user/user-circle.svg" className="w-[50px]"></img>
              </div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Admin Profile
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Admin Account info
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
                    {adminData ? adminData.username : ""}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    password
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {adminData ? adminData.password : ""}
                  </dd>
                </div>
              </dl>
            </div>
            <hr />
            <div className="flex p-3 w-1/2">
              <button className="btn btn-error text-white" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
