const { initializeApp } = require("firebase/app");
const { getDatabase, ref, get , limitToFirst } = require("firebase/database");

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

function getUserData(user_id) {
    const reference = ref(database, "User/" + user_id);
    get(reference)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          console.log(userData);
        } else {
          console.log("User does not exist.");
        }
      })
      .catch((error) => {
        console.error("Error retrieving user data:", error);
      });
}
                

getUserData(2);