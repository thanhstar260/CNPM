// import React, { useContext } from 'react';
// import './noti-item-card.style.css';
// import { NotiContext } from '../../../App';
// import { CartContext } from '../../../App';

// const NotiItemCard = ({ notiData }) => {

//     const { NotiItems, setNotiItems } = useContext(NotiContext);
//     const { cartItems, totalAmount } = useContext(CartContext);

//     const handleRemove = () => {
//         console.log(notiData.id);
//         setNotiItems(NotiItems.filter((item) => item.id !== notiData.id));
//     }

//     return (
//         <section className="noti-item">
//             <div className="noti-item-content-container">
//                 <h2>Gửi yêu cầu thuê thành công</h2>
//                 <h3>Ngày: </h3>
//                 <h2>{notiData.book_name}</h2>
//                 <p>{notiData.author}</p>
//                 <h3 className="total-price">{totalAmount}</h3>

//                 <button onClick={handleRemove} className='delete_btn'>Xóa</button>
//             </div>
//         </section>
//     )
// }

// export default NotiItemCard;