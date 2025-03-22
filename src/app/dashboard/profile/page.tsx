"use client";

import { useAppDispatch } from "@/hooks/reduxHooks";
import { logout } from "@/store/slices/authSlices";
import { TUserData } from "@/types/user.type";
import { Avatar } from "antd";
import { useEffect, useState } from "react";

export default function Profile() {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<TUserData | null>(null);
  // console.log(user);

  useEffect(() => {
    const userParams = localStorage.getItem("user");
    if (userParams) {
      setUser(JSON.parse(userParams));
    }
  }, []);

  if (user === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-500">User not found</p>
      </div>
    )
  };

  const userData = {
    name: {
      firstname: user.name.firstname,
      lastname: user.name.lastname,
    },
    username: user.username,
    email: user.email,
    phone: user.phone,
    address: {
      street: user.address.street,
      city: user.address.city,
      zipcode: user.address.zipcode,
      country: "Vietnam",
    },
    bio: "A passionate developer who loves coding and exploring new technologies.",
    avatar: "https://via.placeholder.com/150", // URL ảnh đại diện giả lập
  };

  // Hàm xử lý logout (có thể thay bằng logic thật)
  const handleLogout = () => {
    console.log("User logged out");
    dispatch(logout());
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Phần đầu với ảnh đại diện và tên */}
        <div className="flex items-center p-6 space-x-6 border-b border-gray-200">
          <Avatar
            src={"https://static.thenounproject.com/png/363640-200.png"}
            size={100}
            alt="Avatar"
          />
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              {userData.name.firstname} {userData.name.lastname}
            </h1>
            <p className="text-gray-600 text-sm">@{userData.username}</p>
          </div>
        </div>

        {/* Thông tin chi tiết */}
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Account Details
          </h2>
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-2">
              <span className="text-sm font-medium text-gray-600">Email</span>
              <span className="text-gray-800">{userData.email}</span>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-2">
              <span className="text-sm font-medium text-gray-600">Phone</span>
              <span className="text-gray-800">{userData.phone}</span>
            </div>

            {/* Username */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-2">
              <span className="text-sm font-medium text-gray-600">
                Username
              </span>
              <span className="text-gray-800">{userData.username}</span>
            </div>

            {/* Address */}
            <div className="flex items-start justify-between border-b border-gray-200 pb-2">
              <span className="text-sm font-medium text-gray-600">Address</span>
              <span className="text-gray-800 text-right">
                {userData.address.street}, {userData.address.city},{" "}
                {userData.address.zipcode}, {userData.address.country}
              </span>
            </div>

            {/* Bio */}
            <div className="flex items-start justify-between">
              <span className="text-sm font-medium text-gray-600">Bio</span>
              <span className="text-gray-800 text-right max-w-xs">
                {userData.bio}
              </span>
            </div>
          </div>
        </div>

        {/* Nút hành động */}
        <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-[#005f73] transition-colors"
          >
            Logout
          </button>
          <button className="px-4 py-2 bg-[#007185] text-white text-sm font-medium rounded-md hover:bg-[#005f73] transition-colors">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
// hello chu
