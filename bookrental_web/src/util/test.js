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

// // SÁCH HOT (ĐƯỢC THUÊ NHIỀU NHẤT TRONG 30 NGÀY)
// //
// // Step 1: Xác định khoảng thời gian từ ngày hiện tại về trước 30 ngày
// const currentDate = moment().format('YYYY-MM-DD');
// const startDate = moment().subtract(30, 'days').format('YYYY-MM-DD');

// // Step 2: Tạo đối tượng để theo dõi số lần thuê của từng sách
// const rentCount = {};

// // Step 3: Lắng nghe sự thay đổi dữ liệu từ Firebase Realtime Database
// onValue(ref(database, 'Order'), (snapshot) => {
//   const orderData = snapshot.val();

//   // Step 4: Lặp qua danh sách đơn hàng trong OrderData
//   for (const orderId in orderData) {
//     const order = orderData[orderId];
//     const orderStatus = order.order_status;
//     const orderDate = order.verify_date;

//     // Kiểm tra đơn hàng có order_status là "done" và thuộc trong khoảng thời gian 30 ngày trước
//     if (orderStatus === "done" && moment(orderDate, 'DD/MM/YY').isBetween(startDate, currentDate, undefined, '[]')) {
//       const bookIds = order.book_id;
//       bookIds.forEach(bookId => {
//         // Cập nhật số lần thuê của từng sách trong đối tượng rentCount
//         if (rentCount[bookId]) {
//           rentCount[bookId] += 1;
//         } else {
//           rentCount[bookId] = 1;
//         }
//       });
//     }
//   }

//   // Step 5: Lấy top 15 cuốn sách đã được thuê nhiều nhất
//   const top15Books = Object.keys(rentCount).sort((a, b) => rentCount[b] - rentCount[a]).slice(0, 15).map(bookId => parseInt(bookId));

//     // Step 6: Lấy dữ liệu sách từ Firebase
//     const bookData = [];

//     onValue(ref(database, 'Books'), (snapshot) => {
//     const books = snapshot.val();
//     top15Books.forEach(bookId => {
//         if (books[bookId]) {
//         const book = {
//             id: bookId,
//             ...books[bookId],
//             createdDate: moment().format('DD/MM/YY')
//         };
//         bookData.push(book);
//         }
//     });

//     // In kết quả
//     console.log("BookData:");
//     console.log(bookData);
//     });
// });


// // NEW ARRIVAL (CÓ CREATEDDATE MỚI NHẤT)
// //
// // Step 1: Lấy dữ liệu sách từ Firebase
// onValue(ref(database, 'Books'), (snapshot) => {
//     const books = snapshot.val();
  
//     // Step 2: Sắp xếp sách theo createdDate mới nhất
//     const sortedBooks = Object.keys(books).sort((a, b) => {
//       const dateA = moment(books[a].createdDate, 'DD/MM/YY');
//       const dateB = moment(books[b].createdDate, 'DD/MM/YY');
//       return dateB.diff(dateA);
//     });
  
//     // Step 3: Lấy top 15 quyển sách mới nhất
//     const top15Books = sortedBooks.slice(0, 15);
  
//     // Step 4: Tạo mảng BookData theo định dạng yêu cầu
//     const bookData = top15Books.map(bookId => {
//       const book = {
//         id: bookId,
//         ...books[bookId],
//         createdDate: books[bookId].createdDate
//       };
//       return book;
//     });
  
//     // In kết quả
//     console.log("BookData:");
//     console.log(bookData);
//   });


// SÁCH POPULAR (ĐƯỢC THUÊ NHIỀU NHẤT)
//
// Step 1: Tạo đối tượng để theo dõi số lần thuê của từng sách
const rentCount = {};

// Step 2: Lắng nghe sự thay đổi dữ liệu từ Firebase Realtime Database
onValue(ref(database, 'Order'), (snapshot) => {
  const orderData = snapshot.val();

  // Step 3: Lặp qua danh sách đơn hàng trong OrderData
  for (const orderId in orderData) {
    const order = orderData[orderId];
    const orderStatus = order.order_status;

    // Kiểm tra đơn hàng có order_status là "done"
    if (orderStatus === "done") {
      const bookIds = order.book_id;
      bookIds.forEach(bookId => {
        // Cập nhật số lần thuê của từng sách trong đối tượng rentCount
        if (rentCount[bookId]) {
          rentCount[bookId] += 1;
        } else {
          rentCount[bookId] = 1;
        }
      });
    }
  }

  // Step 4: Lấy top 15 quyển sách được thuê nhiều nhất
  const top15Books = Object.keys(rentCount).sort((a, b) => rentCount[b] - rentCount[a]).slice(0, 15);

  // Step 5: Lấy dữ liệu sách từ Firebase
  const bookData = [];

  onValue(ref(database, 'Books'), (snapshot) => {
    const books = snapshot.val();
    top15Books.forEach(bookId => {
      if (books[bookId]) {
        const book = {
          id: bookId,
          ...books[bookId],
          createdDate: moment().format('DD/MM/YY')
        };
        bookData.push(book);
      }
    });

    // In kết quả
    console.log("BookData:");
    console.log(bookData);
  });
});