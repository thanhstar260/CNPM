import { ref, onValue } from 'firebase/database';
import moment from 'moment';
import database from '../firebase/Firebase';

const fetchBookData = (callback) => {
  const booksRef = ref(database, 'Books');

  onValue(booksRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const booksArray = Object.keys(data).map((key) => ({ ...data[key], id: key }));
      callback(booksArray);
    } else {
      callback([]);
    }
  });
};

export default fetchBookData;
