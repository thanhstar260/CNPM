import React, { useContext } from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/Footer";
import UserProfile from "../../components/layouts/user-profile/UserProfile";
import { UserContext } from "../../App";

const UserProfilePage = () => {
  const authenticatedUser = useContext(UserContext);

  return (
    <section>
      <Navbar darkTheme={true} />
      {authenticatedUser ? (
        <UserProfile user={authenticatedUser} />
      ) : (
        <p>Please log in to view your profile.</p>
      )}
      <Footer />
    </section>
  );
};

export default UserProfilePage;

