import React from "react";
import './notificationpage.style.css';
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/Footer";
import NotificationContainer from "../../components/layouts/notification-container/NotificationContainer";

const NotificationPage = () => {
    return(
        <section>
            <Navbar darkTheme={true} />
            <NotificationContainer />
            <Footer />
        </section>
    )
}

export default NotificationPage;