const { initializeApp } = require("firebase/app");
const { getDatabase, ref, set, onValue } = require("firebase/database");
const moment = require('moment');

const firebaseConfig = {
    apiKey: "AIzaSyCIUrrQTjBAWIsGBtBYVPMmZCNIja7Lh7c",
    authDomain: "bookrental-ae411.firebaseapp.com",
    databaseURL: "https://bookrental-ae411-default-rtdb.firebaseio.com",
    projectId: "bookrental-ae411",
    storageBucket: "bookrental-ae411.appspot.com",
    messagingSenderId: "301803774992",
    appId: "1:301803774992:web:93f14c21339ed1efe59695",
    measurementId: "G-JNTVCTW899"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let bookData = [];
// NEW ARRIVAL (CÓ CREATEDDATE MỚI NHẤT)
//
// Step 1: Lấy dữ liệu sách từ Firebase
onValue(ref(database, 'Books'), (snapshot) => {
    const books = snapshot.val();
  
    // Step 2: Sắp xếp sách theo createdDate mới nhất
    const sortedBooks = Object.keys(books).sort((a, b) => {
      const dateA = moment(books[a].createdDate, 'DD/MM/YY');
      const dateB = moment(books[b].createdDate, 'DD/MM/YY');
      return dateB.diff(dateA);
    });
  
    // Step 3: Lấy top 15 quyển sách mới nhất
    const top15Books = sortedBooks.slice(0, 15);
  
    // Step 4: Tạo mảng BookData theo định dạng yêu cầu
    const bookData = top15Books.map(bookId => {
      const book = {
        id: bookId,
        ...books[bookId],
        createdDate: books[bookId].createdDate
      };
      return book;
    });
  
    // In kết quả
    // console.log("BookData:");
    // console.log(bookData);
  });

export const NewArrivalData = bookData;
process.exit();