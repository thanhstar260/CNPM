import React, {useContext} from "react";
import './notification-container.style.css';
import { NotiContext } from '../../../App';
import NotiItemCard from "../../cards/noti-item-card/NotiItemCard";

const NotificationContainer = () => {
    const { NotiItems, countNoti } = useContext(NotiContext);

    return (
        <section className="notification-container">
            <div className="container">
                {countNoti === 0 ? (
                    <h2>No notification</h2>
                ):(
                    <React.Fragment>
                        <h2>Notification</h2>
                        {NotiItems.map((item) => (
                            <NotiItemCard key={item.id} notiData={item} />
                        ))}

                    </React.Fragment>
                )}
            </div>
        </section>
    )
}

export default NotificationContainer;