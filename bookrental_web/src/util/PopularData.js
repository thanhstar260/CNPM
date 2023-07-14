import { ref, onValue } from 'firebase/database';
import moment from 'moment';
import database from '../firebase/database';

const fetchPopularData = () => {
  return new Promise((resolve, reject) => {
    const rentCount = {};
    const bookData = [];

    onValue(ref(database, 'Order'), (snapshot) => {
      const orderData = snapshot.val();

      for (const orderId in orderData) {
        const order = orderData[orderId];
        const orderStatus = order.order_status;

        if (orderStatus === 'done') {
          const bookIds = order.book_id;
          bookIds.forEach((bookId) => {
            if (rentCount[bookId]) {
              rentCount[bookId] += 1;
            } else {
              rentCount[bookId] = 1;
            }
          });
        }
      }

      const top15Books = Object.keys(rentCount)
        .sort((a, b) => rentCount[b] - rentCount[a])
        .slice(0, 30);

      onValue(ref(database, 'Books'), (snapshot) => {
        const books = snapshot.val();
        top15Books.forEach((bookId) => {
          if (books[bookId]) {
            const book = {
              id: bookId,
              ...books[bookId],
              createdDate: moment().format('DD/MM/YY'),
            };
            bookData.push(book);
          }
        });

        resolve(bookData);
      });
    });
  });
};

export default fetchPopularData;
