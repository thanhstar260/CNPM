const { initializeApp } = require("firebase/app");
const { getDatabase, ref, set, } = require("firebase/database");

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

// OrderData
//
function writeOrdersData(order_id, user_id,book_id, staff_id, order_status, return_date, verify_date) {
    const reference = ref(database, "Order/" + order_id);
    set(reference, {
        user_id: user_id,
        book_id: book_id,
        staff_id: staff_id,
        order_status: order_status,
        return_date: return_date,
        verify_date: verify_date
    })
        .then(() => {
        console.log("Data inserted successfully!");
        
        const userReference = ref(database, "User/" + user_id + "/orders/" + order_id);
        const staffReference = ref(database, "Staff/" + staff_id + "/orders/" + order_id);

        // Ghi nhận khóa ngoại bằng cách cập nhật dữ liệu trong bảng User
        set(userReference, true)
            .then(() => {
            console.log("Foreign key inserted successfully!");
            // process.exit();
            })
            .catch((error) => {
            console.error("Error inserting foreign key:", error);
            // process.exit();
            });
        
        // Ghi nhận khóa ngoại bằng cách cập nhật dữ liệu trong bảng Staff
        set(staffReference, true)
        .then(() => {
        console.log("Foreign key inserted successfully!");
        // process.exit();
        })
        .catch((error) => {
        console.error("Error inserting foreign key:", error);
        // process.exit();
        });
        })
        .catch((error) => {
        console.error("Error inserting data:", error);
        // process.exit();
        });
        
}

const OrderData = [
    {
        "order_id": 1, 
        "user_id": 1,
        "book_id": [2,5,10],
        "staff_id": 1,
        "order_status": "done", 
        "return_date": "25/06/23",
        "verify_date": "21/06/23" 
    },
    {
        "order_id": 2, 
        "user_id": 1,
        "book_id": [3,10,8],
        "staff_id": 1,
        "order_status": "waiting", 
        "return_date": "None",
        "verify_date": "None" 
    },
    {
        "order_id": 3, 
        "user_id": 2,
        "book_id": [2,6,4,3],
        "staff_id": 2,
        "order_status": "renting", 
        "return_date": "None",
        "verify_date": "11/06/23" 
    },
    {
        "order_id": 3, 
        "user_id": 2,
        "book_id": [2,6,4,3],
        "staff_id": 2,
        "order_status": "renting", 
        "return_date": "None",
        "verify_date": "11/06/23" 
    },
    {
        "order_id": 4, 
        "user_id": 1,
        "book_id": [12,25,110],
        "staff_id": 1,
        "order_status": "done", 
        "return_date": "05/06/23",
        "verify_date": "02/06/23" 
    },
    {
        "order_id": 5, 
        "user_id": 2,
        "book_id": [23,21,28],
        "staff_id": 1,
        "order_status": "waiting", 
        "return_date": "None",
        "verify_date": "None" 
    },
    {
        "order_id": 6, 
        "user_id": 2,
        "book_id": [52,56,54,63],
        "staff_id": 2,
        "order_status": "renting", 
        "return_date": "None",
        "verify_date": "11/07/23" 
    },
    {
        "order_id": 7, 
        "user_id": 1,
        "book_id": [32,105,50],
        "staff_id": 1,
        "order_status": "done", 
        "return_date": "10/07/23",
        "verify_date": "08/07/23" 
    },
    {
        "order_id": 8, 
        "user_id": 2,
        "book_id": [43,140,84],
        "staff_id": 1,
        "order_status": "done", 
        "return_date": "10/06/23",
        "verify_date": "08/06/23" 
    },
    {
        "order_id": 9, 
        "user_id": 2,
        "book_id": [52,50,54,63],
        "staff_id": 2,
        "order_status": "done", 
        "return_date": "10/06/23",
        "verify_date": "08/06/23" 
    },
    {
        "order_id": 10, 
        "user_id": 2,
        "book_id": [62,54,63],
        "staff_id": 2,
        "order_status": "done", 
        "return_date": "20/06/23",
        "verify_date": "18/06/23" 
    },
    {
        "order_id": 11, 
        "user_id": 1,
        "book_id": [62,54,63],
        "staff_id": 1,
        "order_status": "done", 
        "return_date": "30/06/23",
        "verify_date": "26/06/23" 
    },
    {
        "order_id": 12, 
        "user_id": 2,
        "book_id": [62,54,63],
        "staff_id": 1,
        "order_status": "done", 
        "return_date": "18/06/23",
        "verify_date": "12/06/23" 
    }
];

for (let i = 0; i < OrderData.length; i++) {
const order = OrderData[i];
writeOrdersData(
    order.order_id,
    order.user_id,
    order.book_id,
    order.staff_id,
    order.order_status,
    order.return_date,
    order.verify_date
);
}
