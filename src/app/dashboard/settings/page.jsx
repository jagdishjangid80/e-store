import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Settings</h1>
      <p className="mt-4 text-gray-600">
        Manage your account settings and preferences.
      </p>
      {/* Additional settings content can go here */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Account Settings</h2>
        <p className="mt-2 text-gray-600">
          Update your profile, change password, and manage security settings.
        </p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Profile</h3>
          <p className="mt-2 text-gray-600">
            Edit your personal information and preferences.
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Security</h3>
          <p className="mt-2 text-gray-600">
            Manage your password and two-factor authentication settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
