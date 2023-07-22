import React from 'react';

const UserProfile = ({ user }) => {
  // Access user information from the "user" prop
  const { uid, email,} = user;

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {uid}</p>
      <p>Email: {email}</p>
      {/* Display any other user information you want */}
    </div>
  );
};

export default UserProfile;
