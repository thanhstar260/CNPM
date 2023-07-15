import React, { useContext } from "react";
import { NotificationContext } from '../../../App';
import './notification-container.style.css'

const NotificationContainer = () => {
  const { notifications } = useContext(NotificationContext);
  console.log(notifications)

  return (
    <section className="notification-container">
      <div className="container">
        {notifications.length === 0 ? (
          <p className="empty-notification">No notifications available</p>
        ) : (
          <React.Fragment>
            <h2 className="notification-heading">Notifications</h2>

            {notifications.map((notification) => (
              <div key={notification.id} className="notification-card">
                <h3 className="notification-title">Successfully renting request</h3>
                {notification.books.map((book) => (
                  <div key={book.id} className="book-info">
                    <p>BookID: {book.id}</p>
                    <p>Title: {book.title}</p>
                    <p>Author: {book.author}</p>
                  </div>
                ))}
                <p className="notification-message"><span>Total Price: </span>{notification.totalPrice}</p>
                <p className="notification-date"><span>Request Date: </span>{notification.rentDate}</p>
                <p className="notification-date"><span>userID: </span>{notification.user_id}</p>
              </div>
            ))}
          </React.Fragment>
        )}
      </div>
    </section>
  );
};

export default NotificationContainer;

