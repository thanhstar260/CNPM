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

writeOrdersData(1,1,[2,5,10],1,"done","25/6","21/6")
writeOrdersData(2,2,[3,10,8],1,"done","25/6","21/6")
writeOrdersData(3,2,[2,6,4,3],2,"done","25/6","21/6")


