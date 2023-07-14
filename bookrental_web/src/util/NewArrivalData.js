import { ref, onValue } from 'firebase/database';
import moment from 'moment';
import database from '../firebase/database';

const fetchNewArrivalData = () => {
  return new Promise((resolve, reject) => {
    const bookData = [];

    onValue(ref(database, 'Books'), (snapshot) => {
      const books = snapshot.val();

      const sortedBooks = Object.keys(books).sort((a, b) => {
        const dateA = moment(books[a].createdDate, 'DD/MM/YY');
        const dateB = moment(books[b].createdDate, 'DD/MM/YY');
        return dateB.diff(dateA);
      });

      const top15Books = sortedBooks.slice(0, 30);

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
};

export default fetchNewArrivalData;
