"use client";

import { useState } from "react";

export default function Profile() {
  // Dữ liệu tĩnh giả lập thông tin người dùng
  const userData = {
    name: {
      firstname: "Kien",
      lastname: "Pham Trung",
    },
    username: "KienPT",
    email: "kienpt@example.com",
    phone: "0123-456-789",
    address: {
      street: "123 Main Street",
      city: "Hanoi",
      zipcode: "100000",
      country: "Vietnam",
    },
    bio: "A passionate developer who loves coding and exploring new technologies.",
    avatar: "https://via.placeholder.com/150", // URL ảnh đại diện giả lập
  };

  const [username, setUsername] = useState(userData.username);

  // Hàm xử lý logout (có thể thay bằng logic thật)
  const handleLogout = () => {
    console.log("User logged out");
    // Ví dụ: Chuyển hướng về trang login sau khi logout
    // window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Phần đầu với ảnh đại diện và tên */}
        <div className="flex items-center p-6 border-b border-gray-200">
          <img
            src={userData.avatar}
            alt="Avatar"
            className="w-20 h-20 rounded-full border border-gray-300 object-cover mr-4"
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
          <h2 className="text-lg font-medium text-gray-900 mb-4">Account Details</h2>
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
              <span className="text-sm font-medium text-gray-600">Username</span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="text-gray-800 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 w-1/2 text-right"
                disabled // Bỏ disabled nếu muốn chỉnh sửa
              />
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
              <span className="text-gray-800 text-right max-w-xs">{userData.bio}</span>
            </div>
          </div>
        </div>

        {/* Nút hành động */}
        <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-[#007185] text-white text-sm font-medium rounded-md hover:bg-[#005f73] transition-colors"
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