
import React, { useContext } from 'react';
import './notification-container.style.css';
import { NotificationContext } from '../../../App';

const NotificationContainer = ({ user }) => {
  const { notifications } = useContext(NotificationContext);
  const { uid, email,} = user;
  console.log(notifications);

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
                    <p>Days: {book.quantity ? book.quantity : 1}</p>
                  </div>
                ))}
                <p className="notification-message"><span>Total Price: </span>{notification.totalPrice}</p>
                <p className="notification-date"><span>Request Date: </span>{notification.rentDate}</p>
                <p className="notification-date"><span>User Email: </span>{email}</p>
              </div>
            ))}
          </React.Fragment>
        )}
      </div>
    </section>
  );
};

export default NotificationContainer;
