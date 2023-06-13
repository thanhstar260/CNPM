// Install sqlite3 : npm i sqlite3
// run: node ./App1.js

// Connect
const sqlite3 = require("sqlite3").verbose();
const fs = require('fs');
let sql;

const db = new sqlite3.Database("./books.db",sqlite3.OPEN_READWRITE,(err)=>{
    if (err) return console.error(err.message);
})

// Create table
// sql = `CREATE TABLE books(id INTEGER PRIMARY KEY AUTOINCREMENT,book_name,book_description,book_url,print_length,language,author_name,price)`;
// db.run(sql);


// Insert data into table
// sql = `INSERT INTO books(book_name,book_description,book_url,print_length,language,author_name,price) VALUES (?,?,?,?,?,?,?)`
// db.run(sql,["Harry Potter and the Philosopher's Stone",
//             "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
//             "https://m.media-amazon.com/images/I/5165He67NEL._SY346_.jpg",
//             "345 pages",
//             "English",
//             "J.K. Rowling",
//             "305"],(err) =>{
//     if (err) return console.error(err.message);
// })

// db.run(sql,["The Jungle Book",
//             "Join Mowgli the Man-cub as he embarks on a dangerous journey through the jungle to escape the man-eating tiger Shere Khan. In his attempt to reach the Man-village, Mowgli discovers a whole new way of life when he meets the lovable bear, Baloo. The pair strike up a close friendship but will Mowgli reach the safety of the village before it is too late? Find out in this beautiful Disney storybook with an eye-catching lenticular cover.",
//             "https://m.media-amazon.com/images/I/51cCdjGzuVL._SX364_BO1,204,203,200_.jpg",
//             "200 pages",
//             "English",
//             "Rudyard Kipling",
//             "340"],(err) =>{
//     if (err) return console.error(err.message);
// })

// db.run(sql,["Treasure Island",
//             "Think of the high seas and of a buccaneer ship; of a wild seaman with a sea chest full of gold; of Long John Silver; of a buried treasure and of young Jim Hawkins, the boy with the treasure map the key to it all. This is the Treasure Island and if you don't think of all this, the pirates will hunt you down and when they find you, for find you they sure will, they will truss you and carry you back to their ship and just before they feed you to the sharks, as you walk the gangplank with a sword digging sharp and sure into your back, they will sing their one last song for you. “Fifteen men on the dead man's chest Yo-ho-ho and a bottle of rum!",
//             "https://m.media-amazon.com/images/I/512c4l+AUrS._SX258_BO1,204,203,200_.jpg",
//             "236 pages",
//             "English",
//             "R.L. Stevenson",
//             "108",],(err) =>{
//     if (err) return console.error(err.message);
// })

// db.run(sql,["From the Earth to the Moon",
//             "Written almost a century before the daring flights of the astronauts, Jules Verne’s prophetic novel of man’s race to the stars is a classic adventure tale enlivened by broad satire and scientific acumen. When the members of the elite Baltimore Gun Club find themselves lacking any urgent assignments at the close of the Civil War, their president, Impey Barbicane, proposes that they build a gun big enough to launch a rocket to the moon. But when Barbicane’s adversary places a huge wager that the project will fail and a daring volunteer elevates the mission to a “manned” flight, one man’s dream turns into an international space race. A story of rip-roaring action, humor, and wild imagination, From the Earth to the Moon is as uncanny in its accuracy and as filled with authentic detail and startling immediacy as Verne’s timeless masterpieces 20,000 Leagues Under the Sea and Around the World in Eighty Days.",
//             "https://m.media-amazon.com/images/I/61r44FrbhLL._SX302_BO1,204,203,200_.jpg",
//             "240 pages",
//             "English",
//             "Jules Verne",
//             "202",],(err) =>{
//     if (err) return console.error(err.message);
// })

// db.run(sql,["Around The World In Eighty Days",
//             "October 2, 1872, Reform Club, London. There is an article in the Daily Telegraph estimating that one can go round the world in eighty days. Phileas Fogg, a rich English gentleman, engages in a conversation with his partners at whist about the possibility of it. and this is what it leads to: “I will bet twenty thousand pounds against anyone who wishes, that I will make the tour of the world in eighty days or less; in nineteen hundred and twenty hours or a hundred and fifteen thousand two hundred minutes. Do you accept?”And soon, Fogg is on the 8.45 p.m. train to Italy from London with his French servant, Passe-partout. From trains to steamers to elephants, as Fogg travels across the four continents and different time zones, braving the unexpected, will he be able to circumnavigate the globe in eighty days? Will Phileas Fogg win the bet?Written during the Franco-Prussian War, Jules Verne’s Around the World in Eighty Days is a thrilling and lively adventure novel. Reimagined across various art forms, this unforgettable classic continues to challenge the spirit of adventure in its readers.",
//             "https://m.media-amazon.com/images/I/510EvAURpTL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
//             "248 pages",
//             "English",
//             "Jules Verne",
//             "140",],(err) =>{
//     if (err) return console.error(err.message);
// })

// db.run(sql,["The Alchemist",
//             "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and inspiring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried in the Pyramids. Along the way he meets a Gypsy woman, a man who calls himself.",
//             "https://m.media-amazon.com/images/I/410llGwMZGL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
//             "172 pages",
//             "English",
//             "Paulo Coelho",
//             "286",],(err) =>{
//     if (err) return console.error(err.message);
// })

// db.run(sql,["To Kill a Mockingbird",
//             "Shoot all the bluejays you want, if you can hit 'em, but remember it's a sin to kill a mockingbird.' A lawyer's advice to his children as he defends the real mockingbird of Harper Lee's classic novel - a black man falsely charged with the rape of a white girl. Through the young eyes of Scout and Jem Finch, Harper Lee explores with exuberant humour the irrationality of adult attitudes to race and class in the Deep South of the 1930s. The conscience of a town steeped in prejudice, violence and hypocrisy is pricked by the stamina of one man's struggle for justice. But the weight of history will only tolerate so much. To Kill a Mockingbird is a coming-of-age story, an anti-racist novel, a historical drama of the Great Depression and a sublime example of the Southern writing tradition.",
//             "https://m.media-amazon.com/images/I/51Z9p5AecCL._SX307_BO1,204,203,200_.jpg",
//             "320 pages",
//             "English",
//             "Harper Lee",
//             "138"],(err) =>{
//     if (err) return console.error(err.message);
// })

// db.run(sql,["Do Epic Shit",
//             "Ankur Warikoo is an entrepreneur and content creator whose deep, witty and brutally honest thoughts on success and failure, money and investing, self-awareness and personal relationships have made him one of India’s top personal brands. In his first book, Ankur puts together the key ideas that have fuelled his journey – one that began with him wanting to be a space engineer and ended with him creating content that has been seen and read by millions. His thoughts range from the importance of creating habits for long-term success to the foundations of money management, from embracing and accepting failure to the real truth about learning empathy. This is a book to be read, and reread, a book whose lines you will underline and think about again and again, a book you will give your family and friends and strangers. Ankur hopes for this book to become the most gifted book ever!",
//             "https://m.media-amazon.com/images/I/41oYp387k8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
//             "320 pages",
//             "English",
//             "Ankur Warikoo",
//             "312"],(err) =>{
//     if (err) return console.error(err.message);
// })

// db.run(sql,["Harry Potter and the Chamber of Secrets",
//             "Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as through turned to stone . Dobby's sinister predictions seem to be coming true.These new editions of the classic and internationally bestselling, multi-award-winning series feature instantly pick-up-able new jackets by Jonny Duddle, with huge child appeal, to bring Harry Potter to the next generation of readers. It's time to PASS THE MAGIC ON .",
//             "https://m.media-amazon.com/images/I/51yzj3H34aL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
//             "224 pages",
//             "English",
//             "J.K. Rowling",
//             "310"],(err) =>{
//     if (err) return console.error(err.message);
// })

// db.run(sql,["The Subtle Art of Not Giving a F*ck",
//             "In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be “positive” all the time so that we can truly become better, happier people. For decades, we’ve been told that positive thinking is the key to a happy, rich life. “Fuck positivity,” Mark Manson says. “Let’s be honest, shit is fucked and we have to live with it.” In his wildly popular Internet blog, Manson doesn’t sugar-coat or equivocate. He tells it like it is—a dose of raw, refreshing, honest truth that is sorely lacking today. The Subtle Art of Not Giving a F**k is his antidote to the coddling, let’s-all-feel-good mind-set that has infected",
//             "https://m.media-amazon.com/images/I/511vJPN7p5L._SX331_BO1,204,203,200_.jpg",
//             "384 pages",
//             "English",
//             "Mark Manson",
//             "272"],(err) =>{
//     if (err) return console.error(err.message);
// })

// db.run(sql,["Ikigai",
//             "THE INTERNATIONAL BESTSELLER We all have an ikigai. It's the Japanese word for ‘a reason to live’ or ‘a reason to jump out of bed in the morning’. It’s the place where your needs, desires, ambitions, and satisfaction meet. A place of balance. Small wonder that finding your ikigai is closely linked to living longer. Finding your ikigai is easier than you might think. This book will help you work out what your own ikigai really is, and equip you to change your life. You have a purpose in this world: your skills, your interests, your desires and your history have made you the perfect candidate for something. All you have to do is find it. Do that, and you can make every single day of your life joyful and meaningful.",
//             "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg",
//             "208 pages",
//             "English",
//             "Héctor García",
//             "249"],(err) =>{
//     if (err) return console.error(err.message);
// })

// db.run(sql,["LINCHPIN",
//             "In this compelling, accessible and purpose-filled book bestselling business author Seth Godin shows how you have the potential to make a big difference-and make yourself indispensable in the process-wherever you are.Why are some people easily outsourced, downsized, or freelanced into obscurity, while others have their pick of opportunities? In his most powerful book yet, Seth Godin argues that it's more essential than ever to become indispensable - to become a linchpin. Linchpins are the essential building blocks of great organizations: they invent, lead (regardless of title), connect others, make things happen, and create order out of chaos. They love their work and pour their best selves into it and turn each day into a kind of art - and, in today's world, they get the best jobs and the most freedom.Godin shows that the key to being indispensable is overcoming the fears that hold most of us back.",
//             "https://m.media-amazon.com/images/I/51fGhgWMZKL._SX317_BO1,204,203,200_.jpg",
//             "256 pages",
//             "English",
//             "Seth Godin",
//             "294"],(err) =>{
//     if (err) return console.error(err.message);
// })

// db.run(sql,["Harry Potter and the Prisoner of Azkaban",
//             "When the Knight Bus crashes through the darkness and screeches to a halt in front of him, it's the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run - and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harry's tea leaves . But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul-sucking kiss.",
//             "https://m.media-amazon.com/images/I/51StPSSsneL._SX332_BO1,204,203,200_.jpg",
//             "480 pages",
//             "English",
//             "J.K. Rowling",
//             "305"],(err) =>{
//     if (err) return console.error(err.message);
// })

// db.run(sql,["Harry Potter and the Goblet of Fire",
//             "The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!These new editions of the classic and internationally bestselling, multi-award-winning series feature instantly pick-up-able new jackets by Jonny Duddle, with huge child appeal, to bring Harry Potter to the next generation of readers. It's time to PASS THE MAGIC ON.",
//             "https://m.media-amazon.com/images/I/518TIrLNpOL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
//             "640 pages",
//             "English",
//             "J.K. Rowling",
//             "439"],(err) =>{
//     if (err) return console.error(err.message);
// })

// db.run(sql,["Harry Potter and the Order of the Phoenix",
//             "Dark times have come to Hogwarts. After the Dementors' attack on his cousin Dudley, Harry Potter knows that Voldemort will stop at nothing to find him. There are many who deny the Dark Lord's return, but Harry is not alone: a secret order gathers at Grimmauld Place to fight against the Dark forces. Harry must allow Professor Snape to teach him how to protect himself from Voldemort's savage assaults on his mind. But they are growing stronger by the day and Harry is running out of time.",
//             "https://m.media-amazon.com/images/I/511+ftLvTUL._SX332_BO1,204,203,200_.jpg",
//             "816 pages",
//             "English",
//             "J.K. Rowling",
//             "475"],(err) =>{
//     if (err) return console.error(err.message);
// })

// db.run(sql,["Harry Potter and the Half Blood Prince",
//             "When Dumbledore arrives at Privet Drive one summer night to collect Harry Potter, his wand hand is blackened and shrivelled, but he does not reveal why. Secrets and suspicion are spreading through the wizarding world, and Hogwarts itself is not safe. Harry is convinced that Malfoy bears the Dark Mark: there is a Death Eater amongst them. Harry will need powerful magic and true friends as he explores Voldemort's darkest secrets, and Dumbledore prepares him to face his destiny.",
//             "https://m.media-amazon.com/images/I/51XgBz54o3L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
//             "560 pages",
//             "English",
//             "J.K. Rowling",
//             "429"],(err) =>{
//     if (err) return console.error(err.message);
// })

// db.run(sql,["Harry Potter and the Deathly Hallows",
//             "As he climbs into the sidecar of Hagrid's motorbike and takes to the skies, leaving Privet Drive for the last time, Harry Potter knows that Lord Voldemort and the Death Eaters are not far behind. The protective charm that has kept Harry safe until now is now broken, but he cannot keep hiding. The Dark Lord is breathing fear into everything Harry loves, and to stop him Harry will have to find and destroy the remaining Horcruxes. The final battle must begin - Harry must stand and face his enemy.",
//             "https://m.media-amazon.com/images/I/51cWQIhRUTL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
//             "640 pages",
//             "English",
//             "J.K. Rowling",
//             "431"],(err) =>{
//     if (err) return console.error(err.message);
// })


// Query the data
// sql = `SELECT * FROM books`
// db.all(sql,[],(err,rows) =>{
//     if (err) return console.error(err.message);
//     rows.forEach((row) => {
//         console.log(row);
//     });
// })


// Ghi data vào file 
const query = 'SELECT * FROM books';
db.all(query, (err, rows) => {
    if (err) {
      console.error(err.message);
      return;
    }
    // Chuyển đổi dữ liệu từ SQLite thành cấu trúc mong muốn
    const userData = rows.map((row) => ({
      id: row.id,
      book_name: row.book_name,
      book_description: row.book_description,
      book_url: row.book_url,
      print_length: row.print_length,
      language: row.language,
      author_name: row.author_name,
      price: row.price,
    }));

    // Ghi dữ liệu vào file
    const data = `export const userData = ${JSON.stringify(userData, null, 4)};`;
    fs.writeFile('BookData.js', data, (err) => {
      if (err) {
        console.error(err.message);
        return;
      }
      console.log('Data written to userData.js file.');
    });
});


// Drop table
// db.run("DROP TABLE books");




