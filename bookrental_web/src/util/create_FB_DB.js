// import BookData from './BookData.js';
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


// Insert bookdata
//
function writeBookData(id,title,author,sumary,price,stock,genre,createdDate,book_url,print_length){
    const reference = ref(database, "Books/" + id);
    set(reference, {
    title: title,
    author: author,
    sumary: sumary,
    price: price,
    stock: stock,
    genre : genre,
    createdDate : createdDate,
    book_url : book_url,
    print_length : print_length
    })
    .then(() => {
        console.log("Data inserted successfully!");
        // process.exit();
    })
    .catch((error) => {
        console.error("Error inserting data:", error);
        // process.exit();
    });
}

const BookData = [
    {
      "id": 1,
      "title": "Harry Potter and the Philosopher's Stone",
      "sumary": "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
      "book_url": "https://m.media-amazon.com/images/I/5165He67NEL._SY346_.jpg",
      "print_length": "345 pages",
      "language": "English",
      "author": "J.K. Rowling",
      "price": 15000,
      "genre": [
        "Fiction",
        "Mystery",
        "Adventure",
        "Fantasy"
      ],
      "stock": 10,
      "createdDate": "18/05/23"
    },
    {
      "id": 2,
      "title": "The Alchemist",
      "sumary": "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and inspiring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried in the Pyramids. Along the way he meets a Gypsy woman, a man who calls himself.",
      "book_url": "https://m.media-amazon.com/images/I/410llGwMZGL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      "print_length": "172 pages",
      "language": "English",
      "author": "Paulo Coelho",
      "price": 12000,
      "genre": [
        "Science",
        "Business",
        "Autobiography",
        "Thriller",
        "Romance"
      ],
      "stock": 10,
      "createdDate": "23/05/23"
    },
    {
      "id": 3,
      "title": "To Kill a Mockingbird",
      "sumary": "Shoot all the bluejays you want, if you can hit 'em, but remember it's a sin to kill a mockingbird.' A lawyer's advice to his children as he defends the real mockingbird of Harper Lee's classic novel - a black man falsely charged with the rape of a white girl. Through the young eyes of Scout and Jem Finch, Harper Lee explores with exuberant humour the irrationality of adult attitudes to race and class in the Deep South of the 1930s. The conscience of a town steeped in prejudice, violence and hypocrisy is pricked by the stamina of one man's struggle for justice. But the weight of history will only tolerate so much. To Kill a Mockingbird is a coming-of-age story, an anti-racist novel, a historical drama of the Great Depression and a sublime example of the Southern writing tradition.",
      "book_url": "https://m.media-amazon.com/images/I/51Z9p5AecCL._SX307_BO1,204,203,200_.jpg",
      "print_length": "320 pages",
      "language": "English",
      "author": "Harper Lee",
      "price": 22000,
      "genre": [
        "Autobiography",
        "Thriller",
        "Romance"
      ],
      "stock": 10,
      "createdDate": "22/05/23"
    },
    {
      "id": 4,
      "title": "Do Epic Shit",
      "sumary": "Ankur Warikoo is an entrepreneur and content creator whose deep, witty and brutally honest thoughts on success and failure, money and investing, self-awareness and personal relationships have made him one of India’s top personal brands. In his first book, Ankur puts together the key ideas that have fuelled his journey – one that began with him wanting to be a space engineer and ended with him creating content that has been seen and read by millions. His thoughts range from the importance of creating habits for long-term success to the foundations of money management, from embracing and accepting failure to the real truth about learning empathy. This is a book to be read, and reread, a book whose lines you will underline and think about again and again, a book you will give your family and friends and strangers. Ankur hopes for this book to become the most gifted book ever!",
      "book_url": "https://m.media-amazon.com/images/I/41oYp387k8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      "print_length": "320 pages",
      "language": "English",
      "author": "Ankur Warikoo",
      "price": 42000,
      "genre": [
        "Horror",
        "Biography",
        "Fantasy",
        "Thriller",
        "Romance"
      ],
      "stock": 10,
      "createdDate": "16/05/23"
    },
    {
      "id": 5,
      "title": "Harry Potter and the Chamber of Secrets",
      "sumary": "Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as through turned to stone . Dobby's sinister predictions seem to be coming true.These new editions of the classic and internationally bestselling, multi-award-winning series feature instantly pick-up-able new jackets by Jonny Duddle, with huge child appeal, to bring Harry Potter to the next generation of readers. It's time to PASS THE MAGIC ON .",
      "book_url": "https://m.media-amazon.com/images/I/51yzj3H34aL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      "print_length": "224 pages",
      "language": "English",
      "author": "J.K. Rowling",
      "price": 34000,
      "genre": [
        "Horror",
        "Biography",
        "Fantasy"
      ],
      "stock": 10,
      "createdDate": "17/05/23"
    },
    {
      "id": 6,
      "title": "The Subtle Art of Not Giving a F*ck",
      "sumary": "In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be “positive” all the time so that we can truly become better, happier people. For decades, we’ve been told that positive thinking is the key to a happy, rich life. “Fuck positivity,” Mark Manson says. “Let’s be honest, shit is fucked and we have to live with it.” In his wildly popular Internet blog, Manson doesn’t sugar-coat or equivocate. He tells it like it is—a dose of raw, refreshing, honest truth that is sorely lacking today. The Subtle Art of Not Giving a F**k is his antidote to the coddling, let’s-all-feel-good mind-set that has infected",
      "book_url": "https://m.media-amazon.com/images/I/511vJPN7p5L._SX331_BO1,204,203,200_.jpg",
      "print_length": "384 pages",
      "language": "English",
      "author": "Mark Manson",
      "price": 26000,
      "genre": [
        "Thriller",
        "Biography",
        "Fantasy",
        "Biography"
      ],
      "stock": 10,
      "createdDate": "24/02/23"
    },
    {
      "id": 7,
      "title": "Ikigai",
      "sumary": "THE INTERNATIONAL BESTSELLER We all have an ikigai. It's the Japanese word for ‘a reason to live’ or ‘a reason to jump out of bed in the morning’. It’s the place where your needs, desires, ambitions, and satisfaction meet. A place of balance. Small wonder that finding your ikigai is closely linked to living longer. Finding your ikigai is easier than you might think. This book will help you work out what your own ikigai really is, and equip you to change your life. You have a purpose in this world: your skills, your interests, your desires and your history have made you the perfect candidate for something. All you have to do is find it. Do that, and you can make every single day of your life joyful and meaningful.",
      "book_url": "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg",
      "print_length": "208 pages",
      "language": "English",
      "author": "Héctor García",
      "price": 30000,
      "genre": [
        "Psychology",
        "Travel",
        "Fantasy",
        "Autobiography"
      ],
      "stock": 10,
      "createdDate": "02/05/23"
    },
    {
      "id": 8,
      "title": "LINCHPIN",
      "sumary": "In this compelling, accessible and purpose-filled book bestselling business author Seth Godin shows how you have the potential to make a big difference-and make yourself indispensable in the process-wherever you are.Why are some people easily outsourced, downsized, or freelanced into obscurity, while others have their pick of opportunities? In his most powerful book yet, Seth Godin argues that it's more essential than ever to become indispensable - to become a linchpin. Linchpins are the essential building blocks of great organizations: they invent, lead (regardless of title), connect others, make things happen, and create order out of chaos. They love their work and pour their best selves into it and turn each day into a kind of art - and, in today's world, they get the best jobs and the most freedom.Godin shows that the key to being indispensable is overcoming the fears that hold most of us back.",
      "book_url": "https://m.media-amazon.com/images/I/51fGhgWMZKL._SX317_BO1,204,203,200_.jpg",
      "print_length": "256 pages",
      "language": "English",
      "author": "Seth Godin",
      "price": 30000,
      "genre": [
        "Technology",
        "Art ",
        "Fantasy",
        "Poetry"
      ],
      "stock": 10,
      "createdDate": "07/05/23"
    },
    {
      "id": 9,
      "title": "Harry Potter and the Prisoner of Azkaban",
      "sumary": "When the Knight Bus crashes through the darkness and screeches to a halt in front of him, it's the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run - and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harry's tea leaves . But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul-sucking kiss.",
      "book_url": "https://m.media-amazon.com/images/I/51StPSSsneL._SX332_BO1,204,203,200_.jpg",
      "print_length": "480 pages",
      "language": "English",
      "author": "J.K. Rowling",
      "price": 34000,
      "genre": [
        "Technology",
        "Art ",
        "Fantasy",
        "Poetry"
      ],
      "stock": 10,
      "createdDate": "17/04/23"
    },
    {
      "id": 10,
      "title": "Harry Potter and the Goblet of Fire",
      "sumary": "The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!These new editions of the classic and internationally bestselling, multi-award-winning series feature instantly pick-up-able new jackets by Jonny Duddle, with huge child appeal, to bring Harry Potter to the next generation of readers. It's time to PASS THE MAGIC ON.",
      "book_url": "https://m.media-amazon.com/images/I/518TIrLNpOL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      "print_length": "640 pages",
      "language": "English",
      "author": "J.K. Rowling",
      "price": 42000,
      "genre": [
        "Psychology",
        "Travel",
        "Fantasy",
        "Autobiography"
      ],
      "stock": 10,
      "createdDate": "09/04/23"
    },
    {
      "id": 11,
      "title": "Harry Potter and the Order of the Phoenix",
      "sumary": "Dark times have come to Hogwarts. After the Dementors' attack on his cousin Dudley, Harry Potter knows that Voldemort will stop at nothing to find him. There are many who deny the Dark Lord's return, but Harry is not alone: a secret order gathers at Grimmauld Place to fight against the Dark forces. Harry must allow Professor Snape to teach him how to protect himself from Voldemort's savage assaults on his mind. But they are growing stronger by the day and Harry is running out of time.",
      "book_url": "https://m.media-amazon.com/images/I/511+ftLvTUL._SX332_BO1,204,203,200_.jpg",
      "print_length": "816 pages",
      "language": "English",
      "author": "J.K. Rowling",
      "price": 22000,
      "genre": [
        "Thriller",
        "Biography",
        "Fantasy",
        "Biography"
      ],
      "stock": 10,
      "createdDate": "12/04/23"
    },
    {
      "id": 12,
      "title": "Harry Potter and the Half Blood Prince",
      "sumary": "When Dumbledore arrives at Privet Drive one summer night to collect Harry Potter, his wand hand is blackened and shrivelled, but he does not reveal why. Secrets and suspicion are spreading through the wizarding world, and Hogwarts itself is not safe. Harry is convinced that Malfoy bears the Dark Mark: there is a Death Eater amongst them. Harry will need powerful magic and true friends as he explores Voldemort's darkest secrets, and Dumbledore prepares him to face his destiny.",
      "book_url": "https://m.media-amazon.com/images/I/51XgBz54o3L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      "print_length": "560 pages",
      "language": "English",
      "author": "J.K. Rowling",
      "price": 15000,
      "genre": [
        "Horror",
        "Biography",
        "Fantasy"
      ],
      "stock": 10,
      "createdDate": "03/02/23"
    },
    {
      "id": 13,
      "title": "Harry Potter and the Deathly Hallows",
      "sumary": "As he climbs into the sidecar of Hagrid's motorbike and takes to the skies, leaving Privet Drive for the last time, Harry Potter knows that Lord Voldemort and the Death Eaters are not far behind. The protective charm that has kept Harry safe until now is now broken, but he cannot keep hiding. The Dark Lord is breathing fear into everything Harry loves, and to stop him Harry will have to find and destroy the remaining Horcruxes. The final battle must begin - Harry must stand and face his enemy.",
      "book_url": "https://m.media-amazon.com/images/I/51cWQIhRUTL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      "print_length": "640 pages",
      "language": "English",
      "author": "J.K. Rowling",
      "price": 34000,
      "genre": [
        "Horror",
        "Biography",
        "Fantasy",
        "Thriller",
        "Romance"
      ],
      "stock": 10,
      "createdDate": "19/01/23"
    },
    {
      "id": 14,
      "title": "Around The World In Eighty Days",
      "sumary": "October 2, 1872, Reform Club, London. There is an article in the Daily Telegraph estimating that one can go round the world in eighty days. Phileas Fogg, a rich English gentleman, engages in a conversation with his partners at whist about the possibility of it. and this is what it leads to: “I will bet twenty thousand pounds against anyone who wishes, that I will make the tour of the world in eighty days or less; in nineteen hundred and twenty hours or a hundred and fifteen thousand two hundred minutes. Do you accept?”And soon, Fogg is on the 8.45 p.m. train to Italy from London with his French servant, Passe-partout. From trains to steamers to elephants, as Fogg travels across the four continents and different time zones, braving the unexpected, will he be able to circumnavigate the globe in eighty days? Will Phileas Fogg win the bet?Written during the Franco-Prussian War, Jules Verne’s Around the World in Eighty Days is a thrilling and lively adventure novel. Reimagined across various art forms, this unforgettable classic continues to challenge the spirit of adventure in its readers.",
      "book_url": "https://m.media-amazon.com/images/I/510EvAURpTL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      "print_length": "248 pages",
      "language": "English",
      "author": "Jules Verne",
      "price": 26000,
      "genre": [
        "Science",
        "Business",
        "Autobiography",
        "Thriller",
        "Romance"
      ],
      "stock": 10,
      "createdDate": "07/05/23"
    },
    {
      "id": 15,
      "title": "The Jungle Book",
      "sumary": "Join Mowgli the Man-cub as he embarks on a dangerous journey through the jungle to escape the man-eating tiger Shere Khan. In his attempt to reach the Man-village, Mowgli discovers a whole new way of life when he meets the lovable bear, Baloo. The pair strike up a close friendship but will Mowgli reach the safety of the village before it is too late? Find out in this beautiful Disney storybook with an eye-catching lenticular cover.",
      "book_url": "https://m.media-amazon.com/images/I/51cCdjGzuVL._SX364_BO1,204,203,200_.jpg",
      "print_length": "200 pages",
      "language": "English",
      "author": "Rudyard Kipling",
      "price": 26000,
      "genre": [
        "Fiction",
        "Mystery",
        "Adventure",
        "Fantasy"
      ],
      "stock": 10,
      "createdDate": "17/01/23"
    },
    {
      "id": 16,
      "title": "Treasure Island",
      "sumary": "Think of the high seas and of a buccaneer ship; of a wild seaman with a sea chest full of gold; of Long John Silver; of a buried treasure and of young Jim Hawkins, the boy with the treasure map the key to it all. This is the Treasure Island and if you don't think of all this, the pirates will hunt you down and when they find you, for find you they sure will, they will truss you and carry you back to their ship and just before they feed you to the sharks, as you walk the gangplank with a sword digging sharp and sure into your back, they will sing their one last song for you. “Fifteen men on the dead man's chest Yo-ho-ho and a bottle of rum!",
      "book_url": "https://m.media-amazon.com/images/I/512c4l+AUrS._SX258_BO1,204,203,200_.jpg",
      "print_length": "236 pages",
      "language": "English",
      "author": "R.L. Stevenson",
      "price": 34000,
      "genre": [
        "Fiction",
        "Mystery",
        "Adventure",
        "Fantasy"
      ],
      "stock": 10,
      "createdDate": "06/03/23"
    },
    {
      "id": 17,
      "title": "From the Earth to the Moon",
      "sumary": "Written almost a century before the daring flights of the astronauts, Jules Verne’s prophetic novel of man’s race to the stars is a classic adventure tale enlivened by broad satire and scientific acumen. When the members of the elite Baltimore Gun Club find themselves lacking any urgent assignments at the close of the Civil War, their president, Impey Barbicane, proposes that they build a gun big enough to launch a rocket to the moon. But when Barbicane’s adversary places a huge wager that the project will fail and a daring volunteer elevates the mission to a “manned” flight, one man’s dream turns into an international space race. A story of rip-roaring action, humor, and wild imagination, From the Earth to the Moon is as uncanny in its accuracy and as filled with authentic detail and startling immediacy as Verne’s timeless masterpieces 20,000 Leagues Under the Sea and Around the World in Eighty Days.",
      "book_url": "https://m.media-amazon.com/images/I/61r44FrbhLL._SX302_BO1,204,203,200_.jpg",
      "print_length": "240 pages",
      "language": "English",
      "author": "Jules Verne",
      "price": 17000,
      "genre": [
        "Psychology",
        "Travel",
        "Fantasy",
        "Autobiography"
      ],
      "stock": 10,
      "createdDate": "07/03/23"
    },
    {
      "id": 18,
      "title": "Unlocking Android",
      "sumary": "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE:        * Android's place in the market      * Using the Eclipse environment for Android development      * The Intents - how and why they are used      * Application classes:            o Activity            o Service            o IntentReceiver       * User interface design      * Using the ContentProvider to manage data      * Persisting data with the SQLite database      * Networking examples      * Telephony applications      * Notification methods      * OpenGL, animation & multimedia      * Sample Applications  ",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
      "print_length": "416 pages",
      "language": "English",
      "author": "W. Frank Ableson",
      "price": 15000,
      "genre": [
        "Horror",
        "Thriller",
        "History"
      ],
      "stock": 10,
      "createdDate": "21/02/23"
    },
    {
      "id": 19,
      "title": "Android in Action, Second Edition",
      "sumary": "When it comes to mobile apps, Android can do almost anything   and with this book, so can you! Android runs on mobile devices ranging from smart phones to tablets to countless special-purpose gadgets. It's the broadest mobile platform available.    Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
      "print_length": "592 pages",
      "language": "English",
      "author": "W. Frank Ableson",
      "price": 11000,
      "genre": [
        "Fantasy",
        "Poetry",
        "Biography"
      ],
      "stock": 16,
      "createdDate": "10/01/23"
    },
    {
      "id": 20,
      "title": "Zend Framework in Action",
      "sumary": "From rather humble beginnings as the Personal Home Page scripting language, PHP has found its way into almost every server, corporation, and dev shop in the world. On an average day, somewhere between 500,000 and 2 million coders do something in PHP. Even when you use a well-understood language like PHP, building a modern web application requires tools that decrease development time and cost while improving code quality. Frameworks such as Ruby-on-Rails and Django have been getting a lot of attention as a result.     For PHP coders, the Zend Framework offers that same promise without the need to move away from PHP. This powerful collection of components can be used in part or as a whole to speed up the development process. Zend Framework has the backing of Zend Technologies; the driving force behind the PHP programming language in which it is written. The first production release of the Zend Framework became available in July of 2007.    Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application. This book is organized around the techniques you'll use every day as a web developer \"data handling, forms, authentication, and so forth. As you follow the running example, you'll learn to build interactive Ajax-driven features into your application without sacrificing nuts-and-bolts considerations like security and performance.  This book is aimed at the competent PHP developer who wants to master framework-driven web development. Zend Framework in Action goes beyond the docs but still provides quick access to the most common topics encountered in the development of web applications.  ",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg",
      "print_length": "432 pages",
      "language": "English",
      "author": "Nick Lo",
      "price": 19000,
      "genre": [
        "Horror",
        "Cookbooks",
        "Comics & Graphic Novels"
      ],
      "stock": 13,
      "createdDate": "01/02/23"
    },
    {
      "id": 21,
      "title": "Flex on Java",
      "sumary": "In the demo, a hip designer, a sharply-dressed marketer, and a smiling, relaxed developer sip lattes and calmly discuss how Flex is going to make customers happy and shorten the workday   all while boosting the bottom line. The software systems they're using have been carefully selected and built from the ground up to work together seamlessly. There are no legacy systems, data, or competing business concerns to manage.    Cut to reality.    You're a Java developer. The marketing guy tells you that \"corporate\" wants a Flex-based site and you have to deliver it on top of what you already have. Your budget  Don't even ask. \"Make it look like the Discovery channel or something.\"    Flex on Java assumes you live in the real world   not the demo. This unique book shows you how to refactor an existing web application using the server-side you already know. You'll learn to use Flex 3 in concert with Spring, EJB 3, POJOs, JMS, and other standard technologies. Wherever possible, the examples use free or open source software.    The authors start with a typical Java web app and show you how to add a rich Flex interface. You also learn how to integrate Flex into your server-side Java via the BlazeDS framework, Adobe's open-source remoting and web messaging technology for Flex.    The book shows you how to deploy to not only the web but also to the desktop using the Adobe Integrated Runtime (AIR). You will learn how to integrate Flex into your existing applications in order to build a next generation application that will delight users.    Flex on Java is approachable for anyone beginning Java and Flex development.    ",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
      "print_length": "265 pages",
      "language": "English",
      "author": "Bernerd Allmon",
      "price": 15000,
      "genre": [
        "Travel",
        "Drama",
        "Adventure"
      ],
      "stock": 15,
      "createdDate": "07/04/23"
    },
    {
      "id": 22,
      "title": "Griffon in Action",
      "sumary": "Although several options exist for interface development in Java, even popular UI toolkits like Swing have been notoriously complex and difficult to use. Griffon, an agile framework that uses Groovy to simplify Swing, makes UI development dramatically faster and easier. In many respects, Griffon is for desktop development what Grails is for web development. While it's based on Swing, its declarative style and approachable level of abstraction is instantly familiar to developers familiar with other technologies such as Flex or JavaFX.    Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development. In this book, you'll immediately dive into Griffon. After a Griffon orientation and a quick Groovy tutorial, you'll start building examples that explore Griffon's high productivity approach to Swing development. One of the troublesome parts of Swing development is the amount of Java code that is required to get a simple application off the ground.    You'll learn how SwingBuilder (and its cousin builders) present a very palatable alternative in the form of a DSL geared towards building graphical user interfaces. Pair it up with the convention over configuration paradigm, a well tested and tried application source structure (based on Grails) and you have a recipe for quick and effective Swing application development. Griffon in Action covers declarative view development, like the one provided by JavaFX Script, as well as the structure, architecture and life cycle of Java application development",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/almiray.jpg",
      "print_length": "375 pages",
      "language": "English",
      "author": "",
      "price": 15000,
      "genre": [
        "Horror",
        "Fiction"
      ],
      "stock": 17,
      "createdDate": "15/05/23"
    },
    {
      "id": 23,
      "title": "OSGi in Depth",
      "sumary": "A good application framework greatly simplifies a developer's task by providing reusable code modules that solve common, tedious, or complex tasks. Writing a great framework requires an extraordinary set of skills-ranging from deep knowledge of a programming language and target platform to a crystal-clear view of the problem space where the applications to be developed using the framework will be used.    OSGi Application Frameworks shows a Java developer how to build frameworks based on the OSGi service platform. OSGi, an emerging Java-based technology for developing modular applications, is a great tool for framework building. A framework itself, OSGi allows the developer to create a more intuitive, modular framework by isolating many of the key challenges the framework developer faces.    This book begins by describing the process, principles, and tools you must master to build a custom application framework. It introduces the fundamental concepts of OSGi, and then shows you how to put OSGi to work building various types of frameworks that solve specific development problems.    OSGi is particularly useful for building frameworks that can be easily extended by developers to create domain-specific applications. This book teaches the developer to break down a problem domain into its abstractions and then use OSGi to create a modular framework solution. Along the way, the developer learns software engineering practices intrinsic to framework building that result in systems with better software qualities, such as flexibility, extensibility, and maintainability.    Author Alexandre Alves guides you through major concepts, such as the definition of programming models and modularization techniques, and complements them with samples that have real applicability using industry-proved technologies, such as Spring-DM and Equinox.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alves.jpg",
      "print_length": "325 pages",
      "language": "English",
      "author": "Alexandre de Castro Alves",
      "price": 14000,
      "genre": [
        "Biography",
        "Poetry"
      ],
      "stock": 13,
      "createdDate": "03/01/23"
    },
    {
      "id": 24,
      "title": "Flexible Rails",
      "sumary": "Rails is a fantastic tool for web application development, but its Ajax-driven interfaces stop short of the richness you gain with a tool like Adobe Flex. Simply put, Flex is the most productive way to build the UI of rich Internet applications, and Rails is the most productive way to rapidly build a database-backed CRUD application. Together, they're an amazing combination.    Flexible Rails is a book about how to use Ruby on Rails and Adobe Flex to build next-generation rich Internet applications (RIAs). The book takes you to the leading edge of RIA development, presenting examples in Flex 3 and Rails 2.    This book is not an exhaustive Ruby on Rails tutorial, nor a Flex reference manual. (Adobe ships over 3000 pages of PDF reference documentation with Flex.) Instead, it's an extensive tutorial, developed iteratively, how to build an RIA using Flex and Rails together. You learn both the specific techniques you need to use Flex and Rails together as well as the development practices that make the combination especially powerful.    The example application built in the book is MIT-licensed, so readers can use it as the basis for their own applications. In fact, one reader has already built an agile project management tool based on the book example!    With this book, you learn Flex by osmosis. You can read the book and follow along even if you have never used Flex before. Consider it \"Flex Immersion.\" You absorb the key concepts of Flex as you go through the process of building the application.    You will also learn how Flex and Rails integrate with HTTPService and XML, and see how RESTful Rails controller design gracefully supports using the same controller actions for Flex and HTML clients. The author will show you how Cairngorm can be used to architect larger Flex applications, including tips to use Cairngorm in a less verbose way with HTTPService to talk to Rails.    Flexible Rails is for both Rails developers who are interested in Flex, and Flex developers who are interested in Rails. For a Rails developer, Flex allows for more dynamic and engaging user interfaces than are possible with Ajax. For a Flex developer, Rails provides a way to rapidly build the ORM and services layer of the application.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong.jpg",
      "print_length": "592 pages",
      "language": "English",
      "author": "Peter Armstrong",
      "price": 10000,
      "genre": [
        "Fantasy",
        "Adventure",
        "Poetry"
      ],
      "stock": 11,
      "createdDate": "25/04/23"
    },
    {
      "id": 25,
      "title": "Hello! Flex 4",
      "sumary": "With Flex 4 you can easily add color and life to your web applications by introducing dynamic user features, slick transitions, and eye-catching animations. Flex also provides powerful data handling capabilities so you can build industrial-strength applications. And it's open source, so you can get started without forking over a lot of your hard-earned cash.    We think it should be just as much fun to learn Flex as it is to use Flex. Hello! Flex 4 shows you everything you need to know to get started with Flex 4 without bogging you down in obscure detail or academic edge cases. In this entertaining, hands-on book, you'll quickly move from Hello World into the techniques you'll need to use Flex effectively.    You'll start by progressing through 26 self-contained workshop items, which include everything from small one-page examples, to a 3D rotating haiku, to building a Connect Four game. Finally, in the last chapter you'll build a full Flex application called 'SocialStalkr': an interesting mashup of Twitter and Yahoo Maps that lets you 'stalk' your friends by showing specially formatted Twitter tweets on a Yahoo map.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong3.jpg",
      "print_length": "258 pages",
      "language": "English",
      "author": "Peter Armstrong",
      "price": 15000,
      "genre": [
        "Thriller",
        "Self-help"
      ],
      "stock": 13,
      "createdDate": "05/04/23"
    },
    {
      "id": 26,
      "title": "Coffeehouse",
      "sumary": "Coffeehouse is an anthology of stories, poems and essays originally published on the World Wide Web. The purpose is to capture the zeitgeist of the web's creative community, and to give readers a chance to enjoy some of the best and most notable original works that have appeared in this form. It showcases over forty individual web writers, among them Joseph Squier, Martha Conway, Jason Snell, David Alexander, Carl Steadman and Walter Miller. The intent is to show the variety and vitality of the web's blossoming literary \"scene,\" and to capture the unique and highly iconoclastic \"personality\" of the web community.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/asher.jpg",
      "print_length": "316 pages",
      "language": "English",
      "author": "Christian Crumlish",
      "price": 11000,
      "genre": [
        "Cookbooks",
        "Psychology",
        "Drama"
      ],
      "stock": 18,
      "createdDate": "16/03/23"
    },
    {
      "id": 27,
      "title": "Brownfield Application Development in .NET",
      "sumary": "It's easy to get excited about building a new software project from scratch. So-called \"greenfield\" projects often involve learning new technology and the opportunity for experimentation. Working on established software projects may seem less glamorous.    Most software developers have inherited a monolithic application where the day-to-day tasks involve maintenance, incremental improvements, or even cleaning up the mess another programmer left behind. These legacy or brownfield projects often have tightly coupled components, low cohesion, and poor separation of concerns, making them fragile and resistant to change.    Brownfield Application Development in .Net shows you how to approach legacy applications with the state-of-the-art concepts, patterns, and tools you've learned to apply to new projects. Using an existing application as an example, this book guides you in applying the techniques and best practices you need to make it more maintainable and receptive to change.    Starting with the build process and the introduction of unit tests, the authors show you how to set up the application so that in later chapters, you can make incremental changes aimed at decoupling components from each other. Each practice introduced will increase your confidence and ability to make subsequent changes to your code.    As the book proceeds, the authors introduce frameworks and tools commonly used today while still approaching the subject from a conceptual level so that you can substitute alternate tools as appropriate. This book examines the reasons why a tool is necessary, not the tool itself. Because the book is based on the authors' experiences, Brownfield Application Development in .Net moves beyond the theories and shows you the techniques you need to be successful.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/baley.jpg",
      "print_length": "550 pages",
      "language": "English",
      "author": "Donald Belcham",
      "price": 16000,
      "genre": [
        "Cookbooks",
        "Poetry",
        "Science",
        "History"
      ],
      "stock": 11,
      "createdDate": "07/03/23"
    },
    {
      "id": 28,
      "title": "Jaguar Development with PowerBuilder 7",
      "sumary": "Jaguar Development with PowerBuilder 7 is the definitive guide to distributed application development with PowerBuilder. It is the only book dedicated to preparing PowerBuilder developers for Jaguar applications and has been approved by Sybase engineers and product specialists who build the tools described in the book.    Jaguar Development with PowerBuilder 7 focuses on getting you up to speed on Jaguar and PowerBuilder, and it is packed with code samples to guide you every step of the way. It covers each step involved in application development, from setting up the development environment to deploying a production application.    Even a PowerBuilder developer with no experience in distributed technologies or Jaguar CTS will learn what it takes to build an application. Jaguar Development with PowerBuilder 7 covers:    Developing Component-centric Applications  Building Jaguar CTS Components/Clients  CORBA  Adaptive SQL Anywhere  Adaptive Server Enterprise  and lots more!",
      "book_url": "https://m.media-amazon.com/images/I/51JD1A263SL._SY466_.jpg",
      "print_length": "550 pages",
      "language": "English",
      "author": "Michael Barlotta",
      "price": 17000,
      "genre": [
        "Thriller",
        "Science",
        "Mystery",
        "Psychology"
      ],
      "stock": 16,
      "createdDate": "22/04/23"
    },
    {
      "id": 29,
      "title": "Hibernate in Action",
      "sumary": "Hibernate practically exploded on the Java scene. Why is this open-source tool so popular  Because it automates a tedious task: persisting your Java objects to a relational database. The inevitable mismatch between your object-oriented code and the relational database requires you to write code that maps one to the other. This code is often complex, tedious and costly to develop. Hibernate does the mapping for you.    Not only that, Hibernate makes it easy. Positioned as a layer between your application and your database, Hibernate takes care of loading and saving of objects. Hibernate applications are cheaper, more portable, and more resilient to change. And they perform better than anything you are likely to develop yourself.    Hibernate in Action carefully explains the concepts you need, then gets you going. It builds on a single example to show you how to use Hibernate in practice, how to deal with concurrency and transactions, how to efficiently retrieve objects and use caching.    The authors created Hibernate and they field questions from the Hibernate community every day - they know how to make Hibernate sing. Knowledge and insight seep out of every pore of this book.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer.jpg",
      "print_length": "400 pages",
      "language": "English",
      "author": "Gavin King",
      "price": 13000,
      "genre": [
        "Adventure",
        "Thriller",
        "Biography",
        "Fantasy"
      ],
      "stock": 14,
      "createdDate": "05/06/23"
    },
    {
      "id": 30,
      "title": "Java Persistence with Hibernate",
      "sumary": "Persistence -- the ability of data to outlive an instance of a program -- is central to modern applications. Hibernate, the most popular Java persistence tool, provides automatic and transparent object/relational mapping so it's a snap to work with SQL databases in Java applications. Hibernate conforms to the new EJB 3.0 and Java Persistence 1.0 standards.    Java Persistence with Hibernate explores Hibernate by developing an application that ties together hundreds of individual examples. You'll immediately dig into the rich programming model of Hibernate 3.2 and Java Persistence, working through queries, fetching strategies, caching, transactions, conversations, and more. You'll also appreciate the well-illustrated discussion of best practices in database design, object/relational mapping, and optimization techniques.    In this revised edition of Manning's bestselling Hibernate in Action, authors Christian Bauer and Gavin King -- the founder of the Hibernate project -- cover Hibernate 3.2 in detail along with the EJB 3.0 and Java Persistence 1.0 standards.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer2.jpg",
      "print_length": "880 pages",
      "language": "English",
      "author": "Christian Bauer",
      "price": 19000,
      "genre": [
        "Drama",
        "Philosophy",
        "Psychology"
      ],
      "stock": 10,
      "createdDate": "13/03/23"
    },
    {
      "id": 31,
      "title": "iBATIS in Action",
      "sumary": "Unlike some complex and invasive persistence solutions, iBATIS keeps O/RM clean and simple. It is an elegant persistence framework that maps classes to SQL statements and keeps the learning curve flat. The iBATIS approach makes apps easy to code, test, and deploy. You write regular SQL and iBATIS gives you standard objects for persistence and retrieval. There   s no need to change existing database schemas   iBATIS is tolerant of legacy databases (even badly designed ones).    iBATIS in Action is a comprehensive tutorial on the framework and an introduction to the iBATIS philosophy. Clinton Begin and coauthors lead you through the core features, including configuration, statements, and transactions. Because you   ll need more than the basics, it explores sophisticated topics like Dynamic SQL and data layer abstraction. You   ll also learn a useful skill: how to extend iBATIS itself. A complete, detailed example shows you how to put iBATIS to work. Topics are clearly organized and easily accessible for reference.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/begin.jpg",
      "print_length": "384 pages",
      "language": "English",
      "author": "Clinton Begin",
      "price": 11000,
      "genre": [
        "Adventure",
        "Health & Fitness"
      ],
      "stock": 18,
      "createdDate": "08/01/23"
    },
    {
      "id": 32,
      "title": "Hibernate Search in Action",
      "sumary": "Good search capability is one of the primary demands of a business application. Engines like Lucene provide a great starting point, but with complex applications it can be tricky to implement. It's tough to keep the index up to date, deal with the mismatch between the index structure and the domain model, handle querying conflicts, and so on.    Hibernate Search is an enterprise search tool based on Hibernate Core and Apache Lucene. It provides full text search capabilities for Hibernate-based applications without the infrastructural code required by other search engines. With this free, open-source technology, you can quickly add high-powered search features in an intelligent, maintainable way.    Hibernate Search in Action is a practical, example-oriented guide for Java developers with some background in Hibernate Core. As the first book to cover Hibernate Search, it guides you through every step to set up full text search functionality in your Java applications. The book also introduces core search techniques and reviews the relevant parts of Lucene, in particular the query capabilities.    Hibernate Search in Action also provides a pragmatic, how-to exploration of more advanced topics such as Search clustering. For anyone using Hibernate or JBoss Seam, this book is the definitive guide on how to add or enhance search features in their applications.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bernard.jpg",
      "print_length": "488 pages",
      "language": "English",
      "author": "John Griffin",
      "price": 16000,
      "genre": [
        "Psychology",
        "Poetry",
        "Philosophy",
        "Romance"
      ],
      "stock": 16,
      "createdDate": "12/02/23"
    },
    {
      "id": 33,
      "title": "jQuery in Action",
      "sumary": "A really good web development framework anticipates your needs. jQuery does more   it practically reads your mind. Developers fall in love with this JavaScript library the moment they see 20 lines of code reduced to three. jQuery is concise and readable. Its unique    chaining    model lets you perform multiple operations on a page element in succession, as in  (   div.elements   ).addClass(   myClass   ).load(   ajax_url   ).fadeIn()    jQuery in Action is a fast-paced introduction and guide. It shows you how to traverse HTML documents, handle events, perform animations, and add Ajax to your web pages. The book's unique    lab pages    anchor the explanation of each new concept in a practical example. You'll learn how jQuery interacts with other tools and frameworks and how to build jQuery plugins. This book requires a modest knowledge of JavaScript and Ajax.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bibeault.jpg",
      "print_length": "376 pages",
      "language": "English",
      "author": "Bear Bibeault",
      "price": 11000,
      "genre": [
        "History",
        "Cookbooks"
      ],
      "stock": 12,
      "createdDate": "07/06/23"
    },
    {
      "id": 34,
      "title": "jQuery in Action, Second Edition",
      "sumary": "A really good web development framework anticipates your needs. jQuery does more   it practically reads your mind. Developers fall in love with this JavaScript library the moment they see 20 lines of code reduced to three. jQuery is concise and readable. Its unique \"chaining\" model lets you perform multiple operations on a page element in succession. And with version 1.4, there's even more to love about jQuery, including new effects and events, usability improvements, and more testing options.    jQuery in Action, Second Edition is a fast-paced introduction and guide. Building on the bestselling first edition, it adds new examples, more labs, and deeper explanations of important features. You   ll learn how to traverse HTML documents, handle events, perform animations, and add Ajax to your web pages. The book's unique \"lab pages\" anchor the explanation of each new concept in a practical example. You'll learn how jQuery interacts with other tools and frameworks and how to build jQuery plugins. This book requires a modest knowledge of JavaScript and Ajax.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bibeault2.jpg",
      "print_length": "488 pages",
      "language": "English",
      "author": "Yehuda Katz",
      "price": 10000,
      "genre": [
        "Travel",
        "Mystery",
        "History",
        "Romance"
      ],
      "stock": 17,
      "createdDate": "28/03/23"
    },
    {
      "id": 35,
      "title": "Building Secure and Reliable Network Applications",
      "sumary": "As the \"network is the computer\" slogan becomes reality so reliability and security of networked applications become more important. Not only are hospitals, air traffic control systems, and telephone networks becoming more networked, but business applications are increasingly based on the open world of the Internet. Stability in the face of minor accidents, software or hardware failures, or outright attack has become vital. This book provides a structured approach to the technologies currently available for building reliable solutions to these problems.    Building Secure and Reliable Network Applications reviews the most important network technologies from a security and reliability perspective and discusses the most effective solutions with an eye towards their application to real-world systems. Any computing professional who works with networked software will find this book valuable in understanding security and reliability vulnerabilities and how to address them.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/birman.jpg",
      "print_length": "591 pages",
      "language": "English",
      "author": "Kenneth P. Birman",
      "price": 20000,
      "genre": [
        "Horror",
        "Adventure",
        "Science Fiction"
      ],
      "stock": 19,
      "createdDate": "19/05/23"
    },
    {
      "id": 36,
      "title": "Ruby for Rails",
      "sumary": "Ruby for Rails helps Rails developers achieve Ruby mastery. Each chapter deepens your Ruby knowledge and shows you how it connects to Rails. You   ll gain confidence working with objects and classes and learn how to leverage Ruby   s elegant, expressive syntax for Rails application power. And you'll become a better Rails developer through a deep understanding of the design of Rails itself and how to take advantage of it.    Newcomers to Ruby will find a Rails-oriented Ruby introduction that   s easy to read and that includes dynamic programming techniques, an exploration of Ruby objects, classes, and data structures, and many neat examples of Ruby and Rails code in action.    Ruby for Rails: the Ruby guide for Rails developers!",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/black.jpg",
      "print_length": "532 pages",
      "language": "English",
      "author": "David A. Black",
      "price": 13000,
      "genre": [
        "Health & Fitness",
        "Self-help"
      ],
      "stock": 13,
      "createdDate": "22/05/23"
    },
    {
      "id": 37,
      "title": "The Well-Grounded Rubyist",
      "sumary": "Interest in Ruby has exploded. Developers discovering this elegant, dynamic language quickly learn that Ruby is a powerful alternative to traditional static languages like Java or C++. It runs in most operating environments and can handle virtually any programming task you throw at it. Ruby code is clean and elegant. Best of all, Ruby is dynamic, which means that it's designed to react at runtime to changes in an application's environment or requirements.    The Well-Grounded Rubyist takes you from interested novice to proficient practitioner. It's a beautifully written tutorial that begins with the basic steps to get your first Ruby program up and running and goes on to explore sophisticated topics like callable objects, reflection, and threading The book concentrates on the language, preparing you for any way you may choose to use Ruby. Whether the topic is simple or tough, the book's easy-to-follow examples and explanations give you immediate confidence as you build your Ruby programming skills.    The Well-Grounded Rubyist is a thoroughly revised and updated edition of the best-selling Ruby for Rails. In this new book, expert author David A. Black moves beyond Rails and presents a broader view of Ruby. It covers Ruby 1.9, and keeps the same sharp focus and clear writing that made Ruby for Rails stand out.    It's no wonder one reader commented: \"The technical depth is just right to not distract beginners, yet detailed enough for more advanced readers.\"",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/black2.jpg",
      "print_length": "520 pages",
      "language": "English",
      "author": "David A. Black",
      "price": 14000,
      "genre": [
        "Science Fiction",
        "Travel",
        "Health & Fitness",
        "Fiction"
      ],
      "stock": 11,
      "createdDate": "26/02/23"
    },
    {
      "id": 38,
      "title": "Website Owner's Manual",
      "sumary": "Just because you're responsible for your organization's web presence doesn't mean you know how to build a website. The job of planning, launching, and managing a site often falls to people who have little or no experience in web design or development. Website Owner's Manual is a book for the thousands of marketers, IT managers, project leaders, and business owners who need to put a website in place and keep it running with a minimum of trouble.    Website Owner's Manual helps you form a vision for your site, guides you through the process of selecting a web design agency, and gives you enough background information to make intelligent decisions throughout the development process. This book provides a jargon-free overview of web design, including accessibility, usability, online marketing, and web development techniques. You'll gain a practical understanding of the technologies, processes, and ideas that drive a successful website.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/boag.jpg",
      "print_length": "296 pages",
      "language": "English",
      "author": "Paul A. Boag",
      "price": 13000,
      "genre": [
        "Cookbooks",
        "Poetry",
        "Fiction",
        "Thriller"
      ],
      "stock": 10,
      "createdDate": "12/04/23"
    },
    {
      "id": 39,
      "title": "ASP.NET 4.0 in Practice",
      "sumary": "ASP.NET is an established technology to build web applications using Microsoft products. It drives a number of enterprise-level web sites around the world, but it can be scaled for projects of any size. The new version 4.0 is an evolutionary step: you will find a lot of new features that you will be able to leverage to build better web applications with minimal effort.    ASP.NET 4.0 in Practice contains real world techniques from well-known professionals who have been using ASP.NET since the first previews. Using a practical Problem-Solution-Discussion format, it will guide you through the most common scenarios you will face in a typical ASP.NET application, and provide solutions and suggestions to take your applications to another level.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bochicchio.jpg",
      "print_length": "504 pages",
      "language": "English",
      "author": "",
      "price": 14000,
      "genre": [
        "Poetry",
        "Self-help",
        "Psychology",
        "Fiction"
      ],
      "stock": 17,
      "createdDate": "28/03/23"
    },
    {
      "id": 40,
      "title": "Hello! Python",
      "sumary": "Learn Python the fast and fun way! Hello! Python is a fully-illustrated, project-driven tutorial designed to get you up and running with Python, no experience required. It's full of projects that help you learn the way most programmers do   one step at a time, starting with the basics, and then applying your new skills in useful programs.    Hello! Python fully covers the building blocks of Python programming and gives you a gentle introduction to more advanced topics such as object oriented programming, functional programming, network programming, and program design. New (or nearly new) programmers will learn most of what they need to know to start using Python immediately.    The book presents several practical projects, including games, business, and graphical applications. Each example provides a solid base for you to develop your own programs. As you dig into Python, you'll see how programs are created, and the reasons behind the technical decisions.    The book covers Python's large standard library gradually and in the context of sample apps, so the reader isn't overwhelmed with a large number of library functions to absorb all at once. Upon completing the book, the reader will have a good grasp of Python, know several technologies and libraries related to Python and be able to identify many resources for future growth as a programmer.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/briggs.jpg",
      "print_length": "350 pages",
      "language": "English",
      "author": "Anthony Briggs",
      "price": 18000,
      "genre": [
        "Thriller",
        "Mystery",
        "Adventure",
        "Biography"
      ],
      "stock": 19,
      "createdDate": "26/05/23"
    },
    {
      "id": 41,
      "title": "iPhone in Action",
      "sumary": "The iPhone explodes old ideas of a cell phone. Its native SDK offers a remarkable range of features including easy-to-build graphical objects, a unique navigation system, and a built-in database, all on a location-knowledgeable device. Websites and web apps can now behave like native iPhone apps, with great network integration.    iPhone in Action is an in-depth introduction to both native and web programming for the iPhone. You'll learn how to turn your web pages into compelling iPhone web apps using WebKit, iUI, and Canvas. The authors also take you step by step into more complex Objective-C programming. They help you master the iPhone SDK including its UI and features like accelerometers, GPS, the Address Book, SQLite, and many more. Using Apple's standard tools like Dashcode, Xcode, and Interface Builder, you'll learn how to best use both approaches: iPhone web and SDK programming.    This book is intended as an introduction to its topics. Proficiency with C, Cocoa, or Objective-C is helpful but not required.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/callen.jpg",
      "print_length": "472 pages",
      "language": "English",
      "author": "Christopher Allen",
      "price": 17000,
      "genre": [
        "Biography",
        "Comics & Graphic Novels",
        "Drama"
      ],
      "stock": 18,
      "createdDate": "11/03/23"
    },
    {
      "id": 42,
      "title": "Silverlight 2 in Action",
      "sumary": "Microsoft describes Silverlight as a \"cross-browser, cross-platform plug-in for delivering the next generation of .NET based media experiences and rich interactive applications for the Web.\" That's a really boring description for a really exciting new technology. Anyone who has looked at the demos and gotten a taste of what Silverlight can do knows that Silverlight represents an entirely new level of rich web interface technology for Microsoft developers. With Silverlight 2, developers can use JavaScript, VB, C#, Python, and Ruby to build user-friendly, interactive, and visually-dazzling web applications that work in most major browsers.    Silverlight 2 in Action is the first book to cover Silverlight 2, a far more robust implementation of Silverlight than the current 1 release that supports only JavaScript. The much-anticipated 2 release adds powerful new features along with the ability to code in multiple languages and integrate your work with Visual Studio and the new Expression suite of tools. This book delivers real-world examples and in-depth walkthroughs to help you confidently enhance your web applications using Silverlight 2.    Silverlight 2 in Action devotes extensive coverage to flexible layout components, the extensible control model, the communication framework, and the data-binding features   all cornerstones of software development. Author and Microsoft MVP Chad Campbell also describes rich media and vivid graphical and animation features. The final chapters include a variety of Silverlight deployment scenarios.    In addition to the fundamentals of Silverlight, you'll be introduced to architectural components such as the Silverlight object model. The book addresses the developer/designer collaboration model Silverlight enables, showing the developer how to include the designer effectively in the project workflow. This model is illustrated throughout the examples.    For ongoing reader support, the author will maintain a dedicated book-support website providing up-to-the-minute working examples, complete with source code, all in Silverlight.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/campbell.jpg",
      "print_length": "400 pages",
      "language": "English",
      "author": "Chad A. Campbell",
      "price": 14000,
      "genre": [
        "Comics & Graphic Novels",
        "Travel"
      ],
      "stock": 11,
      "createdDate": "04/01/23"
    },
    {
      "id": 43,
      "title": "The Quick Python Book, Second Edition",
      "sumary": "This revision of Manning's popular The Quick Python Book offers a clear, crisp introduction to the elegant Python programming language and its famously easy-to-read syntax. Written for programmers new to Python, this updated edition covers features common to other languages concisely, while introducing Python's comprehensive standard functions library and unique features in detail.    After exploring Python's syntax, control flow, and basic data structures, the book shows how to create, test, and deploy full applications and larger code libraries. It addresses established Python features as well as the advanced object-oriented options available in Python 3. Along the way, you'll survey the current Python development landscape, including GUI programming, testing, database access, and web frameworks.    WHAT'S INSIDE:        * Concepts and Python 3 features      * Regular expressions and testing      * Python tools      * All the Python you need   nothing you don't",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ceder.jpg",
      "print_length": "360 pages",
      "language": "English",
      "author": "Naomi R. Ceder",
      "price": 19000,
      "genre": [
        "Horror",
        "Poetry"
      ],
      "stock": 12,
      "createdDate": "27/01/23"
    },
    {
      "id": 44,
      "title": "Mobile Agents",
      "sumary": "Mobile Agents is the first book to give the reader the ability to create and use powerful mobile agents on the Internet. The book presents the reality of today's agent technologies and the future that this technology promises. It teaches how to create and deploy the major mobile agent systems (Telescript, Agent Tcl, Ara, Aglets Workbench) and how to solve a variety of problems on the Internet. Each of the chapters was written in collaboration with the original developers of the agent systems.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cockayne.jpg",
      "print_length": "320 pages",
      "language": "English",
      "author": "editors",
      "price": 19000,
      "genre": [
        "Thriller",
        "Travel"
      ],
      "stock": 15,
      "createdDate": "29/04/23"
    },
    {
      "id": 45,
      "title": "Spring Dynamic Modules in Action",
      "sumary": "OSGi is increasingly familiar to Java coders working in distributed environments, but the tools required to implement OSGi-based systems have been slow to develop. Spring Dynamic Modules (Spring DM) is a framework designed to make it easy to build Spring apps that take advantage of the OSGi approach to modular Java development. It simplifies the task of creating true component and service oriented architectures in an OSGi environment using all the powerful features of the Spring framework.    Spring Dynamic Modules in Action introduces Spring DM and OSGi to Java EE developers and architects. It presents the fundamental concepts of OSGi-based apps and maps them to the familiar ideas of the Spring framework. Then, it engages you with the techniques and concepts you'll need to develop stable, flexible enterprise apps. You'll learn how to embed a Spring container inside an OSGi bundle, and how Spring DM lets you blend Spring strengths like dependency injection with OSGi-based services. Along the way, you'll see how Spring DM handles data access and web-based components, and you'll explore topics like unit testing and configuration in an OSGi-based environment.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cogoluegnes.jpg",
      "print_length": "450 pages",
      "language": "English",
      "author": "Thierry Templier",
      "price": 19000,
      "genre": [
        "Travel",
        "Fantasy",
        "Biography",
        "Comics & Graphic Novels"
      ],
      "stock": 10,
      "createdDate": "26/05/23"
    },
    {
      "id": 46,
      "title": "Android in Practice",
      "sumary": "Android, Google's platform for mobile application development, provides powerful features, a robust SDK, and almost limitless possibilities. It's not hard to find the information you need to build your first Android app, but then what  If you want to build real apps for real users, you have real questions and you need real answers.    Android in Practice is treasure trove of Android goodness, with over 100 tested, ready-to-use techniques including complete end-to-end example applications and practical tips for real world mobile application developers. Written by real world Android developers, this book addresses the trickiest questions raised in forums and mailing lists. Using an easy-to-follow problem/solution/discussion format, it dives into important topics not covered in other Android books, like advanced drawing and graphics, testing and instrumentation, building and deploying applications, using alternative languages, and native development.    If you're new to Android, or even if you have a few cycles under your belt, you'll love the quick \"pre-flight check,\" where you'll review key platform details and tools and the building blocks of all Android applications. Then, you'll delve into Android use cases   from visual elements and style, to saving and sharing data, networking, background tasks, concurrency, and more.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/collins.jpg",
      "print_length": "500 pages",
      "language": "English",
      "author": "",
      "price": 13000,
      "genre": [
        "Travel",
        "Philosophy",
        "Thriller",
        "Biography"
      ],
      "stock": 18,
      "createdDate": "24/03/23"
    },
    {
      "id": 47,
      "title": "POJOs in Action",
      "sumary": "There is agreement in the Java community that EJBs often introduce more problems than they solve. Now there is a major trend toward lightweight technologies such as Hibernate, Spring, JDO, iBATIS, and others, all of which allow the developer to work directly with the simpler Plain Old Java Objects, or POJOs. Bowing to the new consensus, EJB 3 now also works with POJOs.    POJOs in Action describes these new, simpler, and faster ways to develop enterprise Java applications. It shows you how to go about making key design decisions, including how to organize and encapsulate the domain logic, access the database, manage transactions, and handle database concurrency.    Written for developers and designers, this is a new-generation Java applications guide. It helps you build lightweight applications that are easier to build, test, and maintain. The book is uniquely practical with design alternatives illustrated through numerous code example",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crichardson.jpg",
      "print_length": "592 pages",
      "language": "English",
      "author": "Chris Richardson",
      "price": 16000,
      "genre": [
        "Health & Fitness",
        "History",
        "Fantasy",
        "Mystery"
      ],
      "stock": 16,
      "createdDate": "28/01/23"
    },
    {
      "id": 48,
      "title": "Hello! HTML5 & CSS3",
      "sumary": "HTML and CSS are the foundation of the web, and HTML5 and CSS3 are the latest standards. If you build web pages, mobile apps, or do any type of development at all, you'll have to learn HTML5 and CSS3, so why not start now  Quick and Easy HTML5 and CSS3 will give you a smart, snappy, and fun introduction to building web sites with these really cool new tools.    Quick and Easy HTML5 and CSS3 is written for the web designer or developer who wants a fast, example-oriented introduction to the new HTML and CSS features. After a quick review of the basics, you'll turn to what's new. Start by learning to apply important new elements and attributes by building your first real HTML5 pages. You'll then take a quick tour through the new APIs: Form Validation, Canvas, Drag & Drop, Geolocation and Offline Applications. You'll also discover how to include video and audio on your pages without plug-ins, and how to draw interactive vector graphics with SVG.    Once you've explored the fundamentals of HTML5, it's time to add some style to your pages with CSS3. New CSS features include drop shadows, borders, colors, gradients and backgrounds. In addition, you'll learn to layout your pages with the new flexible box and layout modules, and add the finishing touches with custom fonts. You'll also see how to target specific devices with media queries, and do all of it with less code thanks to the new selectors and pseudo classes.    Finally you will walk through several large examples where you see all the features of HTML5 and CSS3 working together to produce responsive and lightweight applications which you can interact with just like native desktop apps.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crowther.jpg",
      "print_length": "325 pages",
      "language": "English",
      "author": "Rob Crowther",
      "price": 17000,
      "genre": [
        "Romance",
        "Fantasy",
        "Horror"
      ],
      "stock": 13,
      "createdDate": "03/06/23"
    },
    {
      "id": 49,
      "title": "Seam in Action",
      "sumary": "Seam is an exciting new application framework based on the Java EE platform that you can use to build rich, web-based business applications. Seam is rapidly capturing the interest of Java enterprise developers because of its focus on simplicity, ease of use, transparent integration, scalability, and developer choice.    Seam in Action offers a practical and in-depth look at Seam from outside the walls of RedHat/JBoss. The book puts Seam head-to-head with the complexities in the Java EE architecture. It discusses the shortcomings of JSF, the challenges of using Java persistence in the web environment, and other common development roadblocks, then shows how Seam makes these problems just melt away. In covering Seam, the author doesn't just ask you to sprinkle annotations on your code and expect that you understand how it works. Instead, the author lays down the facts, shows you the steps, reveals the logic, and diagrams the flow, so that by the end of the book, you will not only have gained a deep understanding of Seam, but will also come away ready to teach the material to others.    All too often, developers spend a majority of their time integrating disparate technologies, manually tracking state, struggling to understand JSF, wrestling with Hibernate exceptions, and constantly redeploying applications, rather than on the logic pertaining to the business at hand. Seam in Action dives deep into thorough explanations of how Seam eliminates these non-core tasks by leveraging configuration by exception, Java 5 annotations, and aspect-oriented programming.    To start off, you will see a working Java EE-compliant application come together by the end of the second chapter. As you progress through the book, you will discover how Seam eliminates unnecessary layers and configurations and uses an inversion of control technical known as bijection supplemented by a liberal use of the Unified Expression Language (EL) to establish the missing link between JSF, EJB 3 and JavaBean components. You also witness how Seam opens doors for you to incorporate technologies you previously have not had time to learn, such as business processes and stateful page flows (jBPM), rule-based security, Ajax remoting, PDF generation, Spring integration, and more.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dallen.jpg",
      "print_length": "624 pages",
      "language": "English",
      "author": "Dan Allen",
      "price": 20000,
      "genre": [
        "Self-help",
        "Romance",
        "Thriller",
        "Fantasy"
      ],
      "stock": 10,
      "createdDate": "25/05/23"
    },
    {
      "id": 50,
      "title": "Grails in Action",
      "sumary": "Web apps shouldn't be hard to build, right  The developers of Grails agree. This hyper-productive open-source web framework lets you \"code by convention\", leaving you to focus on what makes your app special. Through its use of Groovy, it gives you a powerful, Java-like language and full access to all Java libraries. And you can adapt your app's behavior at runtime without a server restart.    Grails in Action is a comprehensive guide to the Grails framework. First, the basics: the domain model, controllers, views, and services. Then, the fun! Dive into a Twitter-style app with features like AJAX/JSON, animation, search, wizards   even messaging and Jabber integration. Along the way, you'll discover loads of great plugins that'll make your app shine. Learn to integrate with existing Java systems using Spring and Hibernate. You'll need basic familiarity with Java and the web. Prior experience with Groovy is not necessary.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/gsmith.jpg",
      "print_length": "520 pages",
      "language": "English",
      "author": "Glen Smith",
      "price": 14000,
      "genre": [
        "Thriller",
        "History",
        "Science"
      ],
      "stock": 16,
      "createdDate": "15/05/23"
    },
    {
      "id": 51,
      "title": "Up to Speed with Swing, Second Edition",
      "sumary": "Now in its Second Edition, Up to Speed with Swing is for you if you want to get on the fast track to Java Swing. The second edition has been extensively updated to cover Java 1.2 with additional code examples and illustrations.    Guided by a master programmer who writes Java for a living, you'll learn Swing from the insider's point of view. Up to Speeed with Swing has one purpose: to save you time mastering Swing. From the basics of Swing to creating a custom look and feel, or from the Model View Controller (MVC) architecture to optimizing your Swing code, this tutorial gives you an understanding of the big picture as well as the experience of working through detailed examples.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/gutz2.jpg",
      "print_length": "560 pages",
      "language": "English",
      "author": "Steven Gutz",
      "price": 18000,
      "genre": [
        "Cookbooks",
        "Travel",
        "Thriller"
      ],
      "stock": 16,
      "createdDate": "17/05/23"
    },
    {
      "id": 52,
      "title": "OSGi in Action",
      "sumary": "If you're a Java developer, you've almost certainly heard of OSGi   and also heard that it's becoming quite a big deal. But you may still be wondering exactly \"What is OSGi \"    Simply put, OSGi is a technology that allows you to create highly modular Java applications. It introduces a logical and physical module format, called a bundle, for explicitly structuring your application as a set of interconnected modules. OSGi lets you install, start, stop, update, or uninstall modules at execution time without taking down your entire system. In addition, OSGi defines a local service-oriented approach for creating applications out of loosely coupled components.    With the prevalence of modern component and service-based architectures, OSGi is becoming increasingly important. It meshes well with such approaches and greatly simplifies their creation and management. It's the backbone of Eclipse's plugin system as well as many recent JavaEE containers, such as GlassFish v3, WebSphere v6.1, and WebLogic Event Server. Even the SpringSource Application Platform is built on top of it.    OSGi in Action is a comprehensive guide to OSGi with two primary goals.    First, it provides a clear introduction to OSGi concepts with examples that are relevant both for architects and developers. The central idea of OSGi is modularity, so you start by learning about OSGi bundles.    You'll then see how OSGi handles module lifecycles and follow up with how it promotes service-oriented interaction among application components.    With the core concepts well in hand, you'll explore numerous application scenarios and techniques. How much of OSGi do you actually need  How do you embed OSGi inside other containers  What are the best practices for migrating legacy systems to OSGi  How can you embrace and make the most of system dynamism     Expert authors Richard S. Hall, Karl Pauls, and Stuart McCulloch have years of experience both in building OSGi-based systems and in contributing to OSGi implementations such as Apache Felix.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hall.jpg",
      "print_length": "576 pages",
      "language": "English",
      "author": "Richard S. Hall",
      "price": 12000,
      "genre": [
        "Adventure",
        "Comics & Graphic Novels",
        "Health & Fitness",
        "Fiction"
      ],
      "stock": 17,
      "createdDate": "17/03/23"
    },
    {
      "id": 53,
      "title": "SharePoint 2010 Site Owner's Manual",
      "sumary": "For every SharePoint 2010 developer who spends the day buried in Visual Studio cranking out code, there are dozens of other SharePoint site owners who want to share information, create content portals, and add features to existing SharePoint sites. If you're one of these SharePoint administrators, this is the book for you. Chock-full of great ideas and scenarios you'll relate to immediately, this book will teach you the amazing things you can do with SharePoint 2010 without writing any code   or calling in the developers.    SharePoint 2010 Site Owner's Manual starts by assuming you already have SharePoint installed on your system and are looking for ways to solve the problems you face every day in your organization. You'll learn to determine what type of SharePoint installation you have   Microsoft Office SharePoint Server (MOSS), Windows SharePoint Services (WSS), the \"Fabulous 40\" templates   and what features are at your disposal. Once you know the lay of the land, you'll discover what you can do yourself, when you need to call in some help, and when you should leave it to the developers.    This book teaches you by putting your hands on working SharePoint examples. You'll see seven common SharePoint-driven sites that lay out the features and approaches you'll need for most typical applications. The examples range from a simple document-sharing portal, to a SharePoint-hosted blog, to a project management site complete with a calendar, discussion forums, and an interactive task list.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/harryman.jpg",
      "print_length": "300 pages",
      "language": "English",
      "author": "Yvonne M. Harryman",
      "price": 16000,
      "genre": [
        "Science",
        "Fantasy",
        "History",
        "Comics & Graphic Novels"
      ],
      "stock": 11,
      "createdDate": "18/02/23"
    },
    {
      "id": 54,
      "title": "Java Development with Ant",
      "sumary": "Java Development with Ant systematically explores what Ant can do, and how to apply it to your project. Whether you are new to Ant, or an experienced user, this book will show you powerful and creative uses for Ant. The book emphasizes basic concepts you need to know to effectively use Ant starting with Ant's XML-driven build process. It leads you step-by-step through everything you need to know to compile, test, package and deploy an application. It then guides you through the maze of more complex situations common in larger projects such as enterprise Java applications and Web Services. With this book you will gain access to a powerful tool to automatically build, test and deploy your Java software, no matter how simple or complex it might be.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatcher.jpg",
      "print_length": "672 pages",
      "language": "English",
      "author": "Steve Loughran",
      "price": 15000,
      "genre": [
        "Science",
        "Romance"
      ],
      "stock": 19,
      "createdDate": "22/04/23"
    },
    {
      "id": 55,
      "title": "Lucene in Action, Second Edition",
      "sumary": "When Lucene first hit the scene five years ago, it was nothing short of amazing. By using this open-source, highly scalable, super-fast search engine, developers could integrate search into applications quickly and efficiently. A lot has changed since then   search has grown from a \"nice-to-have\" feature into an indispensable part of most enterprise applications. Lucene now powers search in diverse companies including Akamai, Netflix, LinkedIn, Technorati, HotJobs, Epiphany, FedEx, Mayo Clinic, MIT, New Scientist Magazine, and many others.    Some things remain the same, though. Lucene still delivers high-performance search features in a disarmingly easy-to-use API. It's still a single compact JAR file (less than 1 MB!). Due to its vibrant and diverse open-source community of developers and users, Lucene is relentlessly improving, with evolutions to APIs, significant new features such as payloads, and a huge (as much as 8x) increase in indexing speed with Lucene 3.0.    And with clear writing, reusable examples, and unmatched advice on best practices, Lucene in Action is still the definitive guide to developing with Lucene.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatcher3.jpg",
      "print_length": "532 pages",
      "language": "English",
      "author": "Erik Hatcher",
      "price": 19000,
      "genre": [
        "Psychology",
        "Self-help",
        "Drama"
      ],
      "stock": 17,
      "createdDate": "11/04/23"
    },
    {
      "id": 56,
      "title": "PowerBuilder 6.0 Questions & Answers",
      "sumary": "Demand for PowerBuilder programmers, with the potential they offer for rapid application development, continues to soar. If you'd like to learn PowerBuilder--or enhance your skills-- this book is for you. Its hands-on approach will show you how to write real code. Each section takes a specific \"How do I \" topic and answers commonly asked questions in an easy-to-understand, conversational manner. It then shows you how the same technique can be used over and over again to decrease your overall code-writing time.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatton.jpg",
      "print_length": "446 pages",
      "language": "English",
      "author": "Tim Hatton",
      "price": 16000,
      "genre": [
        "Drama",
        "Fantasy"
      ],
      "stock": 16,
      "createdDate": "27/02/23"
    },
    {
      "id": 57,
      "title": "The Awesome Power of PowerJ",
      "sumary": "PowerJ is the bridge between the rapid application development world of PowerBuilder and the multiplatform world of Java. The Awesome Power of PowerJ shows you how you can write Java programs the very first day with PowerJ, even if you don't know Java. Through a hands-on approach that makes liberal use of figures and code snippets, you will learn how to use PowerJ to build effective Java applets and applications.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatton2.jpg",
      "print_length": "378 pages",
      "language": "English",
      "author": "Tim Hatton",
      "price": 16000,
      "genre": [
        "Adventure",
        "Biography"
      ],
      "stock": 17,
      "createdDate": "16/05/23"
    },
    {
      "id": 58,
      "title": "The Awesome Power of Power++",
      "sumary": "The Awesome Power of Power++ is for the beginning to intermediate Power++ programmer. It assumes that you have little or no knowledge of the C++ language but that you do know programming constructs. The purpose is to teach you how to use Power++ to build C++ applets and applications even if you are not a C++ expert. To this end it takes a hands-on approach and makes liberal use of figures and code snippets.    The Awesome Power of Power++ is for:    * IS Managers who are investigating C++ and C++ environments  * Developers who are wanting to learn C++ and build C++ programs  * Any developer who has a C++ project that must be finished quickly ",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatton3.jpg",
      "print_length": "416 pages",
      "language": "English",
      "author": "Tim Hatton",
      "price": 17000,
      "genre": [
        "Mystery",
        "History"
      ],
      "stock": 16,
      "createdDate": "29/01/23"
    },
    {
      "id": 59,
      "title": "Azure in Action",
      "sumary": "Cloud-based applications pose an intriguing value proposition for businesses. With an easily scalable, pay-as-you-go model and very small startup costs, the cloud can be a great alternative to systems hosted in-house. Developers are scrambling to understand the impact a cloud-based approach will have on current and future projects.    Azure is Microsoft's full-fledged entry into the \"Cloud Services Platform\" arena. Unlike other cloud offerings that address only one piece of the puzzle, Azure includes an operating system, a set of developer services, and a data model that can be used individually or together. It's designed to interact seamlessly with other .NET-based components, and leverages your knowledge of Visual Studio, the .NET platform, and SQL Server. It's also fully compatible with multiple internet protocols, including HTTP, REST, SOAP, and XML.    Azure in Action is a fast-paced tutorial intended for architects and developers looking to develop on Windows Azure and the Windows Azure Platform. It's designed both for readers new to cloud concepts and for those familiar with cloud development but new to Azure. After a quick walk through the basics, it guides you all the way from your first app through more advanced concepts of the Windows Azure Platform.    The book starts by looking at the logical and physical architecture of an Azure app, and then moves to the core storage services   binary store, tables and queues. Then, it explores designing and scaling frontend and backend services that run in the cloud. Next, it covers more advanced scenarios in Windows Azure. After covering the core of Azure, it introduces the rest of the Windows Azure Platform with a particular focus on SQL Azure Database.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hay.jpg",
      "print_length": "425 pages",
      "language": "English",
      "author": "Brian H. Prince",
      "price": 12000,
      "genre": [
        "Psychology",
        "Health & Fitness",
        "Fiction"
      ],
      "stock": 10,
      "createdDate": "05/06/23"
    },
    {
      "id": 60,
      "title": "Code Generation in Action",
      "sumary": "Code Generation In Action covers technique and implementation for building high-quality machine-generated code for today's complex applications frameworks. The book includes step-by-step instruction for building dozens of code generators of varying types. These generators build high-quality output that is consistent and maintainable. Code generation abstracts the design of the code so that multiple outputs can be created from a single model of the application functionality, which means development teams can focus on higher-level design work and strategic problems, while still meeting goals for maintaining production applications.. The book covers techniques that range from simple code processors that handle common coding problems to more elaborate and complex generators that maintain entire application tiers.  Code Generation In Action covers building database access, user interface, remote procedure, test cases, and business logic code as well as code for other key system functions.    Although code generation is an engineering technique it also has a large impact on the engineering team and management. The book discusses the non-technical justifications for code generation in depth, and offers practical advice for making code generation succeed in any organization.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/herrington.jpg",
      "print_length": "350 pages",
      "language": "English",
      "author": "Jack Herrington",
      "price": 16000,
      "genre": [
        "Mystery",
        "Poetry"
      ],
      "stock": 10,
      "createdDate": "26/04/23"
    },
    {
      "id": 61,
      "title": "Camel in Action",
      "sumary": "Apache Camel is a Java-based toolkit that makes it easy to implement services based on standard enterprise integration patterns (EIP). Through a concise, but sophisticated domain specific language (DSL), you can build integration logic in lego style. The Camel DSL is implemented in a range of standard programming languages such as Java, XML, Scala, Groovy, Ruby, and Python.    Camel provides components for using these patterns via commonly used transports such as JMS, HTTP, REST, File/FTP, JPA, SMTP, and more than 50 others. No transport  Camel provides a flexible pluggable architecture to build your own components. Or you can let Camel adapt to your existing libraries without the need to change anything.    Camel in Action is for developers working with integration of any kind. This highly practical book introduces Camel and shows examples of how to use it with the 45+ supported enterprise integration patterns. Written by the people who wrote the Camel code, it's up to date and distills details and insights that only people deeply involved with Camel could provide.    Camel is designed to run in any existing environment without imposing restrictions. This allows you to get started with Camel very easily and reuse existing infrastructure and platforms. Camel can run in many forms such as standalone, web or Spring application, JBI, OSGi, Java EE, in the cloud, and so on. The book includes a technical reference explaining how to use Camel with many platforms.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ibsen.jpg",
      "print_length": "375 pages",
      "language": "English",
      "author": "Jonathan Anstey",
      "price": 15000,
      "genre": [
        "Philosophy",
        "Cookbooks"
      ],
      "stock": 16,
      "createdDate": "26/04/23"
    },
    {
      "id": 62,
      "title": "Taming Text",
      "sumary": "It is no secret that the world is drowning in text and data. This causes real problems for everyday users who need to make sense of all the information available, and software engineers who want to make their text-based applications more useful and user-friendly. Whether you're building a search engine for a corporate website, automatically organizing email, or extracting important nuggets of information from the news, dealing with unstructured text can be a daunting task.    Taming Text is a hands-on, example-driven guide to working with unstructured text in the context of real-world applications. This book explores how to automatically organize text using approaches such as full-text search, proper name recognition, clustering, tagging, information extraction, and summarization. The book guides you through examples illustrating each of these topics, as well as the foundations upon which they are bulit.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ingersoll.jpg",
      "print_length": "350 pages",
      "language": "English",
      "author": "Grant S. Ingersoll",
      "price": 19000,
      "genre": [
        "Adventure",
        "Romance",
        "Biography",
        "Travel"
      ],
      "stock": 19,
      "createdDate": "14/04/23"
    },
    {
      "id": 63,
      "title": "iOS 4 in Action",
      "sumary": "Written for Xcode 4, iOS 4 in Action guides you from setting up your development environment, through coding your first app, all the way to selling in the App Store. Work through sample applications including a chat client, a video game, an interactive map, background audio, and more as you explore the iOS 4 SDK.    Version 4 of the iOS SDK adds powerful new features like multitasking, GCD, blocks, and iAds. With the release of Xcode 4, it's easier than ever to get programming, even if you're new to Objective-C.    iOS 4 in Action, written for Xcode 4, is a detailed, hands-on guide that goes from setting up your development environment, through your first coding steps, all the way to creating a polished, commercial iOS 4 application. You'll run through examples from a variety of areas including a chat client, a video game, an interactive map, and background audio. You'll also learn how the new iOS 4 features apply to your existing iOS 3 based apps. This book will help you become a confident, well-rounded iOS 4 developer.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jharrington.jpg",
      "print_length": "504 pages",
      "language": "English",
      "author": "Christopher Allen",
      "price": 17000,
      "genre": [
        "Philosophy",
        "Mystery",
        "History",
        "Drama"
      ],
      "stock": 16,
      "createdDate": "06/05/23"
    },
    {
      "id": 64,
      "title": "R in Action",
      "sumary": "The ability to interpret and act on the massive amounts of information locked in web and enterprise systems is critical to success in the modern business economy. R, a free software environment for statistical computing and graphics, is a comprehensive, fully-programmable package that empowers developers and analysts to capture, process, and respond intelligently to statistical information. It consists of the interpreted R language plus a run-time environment with graphics, a debugger, and the ability to run programs stored in script files. It compiles and runs on UNIX, Windows and Mac OS X, and has been extended with hundreds of add-on packages.    R in Action is the first book to present both the R system and the use cases that make it such a compelling package for business developers. The book begins by introducing the R language, including the development environment. As you work through various examples illustrating R's features, you'll also get a crash course in practical statistics, including basic and advanced models for normal and non-normal data, longitudinal and survival data, and a wide variety of multivariate methods. Both data mining methodologies and approaches to messy and incomplete data are included.    And data analysis is only half the story. You'll also master R's extensive graphical environment for presenting data. Along the way, the book presents many of R's most useful add-on modules. You'll also learn how to interface R with other software platforms and data management systems for maximum utility.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kabacoff.jpg",
      "print_length": "375 pages",
      "language": "English",
      "author": "Robert I. Kabacoff",
      "price": 18000,
      "genre": [
        "Cookbooks",
        "Fiction"
      ],
      "stock": 15,
      "createdDate": "18/03/23"
    },
    {
      "id": 65,
      "title": "Rails 3 in Action",
      "sumary": "In December 2008, the Merb team announced that they will be collaborating with the Rails core team on the next versions of Merb and Rails. Rather than maintaining parallel tracks, Merb 2 and Rails 3 will merge, preserving the flexible configuration and advanced features that Merb users love along with the rapid productivity and ease-of-use that makes Rails shine. As Engine Yard developer (and Manning author) Yehuda Katz puts it, \"Effectively, Merb 2 is Rails 3.\"    Rails 3 in Action will provide a thorough introduction to Ruby-based web development using Rails. Like Rails 3 itself, this book combines Merb and Rails in the form of authors Yehuda Katz, Merb Lead Developer.    As a developer, you'll benefit from several big advantages to this change:  Rails becomes more modular, by building on rails core with the ability to opt in or out of specific components and making it possible to replace parts of Rails without disturbing other parts.  Merb performance improvements flow into Rails, including benchmarking applications so developers can see which optimizations have real-world impact.  A defined public API with a test suite, so users and plugin developers have a stable API to build against.  A \"core\" version of Rails, like Merb's current core generator, that makes it easy to select just the parts that are important for your app.  DataMapper and Sequel support as first-class ORMs, along with ActiveRecord as the default.  Rack support in Rails 3, to improve the state of modular, sharable logic between applications.  The Rails 3 team is moving full steam ahead building the new version. The Merb team will start working on Rails immediately, and also continue to fix bugs and resolve other major issues in the current release of Merb. Interim versions of Merb will help ease the transition to Rails 3. In particular, Merb releases with deprecation notices and other transitional mechanisms will assist developers in tracking down the changes between Merb 1.x and Rails 3.    If you've already learned Merb, Rails 3 in Action will help you parlay that knowledge into the new Rails code base. If you're a long time Rails developer, it will help you get up to speed with all the new Rails 3 features and changes.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/katz.jpg",
      "print_length": "425 pages",
      "language": "English",
      "author": "Yehuda Katz",
      "price": 14000,
      "genre": [
        "Mystery",
        "Science",
        "History",
        "Philosophy"
      ],
      "stock": 18,
      "createdDate": "30/05/23"
    },
    {
      "id": 66,
      "title": "Continuous Integration in .NET",
      "sumary": "There are three copies of a source file and no-one knows which is the right one. Your carefully-crafted unit tests won't run anymore. The three-year-old requirements doc is totally irrelevant. The boss wants to ship, ship, ship. The team in Austin has no idea what the team in Arlington is up to. You are in integration hell. Ready to try something different     Continuous integration is a software engineering process designed to minimize \"integration hell.\" It's a coordinated development approach that blends the best practices in software delivery: frequent integration, constant readiness, short build feedback cycles, persistent testing, and a flexible approach to developing--and modifying--system requirements. For .NET developers, especially, adopting these new approaches and the tools that support can require rethinking your dev process altogether.    Continuous Integration in .NET is a tutorial for developers and team leads that teaches you to reimagine your development strategy by creating a consistent continuous integration process. This book shows you how to build on the tools you already know--.NET Framework and Visual Studio and to use powerful software like MSBuild, Subversion, TFS 2010, Team City, CruiseControl.NET, NUnit, and Selenium.    Because CI is as much about the culture of your shop as the tooling, this book will help you bridge resistance to adoption by providing clear guidelines for starting and maintaining projects-along with defined metrics for measuring project success. Each author brings a unique set of experiences and practices to create a rich and varied picture of this powerful technique.    WHAT'S INSIDE        * Continuous integration-what is it       * Source control with Subversion and TFS Version Control.      * Continuous integration server with TFS 2010, CruiseControl.NET and TeamCity.      * Automating build with MSBuild.      * Testing with NUnit, Fitnesse and Selenium.      * Database Integration.      * Keeping code tidy with FxCop and StyleCop.      * Generating documentation with Sandcastle.      * Deploying with ClickOnce and WiX.      * Scaling continuous integration.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kawalerowicz.jpg",
      "print_length": "328 pages",
      "language": "English",
      "author": "Craig Berntson",
      "price": 11000,
      "genre": [
        "History",
        "Adventure"
      ],
      "stock": 18,
      "createdDate": "05/01/23"
    },
    {
      "id": 67,
      "title": "Technology Paradise Lost",
      "sumary": "An engine of the world economy, the computer industry is sputtering. What happened  Will it regain its power and again drive economic growth as in the past     No.    That's the surprising conclusion reached by Erik Keller, a central player in the booming IT world of the 1990s. Driven by fear of being left behind, American corporations let IT grow until it reached one half of all corporate capital spending by the year 2000. Now, chastened by their spending failures, IT managers are converging on a new consensus: to exploit IT competitively they must use their smarts over big money.    This shift in thinking comes just as free, open-source software, low-cost international programming labor, and new technologies combine to make the new approach possible.    A former Research Fellow at Gartner, Keller had an insider's view of the irrational spending at many Fortune 500 companies, personally influencing billions of dollars of technology acquisitions.    In Technology Paradise Lost Keller describes how the new thinking is working inside some of the country's most complex and successful organizations, including Merrill Lynch, JetBlue, Harrah's, and Motorola which have cut IT spending to gain a competitive edge, and experienced marked gains to their bottom lines.    As it advances, the new IT think will cause further massive disruptions in the computer business, with fundamental changes in the ways software is developed, sold, and used. Efficiency of IT investment will grow as excess fat is squeezed out of IT salaries, software system costs, and consultants' fees.    In an unexpected twist, Keller argues that even as IT spending is reduced its importance for competitiveness will grow. Reduced spending does not mean IT has become a commodity. Counterintuitively, companies that spend less in order to get more from information technology will likely be the big winners.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/keller.jpg",
      "print_length": "260 pages",
      "language": "English",
      "author": "Erik Keller",
      "price": 14000,
      "genre": [
        "Psychology",
        "Biography",
        "Comics & Graphic Novels",
        "Science"
      ],
      "stock": 19,
      "createdDate": "16/03/23"
    },
    {
      "id": 68,
      "title": "Object Technology Centers of Excellence",
      "sumary": "Object Technology Centers (OTC) are technology transfer catalysts for the rapid development and deployment of object-oriented infrastructure. Object Technology Centers of Excellence provides guidance to those charged with managing the shift to object technology. It is the only book on the market aimed not at the project level but at the corporate level, with a focus on the infrastructures necessary for a successful transition.    This book presents case histories of early adopters of OT, which can help you understand the steps your company must take-and paths it should avoid. Object Technology Centers of Excellence is recommended reading in any organization planning or transitioning to OT, not just involved with formal OTCs. The book includes practical advice for managers, members of technical staffs, and consultants.    The case histories involve some heavy hitters:    IBM  Wiltel  The Travelers  Bell Northern Research  Also, summaries are presented for Andersen Consulting, Northern Telecom, Prudential Insurance Company, Ascom Nexion, and several others.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/korson.jpg",
      "print_length": "200 pages",
      "language": "English",
      "author": "Vijay K. Vaishnavi",
      "price": 20000,
      "genre": [
        "Thriller",
        "Travel",
        "Adventure",
        "Poetry"
      ],
      "stock": 16,
      "createdDate": "19/03/23"
    },
    {
      "id": 69,
      "title": "The Awesome Power of Direct3D/DirectX",
      "sumary": "If you are programming real-time 3D applications for simulations, games, marketing, demonstrations or computer-animated videos using Microsoft's Direct3D Software Development Kit, this book is for you. Unlike other books, The Awesome Power of Direct3D/DirectX shows you how to build a complete working 3D application, including 3D sound, joystick input, animation, textures, shadows, and even collision detection!    It shows you how to write code using both Retained Mode and Immediate Mode. It does not bury the code in \"wrappers\" that hide the nuances of the SDK. Nothing is hidden.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kovach.jpg",
      "print_length": "840 pages",
      "language": "English",
      "author": "Peter J. Kovach",
      "price": 13000,
      "genre": [
        "Science Fiction",
        "Fiction",
        "Comics & Graphic Novels"
      ],
      "stock": 14,
      "createdDate": "22/03/23"
    },
    {
      "id": 70,
      "title": "AspectJ in Action, Second Edition",
      "sumary": "To allow the creation of truly modular software, OOP has evolved into aspect-oriented programming. AspectJ is a mature AOP implementation for Java, now integrated with Spring.    AspectJ in Action, Second Edition is a fully updated, major revision of Ramnivas Laddad's best-selling first edition. It's a hands-on guide for Java developers. After introducing the core principles of AOP, it shows you how to create reusable solutions using AspectJ 6 and Spring 3. You'll master key features including annotation-based syntax, load-time weaver, annotation-based crosscutting, and Spring-AspectJ integration. Building on familiar technologies such as JDBC, Hibernate, JPA, Spring Security, Spring MVC, and Swing, you'll apply AOP to common problems encountered in enterprise applications.    This book requires no previous experience in AOP and AspectJ, but it assumes you're familiar with OOP, Java, and the basics of Spring.    WHAT'S INSIDE:        * Totally revised Second Edition      * When and how to apply AOP      * Master patterns and best practices      * Code you can reuse in real-world applications  ",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/laddad2.jpg",
      "print_length": "568 pages",
      "language": "English",
      "author": "Ramnivas Laddad",
      "price": 16000,
      "genre": [
        "Fantasy",
        "Biography",
        "Mystery"
      ],
      "stock": 16,
      "createdDate": "28/05/23"
    },
    {
      "id": 71,
      "title": "Hadoop in Action",
      "sumary": "Hadoop is an open source framework implementing the MapReduce algorithm behind Google's approach to querying the distributed data sets that constitute the internet. This definition naturally leads to an obvious question, \"What are \"maps\" and why do they need to be \"reduced \"    Massive data sets can be extremely difficult to analyze and query using traditional mechanisms, especially when the queries themselves are quite complicated. In effect, the MapReduce algorithm breaks up both the query and the data set into constituent parts   that's the \"mapping.\" The mapped components of the query can be processed simultaneously   or \"reduced\"   to rapidly return results.    Hadoop in Action teaches readers how to use Hadoop and write MapReduce programs. The intended readers are programmers, architects, and project managers who have to process large amounts of data offline. Hadoop in Action will lead the reader from obtaining a copy of Hadoop to setting it up in a cluster and writing data analytic programs.    The book begins by making the basic idea of Hadoop and MapReduce easier to grasp by applying the default Hadoop installation to a few easy-to-follow tasks, such as analyzing changes in word frequency across a body of documents. The book continues through the basic concepts of MapReduce applications developed using Hadoop, including a close look at framework components, use of Hadoop for a variety of data analysis tasks, and numerous examples of Hadoop in action.    Hadoop in Action will explain how to use Hadoop and present design patterns and practices of programming MapReduce. MapReduce is a complex idea both conceptually and in its implementation, and Hadoop users are challenged to learn all the knobs and levers for running Hadoop. This book takes you beyond the mechanics of running Hadoop, teaching you to write meaningful programs in a MapReduce framework.    This book assumes the reader will have a basic familiarity with Java, as most code examples will be written in Java. Familiarity with basic statistical concepts (e.g. histogram, correlation) will help the reader appreciate the more advanced data processing examples.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lam.jpg",
      "print_length": "325 pages",
      "language": "English",
      "author": "Chuck Lam",
      "price": 17000,
      "genre": [
        "Health & Fitness",
        "History"
      ],
      "stock": 18,
      "createdDate": "28/04/23"
    },
    {
      "id": 72,
      "title": "Tuscany SCA in Action",
      "sumary": "If you are developing IT applications or providing a development platform for others to use, you are aware of the various technology choices available to you. With variety comes the complexity of technology integration as well as the cost associated with developing and sustaining the solution over time. What if the development cost and complexity were reduced without restricting your freedom to exploit a variety of technologies  What if you could use your existing investments and move to an extensible architecture that can be more easily tailored to changing business requirements  You can do all this and more with Apache Tuscany and Service Component Architecture (SCA).    Tuscany in Action is a comprehensive, hands-on guide for developing technology agnostic, extensible applications using Apache Tuscany's lightweight SCA infrastructure. The book uses practical examples based on a travel booking scenario to demonstrate how to develop applications with Tuscany SCA. Apache Tuscany supports a variety of programming environments, data bindings and communication protocols \"out of the box\" and can be easily extended to support other technologies.    By reading Tuscany in Action you'll learn how to model, compose, deploy and manage applications using SCA. This includes using many of the technologies included with Tuscany such as Web services, JMS and JSON-RPC for protocol handling and Java, BPEL, Spring and scripting for developing components. You'll also learn how to extend Apache Tuscany to support new programming environments and communication protocols and how you can embed the runtime into your application environment.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/laws.jpg",
      "print_length": "472 pages",
      "language": "English",
      "author": "Simon Nash",
      "price": 16000,
      "genre": [
        "Travel",
        "Mystery"
      ],
      "stock": 14,
      "createdDate": "30/01/23"
    },
    {
      "id": 73,
      "title": "Client/Server Yellow Pages",
      "sumary": "This unique guide covers software products and vendors active in the client/server marketplace. Over 200 products and over 250 vendors are included. To help you search for the item of interest to you, software products are grouped in categories (e.g., frontend tools, groupware, workflow, remote access, application development, middleware, conferencing software, componentware). Products are ordered alphabetically by name within each category. With each, the company name, product description, price and platform(s) are listed. When available, a product \"rating,\" and pros and cons of the product are provided too.  The vendor section describes company backgrounds and provides contact information, including, when possible, a contact person's name. The author provides an Introduction giving the reader a sense of direction of the industry, as well as a glossary of terms and acronyms to help him navigate the Client Server Yellow Pages.    This book is the result of painstaking and systematic research into the available clienUserver products. It is the only complete such reference to what is currently (1995) available to buy. It is an invaluable source of information for MIS programmers, systems analysts, designers of clienUserver applications, clienUserver project managers, designers and managers of designers of clienUserver systems, and technology officers within small, medium, and large companies.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lewis.jpg",
      "print_length": "280 pages",
      "language": "English",
      "author": "introduced by Ted Lewis",
      "price": 11000,
      "genre": [
        "Mystery",
        "Cookbooks",
        "Fiction",
        "Science Fiction"
      ],
      "stock": 17,
      "createdDate": "24/03/23"
    },
    {
      "id": 74,
      "title": "Object Oriented Application Frameworks",
      "sumary": "Frameworks are object-oriented programming environments for vertical application areas. This book is the first to survey this exciting new technology, its concepts, and practical applications. Considered the next step in the evolution of OOP, framework technology is at the center stage of the software strategies of Taligent, IBM, HP, Microsoft, and Apple, among others. In spite of that, frameworks remain poorly understood, and are rarely covered in the literature. This book condenses practical experience and research ideas; explains exotic terminology so that a novice computer professional can quickly absorb it; is easy to read and conceptually crisp; and will be useful to many types of readers, from programmers to technical managers.    Object-Oriented Application Frameworks:  Covers real-world commercial and public-domain frameworks:  MacApp, ET++, Taligent's Frameworks, Unidraw, InterViews (precursor of Fresco), and Prograph  Illustrates how the technology is used in applications (e.g., MFC from Microsoft) and languages (e.g., Prograph from Prograph International)  Introduces and explains the ideas in plain English",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lewis2.jpg",
      "print_length": "352 pages",
      "language": "English",
      "author": "friends",
      "price": 16000,
      "genre": [
        "Thriller",
        "Fiction"
      ],
      "stock": 18,
      "createdDate": "06/04/23"
    },
    {
      "id": 75,
      "title": "Erlang and OTP in Action",
      "sumary": "Concurrent programming has become a required discipline for all programmers. Multi-core processors and the increasing demand for maximum performance and scalability in mission-critical applications have renewed interest in functional languages like Erlang that are designed to handle concurrent programming. Erlang, and the OTP platform, make it possible to deliver more robust applications that satisfy rigorous uptime and performance requirements.    Erlang and OTP in Action teaches you to apply Erlang's shared-state model for concurrent programming--a completely different way of tackling the problem of parallel programming from the more common multi-threaded approach. This book walks you through the practical considerations and steps of building systems in Erlang and integrating them with real-world C/C++, Java, and .NET applications. Unlike other books on the market, Erlang and OTP in Action offers a comprehensive view of how concurrency relates to SOA and web technologies.    This hands-on guide is perfect for readers just learning Erlang or for those who want to apply their theoretical knowledge of this powerful language. You'll delve into the Erlang language and OTP runtime by building several progressively more interesting real-world distributed applications. Once you are competent in the fundamentals of Erlang, the book takes you on a deep dive into the process of designing complex software systems in Erlang.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/logan.jpg",
      "print_length": "500 pages",
      "language": "English",
      "author": "",
      "price": 16000,
      "genre": [
        "Self-help",
        "Fantasy",
        "Adventure"
      ],
      "stock": 19,
      "createdDate": "20/01/23"
    },
    {
      "id": 76,
      "title": "SharePoint 2007 Developer's Guide to Business Data Catalog",
      "sumary": "The data locked in your organization's systems and databases is a precious   and sometimes untapped   resource. The SharePoint Business Data Catalog makes it easy to gather, analyze, and report on data from multiple sources, through SharePoint. Using standard web parts, an efficient management console, and a simple programming model, you can build sites, dashboards, and applications that maximize this business asset.    SharePoint 2007 Developer's Guide to Business Data Catalog is a practical, example-rich guide to the features of the BDC and the techniques you need to build solutions for end users. The book starts with the basics   what the BDC is, what you can do with it, and how to pull together a BDC solution. With the fundamentals in hand, it explores the techniques and ideas you need to put BDC into use effectively in your organization.    Knowledge of SharePoint Server and WSS is required.    WHAT'S INSIDE        * The BDC Object Model      * How to build BDC applications      * BDC-driven search      * Integrating with Office, CRM, and InfoPath",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lonsdale.jpg",
      "print_length": "304 pages",
      "language": "English",
      "author": "Brett Lonsdale",
      "price": 14000,
      "genre": [
        "Health & Fitness",
        "Science"
      ],
      "stock": 19,
      "createdDate": "04/04/23"
    },
    {
      "id": 77,
      "title": "Doing IT Right",
      "sumary": "Only a handful of Information Technology leaders understand the complete range of IT issues, from basic technology to business strategy. One of them, Harold Lorin, has written a definitive guide for the IT decision maker, the technologist, and the system developer.    The breadth and insight of Doing IT Right is unparalleled. Its usefulness as a guide to deeper understanding of business computing will be appreciated by professionals and managers at all levels. This book covers a rich collection of topics, each explained, interrelated, and placed in a coherent framework so that its importance and likely evolution are clear. The author does not shy away from stating his views; he provides color, insight and humor.    Doing IT Right is a tour de force based on Lorin's prodigious knowledge of the industry derived from years of involvement with development and marketing at IBM and other systems houses and from consulting in a variety of environments. It also has its roots in a great many publications of the author, from trade and journal articles and book chapters to six earlier books.    Doing IT Right explores IT in its full complexity. It explains fundamental issues of hardware and software structures; it illuminates central issues of networking and encapsulates the essence of client/server computing; its coverage of costing, risk assessment, and due diligence in making computing decisions is unique; its presentation of the concepts and issues of object-orientation was considered by the managers at an IBM development laboratory to be Unique and more informative than fifteen other OO presentations put together.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lorin.jpg",
      "print_length": "350 pages",
      "language": "English",
      "author": "Harold Lorin",
      "price": 10000,
      "genre": [
        "Comics & Graphic Novels",
        "History",
        "Science"
      ],
      "stock": 18,
      "createdDate": "28/04/23"
    },
    {
      "id": 78,
      "title": "Ant in Action",
      "sumary": "Ant in Action is a complete guide to using Ant to build, test, redistribute and deploy Java applications. A retitled second edition of the bestselling and award-winning Java Development with Ant, this book contains over 50% new content including:    New Ant 1.7 features  Scalable builds for big projects  Continuous integration techniques  Deployment  Library management  Extending Ant  Whether you are dealing with a small library or a complex server-side system, this book will help you master your build process. By presenting a running example that grows in complexity, the book covers nearly the entire gamut of modern Java application development, including test-driven development and even how to set up your database as part of the deployment.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/loughran.jpg",
      "print_length": "600 pages",
      "language": "English",
      "author": "Erik Hatcher",
      "price": 13000,
      "genre": [
        "Science Fiction",
        "Fantasy"
      ],
      "stock": 12,
      "createdDate": "31/03/23"
    },
    {
      "id": 79,
      "title": "Restlet in Action",
      "sumary": "REpresentational State Transfer, better known as REST, is the architectural style that governs the web's request-and-response resource model. The open source Restlet Framework provides a simple, powerful Java-based API to implement RESTful web applications that supports and integrates with technologies such as Atom, Jetty, JSON, Spring, GWT, Google App Engine, and Android.    Restlet in Action gets you started with the Restlet Framework and the REST architecture style. You'll create and deploy applications in record time while learning to use popular RESTful Web APIs effectively. This book looks at the many faces of web development, including server- and client-side, along with cloud computing, mobile Android devices, and semantic web applications. It offers a particular focus on Google's innovative Google Web Toolkit, Google App Engine, and Android technologies.    The book takes you though a comprehensive presentation of Restlet's main features, including subjects like security, testing and automatic documentation. You'll learn while following the typical Restlet development process, with consistent illustrations based on a sample RESTful email app.    WHAT'S INSIDE        * Learn REST and Restlet from the ground up      * Deploy locally, to the cloud, or on mobile devices      * Numerous illustrations      * Reusable code samples      * Written by the creators of Restlet!    The book requires a basic knowledge of Java and the web, but no prior exposure to REST or Restlet is needed. You'll quickly get the big picture behind REST, the overall design of Restlet and RESTful web development.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/louvel.jpg",
      "print_length": "450 pages",
      "language": "English",
      "author": "Philippe Mougin",
      "price": 12000,
      "genre": [
        "Cookbooks",
        "Fiction"
      ],
      "stock": 19,
      "createdDate": "05/04/23"
    },
    {
      "id": 80,
      "title": "iText in Action",
      "sumary": "Say you need a tool to add dynamic or interactive features to a PDF file and you decide to search on Google for \"Java PDF.\" What do you think you'd find  Why, at the top of the page you'd find \"iText,\" of course. A leading tool for programmatic creation and manipulation of PDF documents, iText is an open source Java library developed and maintained by Bruno Lowagie, the author of this book, with the help of many contributors.    While at the entry level iText is easy to learn, developers find they soon need its more advanced features. Written by the master himself, iText in Action now offers an introduction and a practical guide to the subject--you will gain a sound understanding of the Portable Document Format and how to do interesting and useful things with PDF using iText.    iText in Action introduces iText and lowers the learning curve to its advanced features. Its numerous, valuable examples unlock many of the secrets hidden in Adobe's PDF Reference. The examples are in Java but they can be easily adapted to .NET using one of iText's .NET ports: iTextSharp (C#) or iText.NET (J#).",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lowagie.jpg",
      "print_length": "688 pages",
      "language": "English",
      "author": "Bruno Lowagie",
      "price": 11000,
      "genre": [
        "Drama",
        "Horror",
        "Fantasy",
        "Adventure"
      ],
      "stock": 15,
      "createdDate": "02/03/23"
    },
    {
      "id": 81,
      "title": "iText in Action, Second Edition",
      "sumary": "Far from a static document presentation format, PDF supports many dynamic or interactive features. With iText, the leading tool creating and manipulating PDF programmatically, you can transform PDF documents into live, interactive applications quickly and easily. iText, a free, open source library for Java and .NET, was developed and maintained by Bruno Lowagie, the author of this book, with the help of many contributors.    iText in Action, Second Edition offers an introduction and a practical guide to iText and the internals of PDF. While at the entry level iText is easy to learn, there's an astonishing range of things you can do once you dive below the surface. This book lowers the learning curve and, though numerous innovative and practical examples, unlocks the secrets hidden in Adobe's PDF Reference. The examples are in Java but they can be easily adapted to .NET using one of iText's .NET ports: iTextSharp or iText.NET.    This totally revised new edition introduces the new functionality added to iText in recent releases, and it updates all examples from JDK 1.4 to Java 5. You'll learn how to use traditional and new form types in PDF, including full coverage of the AcroForm technology. You'll also explore the XML Forms Architecture (XFA) and learn how to fill static and dynamic XFA forms with iText. Along the way, you'll discover new techniques for linking documents, creating a PDF based on records in a database, and much more.    WHAT'S INSIDE        * Serve PDF to a browser      * Automate both static and dynamic XFA forms      * Generate dynamic PDF documents from XML files or databases      * Use PDF's many interactive features      * Add bookmarks, page numbers, watermarks, etc.      * Split, concatenate, and manipulate PDF pages      * Add digital signatures to a PDF file      * New hands-on, ready to use examples",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lowagie2.jpg",
      "print_length": "600 pages",
      "language": "English",
      "author": "Bruno Lowagie",
      "price": 10000,
      "genre": [
        "Self-help",
        "Thriller",
        "Biography"
      ],
      "stock": 11,
      "createdDate": "04/05/23"
    },
    {
      "id": 82,
      "title": "SNA and TCP/IP Enterprise Networking",
      "sumary": "Most textbooks concentrate on presenting the theory, concepts, and products, with examples of implementations in some cases. The distinctive quality of SNA and TCP/IP Enterprise Networking is in its structure. It answers not only \"What \", \"Why \", and \"How \", but also \"What's next \". It shows the reader how enterprise networking evolved, what approaches and techniques can be used today, and where tomorrow's trends lie, illustrating among others Web-to-SNA connectivity and Java based integration approaches.    SNA and TCP/IP Enterprise Networking was written by visionaries, scientists, networking product developers, industry experts, consultants, and end-user representatives, who not only implement the products but also participate in definition of open networking standards. It should be equally appealing to the network practitioners implementing technology as the senior managers making strategic decisions on enterprise networking.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lynch.jpg",
      "print_length": "540 pages",
      "language": "English",
      "author": "editors",
      "price": 20000,
      "genre": [
        "Comics & Graphic Novels",
        "History"
      ],
      "stock": 16,
      "createdDate": "05/06/23"
    },
    {
      "id": 83,
      "title": "Subversion in Action",
      "sumary": "A new-generation version control tool, Subversion is replacing the current open source standard, CVS. With Subversion's control components you can simplify and streamline the management of your code way beyond what's possible with CVS. For example, with just one powerful feature, Subversion's atomic commit, you can easily track and roll back a set of changes.    Subversion in Action introduces you to Subversion and the concepts of version control. Using production-quality examples it teaches you how Subversion features can be customized and combined to effectively deal with your day-to-day source control problems. You'll learn how to do practical things you cannot do with CVS, like seamlessly renaming and moving files.    The book covers branching and repository control, access control, and much more. It is written not just for release engineers, but also for developers, configuration managers, and system administrators.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/machols.jpg",
      "print_length": "356 pages",
      "language": "English",
      "author": "Jeffrey Machols",
      "price": 17000,
      "genre": [
        "Cookbooks",
        "Romance",
        "History",
        "Fiction"
      ],
      "stock": 16,
      "createdDate": "26/03/23"
    },
    {
      "id": 84,
      "title": "Comprehensive Networking Glossary and Acronym Guide",
      "sumary": "This glossary offers a complete collection of technical terms and acronyms used in the networking industry. It covers general networking terminology, the specific terminology used in the Internet, and terms and acronyms specific to AppleTalk, IP, IPX, SNA, and OSI. It also covers national and international networking organizations and several major networks.    Organized in case-insensitive, alphabetic order, entries present well written definitions, understandable to novice readers and useful to experts. The glossary and the glossary entries are:    verified  cross-referenced  comprehensive  concise  understandable  For extra guidance, the book ends with three appendices, each listing the entries in one of three subject areas: networks and organizations, security, and applications and protocols.  The Comprehensive Networking Glossary and Acronym Guide is a valuable, single-source reference for the practical terminology of networking as well as a guide to networks and networking organizations.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/malkin.jpg",
      "print_length": "208 pages",
      "language": "English",
      "author": "Gary Scott Malkin",
      "price": 19000,
      "genre": [
        "Science",
        "Comics & Graphic Novels",
        "Science Fiction"
      ],
      "stock": 17,
      "createdDate": "15/02/23"
    },
    {
      "id": 85,
      "title": "Internet BBSs",
      "sumary": "OK, so you use the Internet. You've surfed some Web sites and maybe sent e-mail. But, chances are, you've overlooked the rich and really personal dimension of the Internet represented by the explosive growth of Internet BBSs. That's because up till now BBS publications were limited in scope to the old era of dial-up BBSs.    Until recently the world of BBSs was geographically compartmentalized: in practical terms only the BBSs within a local telphone call were accessible. Now, the Internet has made all Internet BBSs accessible to anyone in the world. Internet BBSs: A Guided Tour provides in-depth coverage of this new world of true BBSs now available world-wide. It is a valuable resource for anyone currently using the Internet. Users of the major on-line service forums and chat groups should also read it to find out how they can access a much richer variety of BBSs at less cost.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mark.jpg",
      "print_length": "400 pages",
      "language": "English",
      "author": "Richard Scott Mark",
      "price": 10000,
      "genre": [
        "Health & Fitness",
        "Thriller",
        "Biography",
        "Comics & Graphic Novels"
      ],
      "stock": 12,
      "createdDate": "24/05/23"
    },
    {
      "id": 86,
      "title": "Inside LotusScript",
      "sumary": "At last, here's a book that tells you everything that isn't in the Lotus Notes manuals. It's designed to make it easy for you to develop Notes and Domino Web applications by providing advanced LotusScript code for direct use in your programs. It emphasizes practical, useable code and solutions to common Notes programming problems. If you're interested in Internet or Web programming--or if you want to learn Notes programming, from beginner level to advanced, this book is for you!",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mcginn.jpg",
      "print_length": "420 pages",
      "language": "English",
      "author": "Joe McGinn",
      "price": 20000,
      "genre": [
        "Fiction",
        "Adventure"
      ],
      "stock": 13,
      "createdDate": "09/02/23"
    },
    {
      "id": 87,
      "title": "Planning and Managing ATM Networks",
      "sumary": "Not only is ATM the best available means to greater transmission capacity, it has also the best potential to meet the needs for sophisticated service control, distributed network oversight, efficient operation, and improved flexibility.    Planning and Managing ATM Networks covers strategic planning, initial deployment, overall management, and the day-to-day operation of ATM networks. It defines steps to determine requirements for ATM networks, as ATM implementation becomes widespread in the corporate enterprise network. It describes fundamental management concepts and procedures, including fault and configuration management, performance management, accounting, and security.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/minoli.jpg",
      "print_length": "320 pages",
      "language": "English",
      "author": "Thomas W. Golway",
      "price": 15000,
      "genre": [
        "Self-help",
        "Health & Fitness",
        "Science Fiction"
      ],
      "stock": 14,
      "createdDate": "30/01/23"
    },
    {
      "id": 88,
      "title": "Client/Server Applications on ATM Networks",
      "sumary": "Today, to meet the surging demands of client/server company-wide processes--distributed cooperative computing, business/scientific imaging, video conferencing, multimedia, distance learning and many more--corporations are finding they must extend high-speed communications beyond just a few key sites. This book discusses ATM as the key technology for transforming the enterprise network from data-only to an integrated data, voice, video, image and multimedia corporate infrastructure.    Previous books have covered ATM and client/server separately. This book, intended for networking professionals, is unique in its focus on the hows and whys of the inevitable marriage of these two technologies.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/minoli2.jpg",
      "print_length": "350 pages",
      "language": "English",
      "author": "Daniel Minoli",
      "price": 18000,
      "genre": [
        "Science Fiction",
        "History"
      ],
      "stock": 13,
      "createdDate": "03/01/23"
    },
    {
      "id": 89,
      "title": "Entity Framework 4 in Action",
      "sumary": "To be successful, any significant application has to manage the flow of data effectively. Microsoft   s approach to data has taken another major step forward with the new Entity Framework for .NET. The Entity Framework starts with ideas from Object Relational Management (ORM) tools like NHibernate that help bridge the mismatch between relational databases (like SQL Server) and object oriented languages (like C# and VB.NET). But it also blends in the established ADO.NET model and recent language-based innovations of LINQ to create a powerful new data management paradigm.    Microsoft Entity Framework in Action introduces the Entity Framework to developers working in .NET who already have some knowledge of ADO.NET. The book begins with a review of the core ideas behind the ORM model and shows how Entity Framework offers a smooth transition from a traditional ADO.NET approach. By presenting numerous small examples and a couple larger case studies, the book unfolds the Entity Framework story in clear, easy-to-follow detail. The infrastructure and inner workings will be highlighted only when there   s the need to understand a particular feature.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mostarda.jpg",
      "print_length": "576 pages",
      "language": "English",
      "author": "Stefano Mostarda",
      "price": 18000,
      "genre": [
        "Adventure",
        "Horror",
        "Cookbooks"
      ],
      "stock": 12,
      "createdDate": "18/03/23"
    },
    {
      "id": 90,
      "title": "ASP.NET 2.0 Web Parts in Action",
      "sumary": "The static Web is going out of style. Its click-and-wait user experience is giving way to dynamic personalized content and intuitive interactions. With ASP 2.0, a web developer can compose a page out of separate working parts \"Web Parts\" that independently communicate with the server to produce rich interactive portals like Yahoo!, Google/ig, and Live.com. The new Web Parts API makes it easy to centrally manage a portal's parts.    ASP.NET 2.0 Web Parts in Action is packed with annotated code, diagrams, and crystal-clear discussions. You'll develop a sample project from design to deployment, adding content zones, personalization, and a custom look-and-feel. Since any website is invariably a work-in-progress, you'll appreciate learning how to upgrade your portals on the fly. Along the way you'll pick up handy code instrumentation techniques and a few tricks to help your portals manage themselves. As an added bonus, the book introduces the Microsoft Ajax Library (\"Atlas\") and shows how you can add Ajax to a web part. You  ll even create a Live.com gadget.    This book is for web developers familiar with ASP.NET.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/neimke.jpg",
      "print_length": "344 pages",
      "language": "English",
      "author": "Darren Neimke",
      "price": 16000,
      "genre": [
        "Fiction",
        "Self-help",
        "Biography"
      ],
      "stock": 13,
      "createdDate": "20/05/23"
    },
    {
      "id": 91,
      "title": "Sass and Compass in Action",
      "sumary": "Cascading Style Sheets paint the web as the user sees it, and for fifteen years, we've been painting the web by hand. Sass and Compass extend standard CSS to give you more flexibility and the option to simplify or automate many tedious tasks. Think of Sass and Compass as power tools that allow stylesheet authors to \"paint\" with remarkable speed and precision.    Sass is an extension of CSS3, adding language features for creating well-formatted, standard CSS using the command line tool or a web-framework plugin. Compass is a framework that sits atop Sass and tackles common stylesheet problems such as grid layouts, handling CSS3 vendor differences, and production environment stylesheet optimization. Together, they do for CSS what jQuery has done for JavaScript: solve real world problems, letting designers and developers create stylesheets more efficiently.    Sass and Compass in Action is the definitive guide to stylesheet authoring using these two revolutionary tools. Written for both designers and developers, this book demonstrates the power of both Sass and Compass through a series of examples that address common pain points associated with traditional stylesheet authoring. The book begins with simple topics such as CSS resets and moves on to more involved topics such as grid frameworks and CSS3 vendor implementation differences.    Authors Wynn Netherland, Nathan Weizenbaum, and Chris Eppstein cover prominent community plugins that allows stylesheet authors to share styles as developers of other programming languages such as Ruby, Python, Java, and, .NET do. The book also presents Sass and Compass case studies using hot technologies like Sencha Touch. The book culminates in a step-by-step look at building a personal stylesheet framework in which readers can bundle their own approaches and opinions and reuse them across projects.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/netherland.jpg",
      "print_length": "300 pages",
      "language": "English",
      "author": "Nathan Weizenbaum",
      "price": 19000,
      "genre": [
        "Comics & Graphic Novels",
        "Romance",
        "Fiction"
      ],
      "stock": 10,
      "createdDate": "22/03/23"
    },
    {
      "id": 92,
      "title": "Core OWL 5.0",
      "sumary": "Are you an OWL programmer frustrated by shallow coverage of OWL topics in current documentation  Core OWL 5.0 takes you well beyond the \"Hello, world\" level. Concentrating on the central features and classes of the OWL framework, this book dives under the surface and into the OWL source code itself. You'll see what new capabilities OWL 5.0 offers the OWL programmer. You'll gain a deeper understanding of what OWL does on your behalf such as the OWL messaging system and its message maps.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/neward.jpg",
      "print_length": "500 pages",
      "language": "English",
      "author": "Ted Neward",
      "price": 16000,
      "genre": [
        "Poetry",
        "Comics & Graphic Novels"
      ],
      "stock": 11,
      "createdDate": "23/04/23"
    },
    {
      "id": 93,
      "title": "Advanced OWL 5.0",
      "sumary": "Are you an OWL programmer who'd like to know more about the new, largely undocumented features of OWL 5.0  Here's a book that covers advanced ways to make the OWL library do those tricky things you thought weren't possible. You'll get a long, exhaustive look at the new features introduced by the OWL 5.0 code. You'll find detailed explanations of how to extend the OWL objects themselves in new directions. If you're an OWL developer who is beyond the \"OWL for Dummies\" level, this book will show you how to obtain all the potential your OWL applications have for power, elegance and flexibility. ",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/neward2.jpg",
      "print_length": "570 pages",
      "language": "English",
      "author": "Ted Neward",
      "price": 18000,
      "genre": [
        "Mystery",
        "Romance",
        "Health & Fitness"
      ],
      "stock": 15,
      "createdDate": "17/04/23"
    },
    {
      "id": 94,
      "title": "SQL Server MVP Deep Dives",
      "sumary": "This is no ordinary SQL Server book. In SQL Server MVP Deep Dives, the world's leading experts and practitioners offer a masterful collection of techniques and best practices for SQL Server development and administration. 53 MVPs each pick an area of passionate interest to them and then share their insights and practical know-how with you.    SQL Server MVP Deep Dives is organized into five parts: Design and Architecture, Development, Administration, Performance Tuning and Optimization, and Business Intelligence. In each, you'll find concise, brilliantly clear chapters that take on key topics like mobile data strategies, Dynamic Management Views, or query performance.    WHAT'S INSIDE        * Topics important for SQL Server pros      * Accessible to readers of all levels      * New features of SQL Server 2008    Whether you're just getting started with SQL Server or you're an old master looking for new tricks, this book belongs on your bookshelf.    The authors of this book have generously donated 100% of their royalties to support War Child International.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/nielsen.jpg",
      "print_length": "848 pages",
      "language": "English",
      "author": "",
      "price": 19000,
      "genre": [
        "Science",
        "Philosophy",
        "Fantasy",
        "Fiction"
      ],
      "stock": 11,
      "createdDate": "25/04/23"
    },
    {
      "id": 95,
      "title": "SQL Server MVP Deep Dives",
      "sumary": "This is no ordinary SQL Server book. In SQL Server MVP Deep Dives, the world's leading experts and practitioners offer a masterful collection of techniques and best practices for SQL Server development and administration. 53 MVPs each pick an area of passionate interest to them and then share their insights and practical know-how with you.    SQL Server MVP Deep Dives is organized into five parts: Design and Architecture, Development, Administration, Performance Tuning and Optimization, and Business Intelligence. In each, you'll find concise, brilliantly clear chapters that take on key topics like mobile data strategies, Dynamic Management Views, or query performance.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/nielsenaw.jpg",
      "print_length": "848 pages",
      "language": "English",
      "author": "Paul S. Randal",
      "price": 16000,
      "genre": [
        "Poetry",
        "Adventure"
      ],
      "stock": 10,
      "createdDate": "16/02/23"
    },
    {
      "id": 96,
      "title": "PostGIS in Action",
      "sumary": "Whether you're canvassing a congressional district, managing a sales region, mapping city bus schedules, or analyzing local cancer rates, thinking spatially opens up limitless possibilities for database users. PostGIS, a freely available open-source spatial database extender, can help you answer questions that you could not answer using a mere relational database. Its feature set equals or surpasses proprietary alternatives, allowing you to create location-aware queries and features with just a few lines of SQL code.    PostGIS in Action is the first book devoted entirely to PostGIS. It will help both new and experienced users write spatial queries to solve real-world problems. For those with experience in more traditional relational databases, this book provides a background in vector-based GIS so you can quickly move to analyzing, viewing, and mapping data. Advanced users will learn how to optimize queries for maximum speed, simplify geometries for greater efficiency, and create custom functions suited specifically to their applications. It also discusses the new features available in PostgreSQL 8.4 and provides tutorials on using additional open source GIS tools in conjunction with PostGIS.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/obe.jpg",
      "print_length": "325 pages",
      "language": "English",
      "author": "Regina O. Obe",
      "price": 13000,
      "genre": [
        "Adventure",
        "Health & Fitness",
        "Fantasy"
      ],
      "stock": 17,
      "createdDate": "08/04/23"
    },
    {
      "id": 97,
      "title": "Programming Mac OS X",
      "sumary": "A guide for UNIX developers who want accurate information on getting up to speed with Mac OS X and its software development environment, this book provides programmers all the information they need to understand and use the operating system, its development tools, and key technologies such as Darwin, Cocoa and AppleScript.    Users are introduced to the UNIX-based foundations of Mac OS X and shown how they fit into Mac OS X architecture. Also provided is coverage of both GUI and command-line software development tools, realistic programming examples that developers will encounter, and a discussion of Macintosh-style software development.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/omalley.jpg",
      "print_length": "384 pages",
      "language": "English",
      "author": "Kevin O'Malley",
      "price": 19000,
      "genre": [
        "Thriller",
        "Philosophy"
      ],
      "stock": 16,
      "createdDate": "22/01/23"
    },
    {
      "id": 98,
      "title": "ASP.NET MVC in Action",
      "sumary": "ASP.NET MVC implements the Model-View-Controller pattern on the ASP.NET runtime. It works well with open source projects like NHibernate, Castle, StructureMap, AutoMapper, and MvcContrib.    ASP.NET MVC in Action is a guide to pragmatic MVC-based web development. After a thorough overview, it dives into issues of architecture and maintainability. The book assumes basic knowledge of ASP.NET (v. 3.5) and expands your expertise. Some of the topics covered:        * How to effectively perform unit and full-system tests.      * How to implement dependency injection using StructureMap or Windsor.      * How to work with the domain and presentation models.      * How to work with persistence layers like NHibernate.    The book's many examples are in C#.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/palermo.jpg",
      "print_length": "392 pages",
      "language": "English",
      "author": "Jeffrey Palermo",
      "price": 16000,
      "genre": [
        "Fantasy",
        "Science",
        "Cookbooks",
        "Psychology"
      ],
      "stock": 19,
      "createdDate": "06/04/23"
    },
    {
      "id": 99,
      "title": "ASP.NET MVC 2 in Action",
      "sumary": "The future of high-end web development on the Microsoft platform, ASP.NET MVC 2 provides clear separation of data, interface, and logic and radically simplifies tedious page and event lifecycle management. And since it's an evolution of ASP.NET, you can mix MVC and Web Forms in the same application, building on your existing work.    ASP.NET MVC 2 in Action is a fast-paced tutorial designed to introduce the MVC model to ASP.NET developers and show how to apply it effectively. After a high-speed ramp up, the book presents over 25 concise chapters exploring key topics like validation, routing, and data access. Each topic is illustrated with its own example so it's easy to dip into the book without reading in sequence. This book covers some high-value, high-end techniques you won't find anywhere else!    Microsoft ASP.NET MVC (model/view/controller) is a relatively new Web application framework that combines ASP.NET's power and ease of use with the stability and testability of a MVC framework. The much-anticipated version 2 release brings new capabilities to the framework along with numerous additions that enhance developer productivity. In ASP.NET MVC 2 in Action, readers learn how to move from web form-based development to designs based on the MVC pattern. It begins with an introduction to the MVC framework and quickly dives into a working MVC 2 project.    Featuring full coverage of new version 2 features, this book helps readers use developer-oriented upgrades like \"Areas\" to break a large project into smaller pieces and explore the new data handling tools. This revised edition adds a completely new tutorial to bring developers with no prior exposure to the MVC pattern up to speed quickly, keeping its focus on providing high-quality, professional grade examples that go deeper than the other ASP.NET MVC books.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/palermo2.jpg",
      "print_length": "432 pages",
      "language": "English",
      "author": "Ben Scheirman",
      "price": 18000,
      "genre": [
        "Romance",
        "Fiction",
        "Psychology",
        "Biography"
      ],
      "stock": 10,
      "createdDate": "26/05/23"
    },
    {
      "id": 100,
      "title": "ASP.NET MVC 4 in Action",
      "sumary": "A successful ASP.NET application needs to accomplish its functional goals, provide a comfortable user experience, and be easy to deploy, maintain, and extend. ASP.NET MVC is a development framework designed around these principles. It provides the structure you need to follow the Model-View-Controller (MVC) design pattern, in which an application is divided into three distinct parts:        * Models, the objects that contain an application's logic      * Views, the components that create the user interface of an application      * Controllers, the components that handle and respond to user input    Applications built with ASP.NET MVC are easier to test, maintain, and extend because the architecture and role of each component is well-defined. And since it's built from the ground up as a core part of the .NET framework, it integrates seamlessly with the ASP.NET features, such as Web Forms or Master Pages, that you already use.    ASP.NET MVC 3 in Action is a fast-paced tutorial designed to introduce ASP.NET MVC to .NET developers and show how to apply it effectively. After a high-speed ramp up, the book explores key topics like validation, routing, and data access. Each topic is illustrated with its own example so it's easy to dip into the book without reading in sequence. This book also covers some high-value, high-end techniques you won't find anywhere else!    The book bases all its examples on ASP.NET MVC 3, so you'll get full coverage of major new features such as the Razor view engine, the new Web Matrix helpers, and improved extensibility. MVC 3 is also the first version built exclusively against .NET 4, so you'll see how your ASP.NET applications can benefit from changes in the .NET Framework.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/palermo3.jpg",
      "print_length": "450 pages",
      "language": "English",
      "author": "Jimmy Bogard",
      "price": 15000,
      "genre": [
        "Self-help",
        "Adventure",
        "Travel"
      ],
      "stock": 12,
      "createdDate": "19/02/23"
    },
    {
      "id": 101,
      "title": "Explorer's Guide to the Semantic Web",
      "sumary": "A complex set of extensions to the World Wide Web, the Semantic Web will make data and services more accessible to computers and useful to people. Some of these extensions are being deployed, and many are coming in the next years. This is the only book to explore the territory of the Semantic Web in a broad and conceptual manner.    This Guide acquaints you with the basic ideas and technologies of the Semantic Web, their roles and inter-relationships. The key areas covered include knowledge modeling (RDF, Topic Maps), ontology (OWL), agents (intelligent and otherwise), distributed trust and belief, \"semantically-focused\" search, and much more.    The book's basic, conceptual approach is accessible to readers with a wide range of backgrounds and interests. Important points are illustrated with diagrams and occasional markup fragments. As it explores the landscape it encounters an ever-surprising variety of novel ideas and unexpected links. The book is easy and fun to read - you may find it hard to put down.    The Semantic Web is coming. This is a guide to the basic concepts and technologies that will come with it.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/passin.jpg",
      "print_length": "304 pages",
      "language": "English",
      "author": "Thomas B. Passin",
      "price": 12000,
      "genre": [
        "Science",
        "Self-help"
      ],
      "stock": 15,
      "createdDate": "30/03/23"
    },
    {
      "id": 102,
      "title": "Windows PowerShell in Action",
      "sumary": "Windows has an easy-to-use interface, but if you want to automate it, life can get hard. That is, unless you use PowerShell, an elegant new dynamic language from Microsoft designed as an all-purpose Windows scripting tool. PowerShell lets you script administrative tasks and control Windows from the command line. Because it was specifically developed for Windows, programmers and power-users can now do things in a shell that previously required VB, VBScript, or C#.    Windows PowerShell in Action was written by Bruce Payette, one of the founding members of the Windows PowerShell team, co-designer of the PowerShell language and the principal author of the PowerShell language implementation. From him you will gain a deep understanding of the language and how best to use it, and you'll love his insights into why PowerShell works the way it does.    This book is a tutorial for sysadmins and developers introducing the PowerShell language and its environment. It shows you how to build scripts and utilities to automate system tasks or create powerful system management tools to handle the day-to-day tasks that drive a Windows administrator's life. It's rich in interesting examples that will spark your imagination. The book covers batch scripting and string processing, COM, WMI, and even .NET and WinForms programming.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/payette.jpg",
      "print_length": "576 pages",
      "language": "English",
      "author": "Bruce Payette",
      "price": 18000,
      "genre": [
        "Self-help",
        "Psychology",
        "Science Fiction",
        "Cookbooks"
      ],
      "stock": 10,
      "createdDate": "11/02/23"
    },
    {
      "id": 103,
      "title": "Windows PowerShell in Action, Second Edition",
      "sumary": "Windows PowerShell transformed the way administrators and developers interact with Windows. PowerShell, an elegant dynamic language from Microsoft, lets you script administrative tasks and control Windows from the command line. Because it's a full-featured, first-class Windows programming language, programmers and power-users can now do things in a shell that previously required VB, VBScript, or C#.    Windows PowerShell in Action, Second Edition is a completely revised edition of the best selling book on PowerShell, written by Bruce Payette, one of the founding members of the Windows PowerShell team, co-designer of the PowerShell language, and the principal author of the PowerShell language implementation.    This new edition preserves the crystal-clear introduction to PowerShell, showing sysadmins and developers how to build scripts and utilities to automate system tasks or create powerful system management tools to handle day-to-day tasks. It's rich with interesting examples that will spark your imagination. The book covers batch scripting and string processing, COM, WMI, remote management and jobs and even .NET programming including WinForms and WPF/XAML.    Windows PowerShell in Action, Second Edition adds full coverage of V2 features like remote, changes to the threading model, and the new -split and -join operators. The book now includes full chapters on Remoting, Modules, Events and Transactions, and the PowerShell Integrated Scripting Environment. As well, it provides deeper coverage of PowerShell \"commandlets\" (cmdlets) and more of the popular usage scenarios throughout the book.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/payette2.jpg",
      "print_length": "700 pages",
      "language": "English",
      "author": "Bruce Payette",
      "price": 19000,
      "genre": [
        "Comics & Graphic Novels",
        "Biography",
        "Health & Fitness"
      ],
      "stock": 15,
      "createdDate": "29/04/23"
    },
    {
      "id": 104,
      "title": "Silverlight 4 in Action, Revised Edition",
      "sumary": "Anyone who has gotten a taste of what it can do knows that Silverlight represents an entirely new level of rich web interface technology for Microsoft developers. With Silverlight, developers can use JavaScript, C#, and other languages to build user-friendly, interactive, and visually-dazzling web applications that work in most major browsers.    Silverlight in Action, Revised Edition is a comprehensive guide to Silverlight, taking you from Hello World through the techniques you'll need to build sophisticated rich web apps. This new edition covers all the new features added in the latest versions of Silverlight, Visual Studio, and Expression Blend, along with the best practices emerging in the Silverlight community. With more than 50% new content, you'll take a mind-expanding trip through the technology, features, and techniques required to build applications ranging from media, to custom experiences, to business applications to games.    Beyond the fundamentals, you'll find numerous practical examples of important patterns like the ViewModel (or MVVM) pattern, and effective practices for developing real-world applications. You'll delve into the underlying object model and what makes Silverlight tick. Business application developers will appreciate the coverage of the exciting new.NET RIA Services. Combined with advanced binding and validation techniques, they help you visualize how to make your application development super productive and your architecture flexible enough to implement solutions in any problem domain.    Silverlight in Action, Revised Edition devotes extensive coverage to flexible layout components, the extensible control model, the communication framework, and the data-binding features-all cornerstones of software development. You'll master Silverlight's rich media and vivid graphical and animation features. The closing chapters include a variety of Silverlight deployment and customization scenarios.    Finally, Silverlight in Action, Revised Edition doesn't leave you in the dark when it comes to testing and debugging your applications. Techniques, tools, and patterns to support testable Silverlight applications are woven throughout the chapters, with additional dedicated content on the specifics of testing and debugging in Silverlight.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/pbrown.jpg",
      "print_length": "425 pages",
      "language": "English",
      "author": "Pete Brown",
      "price": 18000,
      "genre": [
        "Poetry",
        "Thriller",
        "Psychology",
        "History"
      ],
      "stock": 11,
      "createdDate": "25/05/23"
    },
    {
      "id": 105,
      "title": "Hibernate Quickly",
      "sumary": "Positioned as a layer between the application and the database, Hibernate is a powerful object/relational persistence and query service for Java. It takes care of automating a tedious task: the manual bridging of the gap between object oriented code and the relational database. Hibernate Quickly gives you all you need to start working with Hibernate now.    The book focuses on the 20% you need 80% of the time. The pages saved are used to introduce you to the Hibernate \"ecosystem\": how Hibernate can work with other common development tools and frameworks like XDoclet, Struts, Webwork, Spring, and Tapestry.    The book builds its code examples incrementally, introducing new concepts as it goes. It covers Hibernate's many, useful configuration and design options, breaking a complex subject into digestible pieces. With a gradual \"crawl-walk-run\" approach, the book teaches you what Hibernate is, what it can do, and how you can work with it effectively.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/peak.jpg",
      "print_length": "456 pages",
      "language": "English",
      "author": "Patrick Peak",
      "price": 16000,
      "genre": [
        "Fantasy",
        "Biography",
        "Science Fiction",
        "Comics & Graphic Novels"
      ],
      "stock": 17,
      "createdDate": "07/01/23"
    },
    {
      "id": 106,
      "title": "Real-World Functional Programming",
      "sumary": "Functional programming languages are good at expressing complex ideas in a succinct, declarative way. Functional concepts such as \"immutability\" and \"function values\" make it easier to reason about code   as well as helping with concurrency. The new F# language, LINQ, certain new features of C#, and numerous .NET libraries now bring the power of functional programming to .NET coders.    This book teaches the ideas and techniques of functional programming applied to real-world problems. You'll see how the functional way of thinking changes the game for .NET developers. Then, you'll tackle common issues using a functional approach. The book will also teach you the basics of the F# language and extend your C# skills into the functional domain. No prior experience with functional programming or F# is required.    WHAT'S INSIDE:        * Thinking the functional way      * Blending OO and functional programming      * Effective F# code",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/petricek.jpg",
      "print_length": "560 pages",
      "language": "English",
      "author": "Tomas Petricek with Jon Skeet",
      "price": 18000,
      "genre": [
        "Cookbooks",
        "Drama",
        "Fantasy",
        "Romance"
      ],
      "stock": 15,
      "createdDate": "25/05/23"
    },
    {
      "id": 107,
      "title": "Dependency Injection",
      "sumary": "In object-oriented programming, a central program normally controls other objects in a module, library, or framework. With dependency injection, this pattern is inverted   a reference to a service is placed directly into the object which eases testing and modularity. Spring or Google Guice use dependency injection so you can focus on your core application and let the framework handle infrastructural concerns.    Dependency Injection explores the DI idiom in fine detail, with numerous practical examples that show you the payoffs. You'll apply key techniques in Spring and Guice and learn important pitfalls, corner-cases, and design patterns. Readers need a working knowledge of Java but no prior experience with DI is assumed.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/prasanna.jpg",
      "print_length": "352 pages",
      "language": "English",
      "author": "Dhanji R. Prasanna",
      "price": 18000,
      "genre": [
        "Horror",
        "Adventure",
        "Science Fiction",
        "Mystery"
      ],
      "stock": 19,
      "createdDate": "12/01/23"
    },
    {
      "id": 108,
      "title": "Understanding Enterprise SOA",
      "sumary": "Understanding Enterprise SOA gives technologists and business people an invaluable and until now missing integrated picture of the issues and their interdependencies. You will learn how to think in a big way, moving confidently between technology- and business-level concerns. Written in a comfortable, mentoring style by two industry insiders, the book draws conclusions from actual experiences of real companies in diverse industries, from manufacturing to genome research. It cuts through vendor hype and shows you what it really takes to get SOA to work.    Intended for both business people and technologists, the book reviews core SOA technologies and uncovers the critical human factors involved in deploying them. You will see how enterprise SOA changes the terrain of EAI, B2B commerce, business process management, \"real time\" operations, and enterprise software development in general.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/pulier.jpg",
      "print_length": "280 pages",
      "language": "English",
      "author": "Eric Pulier and Hugh Taylor",
      "price": 15000,
      "genre": [
        "Cookbooks",
        "Science"
      ],
      "stock": 13,
      "createdDate": "03/04/23"
    },
    {
      "id": 109,
      "title": "DSLs in Boo: Domain-Specific Languages in .NET",
      "sumary": "A general-purpose language like C# is designed to handle all programming tasks. By contrast, the structure and syntax of a Domain-Specific Language are designed to match a particular applications area. A DSL is designed for readability and easy programming of repeating problems. Using the innovative Boo language, it's a breeze to create a DSL for your application domain that works on .NET and does not sacrifice performance.    DSLs in Boo shows you how to design, extend, and evolve DSLs for .NET by focusing on approaches and patterns. You learn to define an app in terms that match the domain, and to use Boo to build DSLs that generate efficient executables. And you won't deal with the awkward XML-laden syntax many DSLs require. The book concentrates on writing internal (textual) DSLs that allow easy extensibility of the application and framework. And if you don't know Boo, don't worry   you'll learn right here all the techniques you need.    WHAT'S INSIDE:        * Introduction to DSLs, including common patterns      * A fast-paced Boo tutorial      * Dozens of practical examples and tips      * An entertaining, easy-to-follow style",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rahien.jpg",
      "print_length": "352 pages",
      "language": "English",
      "author": "Oren Eini writing as Ayende Rahien",
      "price": 18000,
      "genre": [
        "Health & Fitness",
        "Travel",
        "Psychology",
        "Comics & Graphic Novels"
      ],
      "stock": 18,
      "createdDate": "01/02/23"
    },
    {
      "id": 110,
      "title": "wxPython in Action",
      "sumary": "wxPython is an open source GUI toolkit for the Python programming language. It offers productivity gains and useful features for any programmer, and is quickly gaining in popularity as a result. The only published source for the wxPython toolkit, co-authored by the toolkit s developer Robin Dunn, wxPython in Action shows readers why wxPython is a better interface tool than Tkinter, the tool that is distributed with Python.    Because they are often large and complex, GUI programming toolkits can be hard to use. wxPython is a combination of the Python programming language and the wxWidgets toolkit, which allows programmers to create programs with a robust, highly functional graphical user interface, simply and easily. wxPython combines the power of an exceptionally complete user interface toolkit with an exceptionally flexible programming language. The result is a toolkit that is unique in the ease with which complex applications can be built and maintained.    wxPython in Action is a complete guide to the wxPython toolkit, containing a tutorial for getting started, a guide to best practices, and a reference to wxPython s extensive widget set. After an easy introduction to wxPython concepts and programming practices, the book takes an in-depth tour of when and how to use the bountiful collection of widgets offered by wxPython. All features are illustrated with useful code examples and reference tables are included for handy lookup of an object s properties, methods, and events. The book enables developers to learn wxPython quickly and remains a valuable resource for future work.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rappin.jpg",
      "print_length": "620 pages",
      "language": "English",
      "author": "Noel Rappin",
      "price": 12000,
      "genre": [
        "Mystery",
        "Poetry",
        "Biography"
      ],
      "stock": 16,
      "createdDate": "03/03/23"
    },
    {
      "id": 111,
      "title": "Clojure in Action",
      "sumary": "Clojure is a modern implementation of Lisp for the JVM, ideally suited for general programming and specialized tasks like creating domain specific languages. Like Haskell and Scala, Clojure supports the functional style of programming. By combining first-class functions, lexical closures, multimethods, and a full-fledged macro system, you get more than what typical OO languages can possibly offer. Moreover, you get ultra-clean code that reflects Lisp's famously-concise style. That means far fewer bugs when compared to stateful languages such as Java or C++.    Clojure in Action is a hands-on tutorial for the working programmer who has written code in a language like Java or Ruby, but has no prior experience with Lisp. It teaches Clojure from the basics to advanced topics using practical, real-world application examples. Blow through the theory and dive into practical matters like unit-testing, environment set up, all the way through building a scalable web-application using domain-specific languages, Hadoop, HBase, and RabbitMQ.    For readers coming from Java, you'll see how Clojure's use of the JVM makes it seamlessly interoperable with existing Java code. Learn how to access the thousands of existing libraries and frameworks. You'll also discover the concurrency semantics built into the language, which enable you to very easily write multi-threaded programs and take advantage of multiple cores in modern CPUs. With cloud-computing and multi-core becoming major trends, this is a huge advantage.    WHAT'S INSIDE        * A modern Lisp without all the baggage      * Functional programming that's also practical      * Unit-testing, embedding Clojure, distributed programming, and more      * State management and safe concurrency for multi-core CPUs      * Create domain specific languages (DSLs) with the macro system      * Write web-scale applications that scale transparently across multiple CPUs      * Seamless interoperability with thousands of Java libraries      * Get performance on level with raw Java",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rathore.jpg",
      "print_length": "475 pages",
      "language": "English",
      "author": "Amit Rathore",
      "price": 20000,
      "genre": [
        "Biography",
        "Travel",
        "Thriller",
        "Adventure"
      ],
      "stock": 12,
      "createdDate": "29/03/23"
    },
    {
      "id": 112,
      "title": "Working with Objects",
      "sumary": "Working With Objects is the authoritative account of the highly successful OOram method for software analysis, design, development, maintenance and reuse. OOram has been fine-tuned over a decade on hundreds of projects by Trygve Reenskaug and his collaborators. It is supported by available CASE tools, training, and consulting.    Working With Objects is the source on a method which takes an evolutionary step forward in object-oriented development practices. OOram adds the intuitively simple but powerful concept of a role to object-oriented models and methods. For example, imagine trying to describe a person as an object. The most effective way to do this would be to independently describe each of the roles that person adopts (parent, employee, and so on) and then define how the person supports them. These ideas form the heart of the OOram approach.    In a presentation rich with examples, Working With Objects is anything but the typical, dry methodology book. It tells real-life stories. It teaches how to apply role modeling and benefit from its inherent advantages, including:    Multiple views of the same model  Support for both data- and process-centered approaches  Large systems described through a number of distinct models  Derivation of composite models from simpler, base models  Decentralized management of very large systems  Programming language-independent design  Step-by-step transformation of models into implementations  Integration of powerful reuse techniques with work policies, processes and organization",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/reenskaug.jpg",
      "print_length": "420 pages",
      "language": "English",
      "author": "Trygve Reenskaug",
      "price": 13000,
      "genre": [
        "Science Fiction",
        "Drama"
      ],
      "stock": 16,
      "createdDate": "06/03/23"
    },
    {
      "id": 113,
      "title": "PHP in Action",
      "sumary": "To keep programming productive and enjoyable, state-of-the-art practices and principles are essential. Object-oriented programming and design help manage complexity by keeping components cleanly separated. Unit testing helps prevent endless, exhausting debugging sessions. Refactoring keeps code supple and readable. PHP offers all this, and more.    PHP in Action shows you how to apply PHP techniques and principles to all the most common challenges of web programming, including:    Web presentation and templates  User interaction including the Model-View-Contoller architecture  Input validation and form handling  Database connection and querying and abstraction  Object persistence  This book takes on the most important challenges of web programming in PHP 5 using state-of-the art programming and software design techniques including unit testing, refactoring and design patterns. It provides the essential skills you need for developing or maintaining complex to moderately complex PHP web applications.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/reiersol.jpg",
      "print_length": "552 pages",
      "language": "English",
      "author": "Chris Shiflett",
      "price": 16000,
      "genre": [
        "History",
        "Poetry"
      ],
      "stock": 19,
      "createdDate": "29/03/23"
    },
    {
      "id": 114,
      "title": "Secrets of the JavaScript Ninja",
      "sumary": "JavaScript developers commonly rely on collections of reusable JavaScript code--written by themselves or by someone else at their company. Alternatively, they rely on code from a third party. But in all these cases they need to know how to either construct a cross-browser library from scratch or be adept at using and maintaining their library of choice.    In Secrets of the JavaScript Ninja, JavaScript expert John Resig reveals the inside know-how of the elite JavaScript programmers. Written to be accessible to JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up.    This book takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. You first are given a base of strong, advanced JavaScript knowledge, enabling you to make decisions about the overall design of a library and how to tackle its eventual construction. The book then teaches you how to construct your library. It examines all the numerous tasks JavaScript libraries have to tackle and provides practical solutions and development strategies for their creation. It then guides you through the various maintenance techniques you will need to keep your code running well into the future.    With Secrets of the JavaScript Ninja you will have all the knowledge and skills available to build your own JavaScript library, or to understand how to use any modern JavaScript library available.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/resig.jpg",
      "print_length": "300 pages",
      "language": "English",
      "author": "John Resig",
      "price": 12000,
      "genre": [
        "Thriller",
        "Cookbooks",
        "Poetry"
      ],
      "stock": 15,
      "createdDate": "05/04/23"
    },
    {
      "id": 115,
      "title": "Microsoft Office Essentials",
      "sumary": "Many books on Microsoft Office try to cover every feature of the software. You don't use every feature, though. Microsoft Office Essentials simply covers the things you really want to know and skips over all those esoteric features that 99 out of 100 readers never use.    You will learn, among other things, how to use:    - Microsoft Office Manager and Shortcut Bar  - Word's formatting tools -- templates, styles, and wizards  - Word to create newsletters, reports, etc.  - Word and Excel together, capitalizing on the strengths of both  - Excel to create simple workbooks for such tasks as balancing your checkbook or preparing a budget  - Excel to display your data with charts  - Powerpoint to develop a presentation that combines words and clip-art images    Once you get to know Microsoft Office Essentials you'll want to keep it within easy reach of you computer...",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/richardson2.jpg",
      "print_length": "480 pages",
      "language": "English",
      "author": "Ronny Richardson",
      "price": 16000,
      "genre": [
        "Fantasy",
        "Horror"
      ],
      "stock": 13,
      "createdDate": "19/02/23"
    },
    {
      "id": 116,
      "title": "Personal Videoconferencing",
      "sumary": "The first book on the most powerful communication tool since the development of the personal computer, Personal Videoconferencing will help you streamline your business and gain a competitive edge. It summarizes the experience of more than seventy companies in many industries in the use of desktop and laptop videoconferencing to collaborate on documents and applications while communicating through video, face-to-face. Anyone who shares information with others will benefit from reading this book.  ",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rosen.jpg",
      "print_length": "420 pages",
      "language": "English",
      "author": "Evan Rosen",
      "price": 11000,
      "genre": [
        "Horror",
        "History",
        "Health & Fitness",
        "Comics & Graphic Novels"
      ],
      "stock": 15,
      "createdDate": "18/01/23"
    },
    {
      "id": 117,
      "title": "Implementing Elliptic Curve Cryptography",
      "sumary": "Implementing Elliptic Curve Cryptography proceeds step-by-step to explain basic number theory, polynomial mathematics, normal basis mathematics and elliptic curve mathematics. With these in place, applications to cryptography are introduced. The book is filled with C code to illustrate how mathematics is put into a computer, and the last several chapters show how to implement several cryptographic protocols. The most important is a description of P1363, an IEEE draft standard for public key cryptography.    The main purpose of Implementing Elliptic Curve Cryptography is to help \"crypto engineers\" implement functioning, state-of-the-art cryptographic algorithms in the minimum time. With detailed descriptions of the mathematics, the reader can expand on the code given in the book and develop optimal hardware or software for their own applications.    Implementing Elliptic Curve Cryptography assumes the reader has at least a high school background in algebra, but it explains, in stepwise fashion, what has been considered to be a topic only for graduate-level students. ",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rosing.jpg",
      "print_length": "330 pages",
      "language": "English",
      "author": "Michael Rosing",
      "price": 11000,
      "genre": [
        "Biography",
        "Mystery",
        "Psychology",
        "Comics & Graphic Novels"
      ],
      "stock": 14,
      "createdDate": "15/04/23"
    },
    {
      "id": 118,
      "title": "SOA Patterns",
      "sumary": "SOA   Service Oriented Architecture   has become the leading solution for complex, connected business systems. While it's easy to grasp the theory of SOA, implementing well-designed, practical SOA systems can be a difficult challenge. Developers and enterprise architects still face the following issues:        * How to get high-availability with SOA      * How to know a service has failed      * How to create reports when data is scattered within multiple services      * How to increase the loose coupling of your SOA      * How to solve authentication and authorization for service consumers--internal and external      * How to integrate SOA and the UI      * How to avoid common SOA pitfalls      * How to choose technologies that increase the performance of your services    In SOA Patterns, author Arnon Rotem-Gal-Oz provides detailed, technology-neutral solutions to these challenges, and many others. This book provides architectural guidance through patterns and anti-patterns. It shows you how to build real SOA services that feature flexibility, availability, and scalability. Through an extensive set of patterns, this book identifies the major SOA pressure points and provides reusable techniques to address them. Each pattern pairs the classic Problem/Solution format with a unique technology map, showing where specific solutions fit into the general pattern.    SOA Patterns shows you how to address common SOA concerns, including the areas of performance, availability, scalability, security, management, service interaction, user interface interaction, and service aggregation. The SOA anti-patterns part shows you how to avoid common mistakes and how to refactor broken systems. The book also maps quality attributes to patterns so that you can easily find the patterns relevant to your problems.    WHAT'S INSIDE:        * Details more than 30 patterns for common SOA scenarios in the areas of security, performace, availability, UI integration, service aggregation and service interaction      * Describes more than 20 SOA pitfalls to avoid      * Spotlights the architecural perspective on SOA      * Explains technology mapping from conceptual solution to current technologies      * Provides extensive and practical advice on matching patterns to technologies  ",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rotem.jpg",
      "print_length": "250 pages",
      "language": "English",
      "author": "Arnon Rotem-Gal-Oz",
      "price": 16000,
      "genre": [
        "History",
        "Thriller",
        "Comics & Graphic Novels"
      ],
      "stock": 10,
      "createdDate": "30/03/23"
    },
    {
      "id": 119,
      "title": "Hello World!",
      "sumary": "Your computer won't respond when you yell at it. Why not learn to talk to your computer in its own language  Whether you want to write games, start a business, or you're just curious, learning to program is a great place to start. Plus, programming is fun!    Hello World! provides a gentle but thorough introduction to the world of computer programming. It's written in language a 12-year-old can follow, but anyone who wants to learn how to program a computer can use it. Even adults. Written by Warren Sande and his son, Carter, and reviewed by professional educators, this book is kid-tested and parent-approved.    You don't need to know anything about programming to use the book. But you should know the basics of using a computer--e-mail, surfing the web, listening to music, and so forth. If you can start a program and save a file, you should have no trouble using this book.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sande.jpg",
      "print_length": "432 pages",
      "language": "English",
      "author": "Carter Sande",
      "price": 19000,
      "genre": [
        "Travel",
        "Fantasy",
        "Biography"
      ],
      "stock": 15,
      "createdDate": "24/02/23"
    },
    {
      "id": 120,
      "title": "Portlets in Action",
      "sumary": "A \"portal\" is a browser-based container populated by small applications called \"portlets\". Good portlets need to work independently, but also communicate with the portal, other portlets, and outside servers and information sources. Whether they're part of internal or web-facing portals, high-quality portlets are the foundation of a fast, flexible, and successful development strategy.    Portlets in Action is a comprehensive guide for Java developers with minimal or no experience working with portlets. Fully exploring the Portlet 2.0 API and using widely adopted frameworks like Spring 3.0 Portlet MVC, Hibernate, and DWR, it teaches you portal and portlet development by walking you through a Book Catalog portlet and Book Portal examples. The example Book Catalog Portlet, developed incrementally in each chapter of the book, incorporates most key portlet features, and the accompanying source code can be easily adapted and reused by readers. The example Book Portal application introduces you to the challenges faced in developing web portals.  WHAT'S INSIDE        * Complete coverage of Portlet 2.0 API      * New features added in Portlet 2.0      * Code examples use      * Develop rich portlets using AJAX with DWR, DOJO, and jQuery      * Complete coverage of Spring 3.0 Portlet MVC and the Liferay portal server  ",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sarin.jpg",
      "print_length": "475 pages",
      "language": "English",
      "author": "Ashish Sarin",
      "price": 15000,
      "genre": [
        "Self-help",
        "Biography",
        "Poetry",
        "History"
      ],
      "stock": 16,
      "createdDate": "05/01/23"
    },
    {
      "id": 121,
      "title": "SWT/JFace in Action",
      "sumary": "SWT and JFace are Eclipse's graphical libraries. They enable you to build nimble and powerful Java GUIs--but this is only the beginning. With Draw2D and the Graphical Editing Framework, you can go beyond static applications and create full-featured editors. And with the Rich Client Platform, you can build customized workbenches whose capabilities far exceed those of traditional interfaces.    SWT/JFace in Action covers the territory, from simple widgets to complex graphics. It guides you through the process of developing Eclipse-based GUIs and shows how to build applications with features your users will love. The authors share their intimate knowledge of the subject with you in a friendly, readable style.    This book encourages you to learn through action. Each topic provides extensive code to show you how SWT/JFace works in practical applications. Not only do these examples help you understand the subject, they are a working set of programs you can reuse in your own interfaces.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/scarpino.jpg",
      "print_length": "496 pages",
      "language": "English",
      "author": "Matthew Scarpino",
      "price": 19000,
      "genre": [
        "Psychology",
        "Romance",
        "Fantasy",
        "Horror"
      ],
      "stock": 12,
      "createdDate": "16/05/23"
    },
    {
      "id": 122,
      "title": "Multiprotocol over ATM",
      "sumary": "Networks constructed with current ATM protocol design standards exceed by far former network capabilities. Unfortunately, this new ATM power and flexibility come at the cost of greater complexity. With the detailed coverage of the entire set of protocols in Multiprotocol over ATM, you can be equal to the task. If you're a network manager or designer, responsible for planning, building, or managing an enterprise or campus network, this book is for you.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/schmidt.jpg",
      "print_length": "341 pages",
      "language": "English",
      "author": "Daniel Minoli",
      "price": 18000,
      "genre": [
        "Mystery",
        "Adventure",
        "History"
      ],
      "stock": 13,
      "createdDate": "18/02/23"
    },
    {
      "id": 123,
      "title": "Dependency Injection in .NET",
      "sumary": "Dependency Injection (DI) is a software design technique emphasizing Separation of Concerns, Modularity, Extensibility and Testability. Applied well, it enables programmers to successfully deal with complexity in software and add new features to existing apps with greater ease. DI is the key to writing modular software and producing flexible and maintainable code bases.    While well-known among Java developers and other practitioners of object-oriented design, DI is only now gaining momentum in the .NET community. The Unity container released by Microsoft patterns & practices and the new Microsoft Extensibility Framework (MEF) make DI more relevant than ever for .NET developers.    Dependency Injection in .NET is a comprehensive guide than introduces DI and provides an in-depth look at applying DI practices to .NET apps. In it, you will also learn to integrate DI together with such technologies as Windows Communication Foundation, ASP.NET MVC, Windows Presentation Foundation and other core .NET components.    Building on your existing knowledge of C# and the .NET platform, this book will be most beneficial for readers who have already built at least a few software solutions of intermediate complexity. Most examples are in plain C# without use of any particular DI framework. Later, the book introduces several well-known DI frameworks, such as StructureMap, Windsor and Spring.NET. For each framework, it presents examples of its particular usage, as well as examines how the framework relates to the common patterns presented earlier in the book.    WHAT'S INSIDE        * A thorough introduction to DI principles applied to .NET development      * Numerous C#-based examples      * A comprehensive catalog of Patterns and Anti-Patterns      * Understand the importance of loose coupling      * Learn DI Containers including StructureMap, Windsor, Spring.NET and the Microsoft Extensibility Framework      * Identify and avoid common traps",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/seemann.jpg",
      "print_length": "375 pages",
      "language": "English",
      "author": "Mark Seemann",
      "price": 10000,
      "genre": [
        "Psychology",
        "Mystery",
        "Health & Fitness",
        "Adventure"
      ],
      "stock": 17,
      "createdDate": "10/04/23"
    },
    {
      "id": 124,
      "title": "Instant Messaging in Java",
      "sumary": "Instant Messaging has exploded into the online world and is a wildly popular service of the largest Internet Service Providers (ISP) like AOL with AOL Instant Messenger, MSN with Microsoft Messenger, and Yahoo with Yahoo Messenger. Millions of Internet users everyday exchange IM s and its use beyond messaging is just around the corner. For example, the new Microsoft .NET platform will be using instant messaging technology for data exchange.    This intermediate Java programming book provides Java programmers with the information and tools needed to create your own IM client and server software. You can use the software to create your own IM systems or integrate IM features into your existing software. Imagine allowing your customers to chat directly with technical support or other users from within your application!    This book focuses on the open source Jabber XML-based IM protocols (www.jabber.org) to create Java IM software. These open protocols allows your IM software to seamlessly communicate with the large number of other Jabber clients and servers available including commercial Jabber systems like the one that powers Disney's go.com IM.    Readers are assumed to know how to program in Java. No prior knowledge of Jabber or IM is needed.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/shigeoka.jpg",
      "print_length": "402 pages",
      "language": "English",
      "author": "Iain Shigeoka",
      "price": 14000,
      "genre": [
        "Poetry",
        "Fantasy"
      ],
      "stock": 12,
      "createdDate": "22/03/23"
    },
    {
      "id": 125,
      "title": "Java Applets and Channels Without Programming",
      "sumary": "If you want to use Java to enhance your Web site, you have two choices: you can write the Java applet yourself or you can find an already written Java applet that meets your needs. If you prefer not to do the writing yourself, then Java Applets and Channels Without Programming is for you. It collects almost 100 applets on a CD with detailed instructions on how to use each applet. In addition, style issues are discussed in detail; not only will you learn how to use each applet, you will learn when and where it is appropriate to use each applet. The book also introduces the new concept of channels and shows how these can be used on your web site as well.    The CD-ROM also contains an exclusive applet configuration utility, a program that allows you to configure the Java applets on the CD-ROM in a WYSIWYG (What You See Is What You Get) environment. When using the utility to configure Java applets, you do not need to know any Java programming or even any HTML programming. All you do is change the value of a parameter and click on a button to see the resulting change to the applet. The applet configuration utility is written in Java and runs in your browser, so it runs on any computer platform for which there is a Java-enabled browser.    The CD-ROM also provides example web pages for more than 60 of the included applets, so you can learn how to use the applets in real-world situations.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/shoffner.jpg",
      "print_length": "372 pages",
      "language": "English",
      "author": "Ronny Richardson",
      "price": 18000,
      "genre": [
        "Fiction",
        "Poetry"
      ],
      "stock": 16,
      "createdDate": "14/04/23"
    },
    {
      "id": 126,
      "title": "PowerShell in Practice",
      "sumary": "Whether you're optimizing performance, automating tasks, or exploiting software features, efficiency is the key to a system administrator's success. Anything that saves a few cycles is a welcome addition to your toolbox; Windows PowerShell has the potential to change the game entirely.    Windows PowerShell is a new scripting language written from the ground up with the goal of simplifying Windows system administration. It's fully aware of the Windows platform and is tightly integrated with key server technologies like Exchange, IIS, SQL Server. PowerShell borrows many ideas from the Unix scripting world, so it's instantly familiar to anyone who has scripted in Bash or another Unix shell. It's also a first-class programming language that supports everything from single-line commands to full-featured Windows programs.    PowerShell in Practice is a hands-on, cookbook-style reference intended for administrators wanting to learn and use PowerShell. Written from an administrator's perspective, it concentrates on using PowerShell for practical tasks and automation. The book starts with an introduction that includes a rapid tutorial and a review of the key areas in which you'll use PowerShell.    This book is written to answer the question \"How can PowerShell make my job as an administrator easier \" After you have your feet under you, you'll find an assortment of practical techniques presented in a Problem/Solution format.    The first major part, called Working with People, addresses user accounts, mailboxes, and desktop configuration and maintenance. The second major part, Working with Servers, offers techniques for DNS, Active Directory, Exchange, IIS, and more.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/siddaway.jpg",
      "print_length": "500 pages",
      "language": "English",
      "author": "Richard Siddaway",
      "price": 15000,
      "genre": [
        "Travel",
        "History",
        "Thriller"
      ],
      "stock": 19,
      "createdDate": "20/05/23"
    },
    {
      "id": 127,
      "title": "Making Sense of Java",
      "sumary": "The meteoric rise of interest in Java, and the simultaneous rise in Java-related hype, make this book's no-nonsense evaluation essential reading for all levels of professionals, from managers to programmers. Making Sense of Java clearly and concisely explains the concepts, features, benefits, potential, and limitations of Java. It is not a programmer's how-to guide and assumes little technical knowledge, though software developers will find this lucid overview to be a valuable introduction to the possible uses and capabilities of Java.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/simpson.jpg",
      "print_length": "180 pages",
      "language": "English",
      "author": "Jonathan Levine",
      "price": 17000,
      "genre": [
        "History",
        "Drama",
        "Philosophy"
      ],
      "stock": 19,
      "createdDate": "16/02/23"
    },
    {
      "id": 128,
      "title": "C++/CLI in Action",
      "sumary": "Developers initially welcomed Microsoft   s Managed C++ for .NET, but the twisted syntax made it difficult to use. Its much-improved replacement, C++/CLI, now provides an effective bridge between the native and managed programming worlds. Using this technology, developers can combine existing C++ programs and .NET applications with little or no refactoring. Accessing .NET libraries like Windows Forms, WPF, and WCF from standard C++ is equally easy.    C++/CLI in Action is a practical guide that will help you breathe new life into your legacy C++ programs. The book begins with a concise C++/CLI tutorial. It then quickly moves to the key themes of native/managed code interop and mixed-mode programming. You   ll learn to take advantage of GUI frameworks like Windows Forms and WPF while keeping your native C++ business logic. The book also covers methods for accessing C# or VB.NET components and libraries. Written for readers with a working knowledge of C++.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sivakumar.jpg",
      "print_length": "416 pages",
      "language": "English",
      "author": "Nishant Sivakumar",
      "price": 11000,
      "genre": [
        "Travel",
        "Romance"
      ],
      "stock": 12,
      "createdDate": "08/02/23"
    },
    {
      "id": 129,
      "title": "Magical A-Life Avatars",
      "sumary": "Here's a book guaranteed to inspire your creativity and get you looking at the Internet and the World Wide Web with new eyes. Modeling its vision on evolutionary biology, Magical A-Life Avatars uses the example environment of Macromedia Director to create:    imaginative Intranets  original Internet services and applications  new approaches to e-commerce and distance learning  smart agents and Internet robots  brain-like processing modules for adaptation and learning  novel forms of information processing  Magical A-Life Avatars shows, with practical examples, how to bring intelligence to your Website and create Internet interfaces that will increase your competitive advantage. If you're interested in cutting-edge website design and application, this book is for you.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/small.jpg",
      "print_length": "450 pages",
      "language": "English",
      "author": "Peter Small",
      "price": 10000,
      "genre": [
        "Horror",
        "Travel",
        "Fiction",
        "Self-help"
      ],
      "stock": 16,
      "createdDate": "23/04/23"
    },
    {
      "id": 130,
      "title": "Becoming Agile",
      "sumary": "Agile principles have been a breath of fresh air to many development teams stuck in the middle of a rigid, process-driven environment. Unfortunately, it's not so easy to bring Agile into an existing organization with established people and practices. Becoming Agile shows you practical techniques and strategies to move from your existing process to an Agile process without starting from scratch.    Many books discuss Agile from a theoretical or academic perspective. Becoming Agile takes a different approach and focuses on explaining Agile from a ground-level point-of-view. Author Greg Smith, a certified ScrumMaster with dozens of Agile projects under his belt, presents Agile principles in the context of a case study that flows throughout the book.    Becoming Agile focuses on the importance of adapting Agile principles to the realities of your environment. While Agile purists have often discouraged a    partial-Agile    approach, the reality is that in many shops a    purist    approach simply isn't a viable option. Over the last few years, Agile authorities have begun to discover that the best deployments of Agile are often customized to the specific situation of a given company.  As well, Becoming Agile addresses the cultural realities of deploying Agile and how to deal with the needs of executives, managers, and the development team during migration. The author discusses employee motivation and establishing incentives that reward support of Agile techniques.    Becoming Agile will show you how to create a custom Agile process that supports the realities of your environment. The process will minimize risk as you transition to Agile iteratively, allowing time for your culture and processes to acclimate to Agile principles.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/smith.jpg",
      "print_length": "408 pages",
      "language": "English",
      "author": "Ahmed Sidky",
      "price": 18000,
      "genre": [
        "Self-help",
        "Thriller",
        "Horror"
      ],
      "stock": 16,
      "createdDate": "13/03/23"
    },
    {
      "id": 131,
      "title": "ActiveMQ in Action",
      "sumary": "Modern distributed architectures require a secure, reliable way to exchange messages in asynchronous, loosely-coupled systems. For Java developers, the Java Message Service (JMS) provides that core functionality. The Apache ActiveMQ message broker is a complete open source implementation of the JMS specification. The ActiveMQ Message-Oriented Middleware, coupled with its Enterprise Integration Provider are the building blocks of an Enterprise Service Bus   the backbone of a contemporary Service Oriented Architecture.    ActiveMQ is implemented in Java, but it supports client applications written in many other programming languages including C/C++, .NET, Ruby, Perl, PHP, Python, and more. It can be integrated with other open source frameworks including Tomcat, ServiceMix, JBoss, and can easily bridge to other JMS providers.    Apache ActiveMQ in Action is a thorough, practical guide to implementing message-oriented systems in Java using ActiveMQ. The book lays out the core of ActiveMQ in clear language, starting with the anatomy of a JMS message and moving quickly through connectors, message persistence, authentication and authorization. With the basics well in hand, you move into interesting examples of ActiveMQ at work, following a running Stock Portfolio application. You'll integrate ActiveMQ with containers like Geronimo and JBoss and learn to tie into popular Java-based technologies like Spring Framework.    Along the way, you'll pick up best practices forged out of the deep experience the authors bring to the book. You'll learn to integrate with non-Java technologies and explore advanced topics like broker topologies and configuration and performance tuning.    Additionally, the book will introduce readers to using Apache Camel with Apache ActiveMQ as a way to easily utilize the Enterprise Integration Patterns.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/snyder.jpg",
      "print_length": "408 pages",
      "language": "English",
      "author": "Bruce Snyder",
      "price": 11000,
      "genre": [
        "Fantasy",
        "Science"
      ],
      "stock": 16,
      "createdDate": "02/06/23"
    },
    {
      "id": 132,
      "title": "Implementing PeopleSoft Financials",
      "sumary": "The PeopleSoft promise is enticing: Here's a way for your company to implement a complete and flexible financial infrastructure in a client/server environment without the burdens of low-level programming. But, implementation remains complex and requires reengineering of the business processes and cultures of the using organizations. The author, an experienced implementor of PeopleSoft systems, discusses the issues that arise and the pitfalls to avoid. Every member of the implementation team--from entry-level accounting clerk through MIS staff to executive sponsors--will benefit from reading this book. The views it contains, coming from an independent authority, will also prove useful to those who are considering adopting PeopleSoft for their companies.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/stephens.jpg",
      "print_length": "220 pages",
      "language": "English",
      "author": "Early Stephens",
      "price": 15000,
      "genre": [
        "Thriller",
        "Science",
        "Romance",
        "Self-help"
      ],
      "stock": 14,
      "createdDate": "31/05/23"
    },
    {
      "id": 133,
      "title": "SQL Server DMVs in Action",
      "sumary": "SQL Server DMVs in Action is a practical guide that shows you how to obtain, interpret, and act on the information captured by DMVs to keep your system in top shape. The samples provided in this book will help you master DMVs and also give you a tested, working, and instantly reusable SQL code library.    Every action in SQL Server leaves a set of tiny footprints. SQL Server records that valuable data and makes it visible through Dynamic Management Views, or DMVs. You can use this incredibly detailed information to significantly improve the performance of your queries and better understand what's going on inside your SQL Server system.    SQL Server DMVs in Action shows you how to obtain, interpret, and act on the information captured by DMVs to keep your system in top shape. The over 100 code examples help you master DMVs and give you an instantly reusable SQL library. You'll also learn to use Dynamic Management Functions (DMFs), which provide further details that enable you to improve your system's performance and health.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/stirk.jpg",
      "print_length": "352 pages",
      "language": "English",
      "author": "Ian W. Stirk",
      "price": 16000,
      "genre": [
        "Fantasy",
        "Biography",
        "Romance"
      ],
      "stock": 17,
      "createdDate": "12/01/23"
    },
    {
      "id": 134,
      "title": "EJB Cookbook",
      "sumary": "The EJB Cookbook is a resource for the practicing EJB developer. It is a systematic collection of EJB 'recipes'. Each recipe describes a practical problem and its background; it then shows the code that  solves it, and ends with a detailed discussion.    This unique book is written for developers who want quick, clean, solutions to frequent problems--or simply EJB development ideas. Easy to find recipes range from the common to the advanced. How do you secure a message-driven bean  How do you generate EJB code  How can you improve your entity bean persistence layer ",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sullins2.jpg",
      "print_length": "352 pages",
      "language": "English",
      "author": "Mark B. Whipple",
      "price": 20000,
      "genre": [
        "Comics & Graphic Novels",
        "Travel",
        "History",
        "Philosophy"
      ],
      "stock": 19,
      "createdDate": "18/05/23"
    },
    {
      "id": 135,
      "title": "JUnit in Action, Second Edition",
      "sumary": "When JUnit was first introduced a decade ago by Kent Beck and Erich Gamma, the Agile movement was in its infancy, \"Test Driven Development\" was unknown, and unit testing was just starting to move into the typical developer's vocabulary. Today, most developers acknowledge the benefits of unit testing and rely on the increasingly sophisticated tools now available. The recently released JUnit 4.5 represents the state of the art in unit testing frameworks, and provides significant new features to improve the Java development process.    JUnit in Action, Second Edition is an up-to-date guide to unit testing Java applications (including Java EE applications) using the JUnit framework and its extensions. This book provides techniques for solving real-world problems such as testing AJAX applications, using mocks to achieve testing isolation, in-container testing for Java EE and database applications, and test automation.    Written to help readers exploit JUnit 4.5, the book covers recent innovations such as the new annotations that simplify test writing, improved exception handling, and the new assertion methods. You'll also discover how to use JUnit extensions to test new application styles and frameworks including Ajax, OSGi, and HTML-based presentation layers.    Using a sample-driven approach, various unit testing strategies are covered, such as how to unit test EJBs, database applications, and web applications. Also addressed are testing strategies using freely available open source frameworks and tools, and how to unit test in isolation with Mock Objects. The book will also bring you up to speed on the latest thinking in TDD, BDD, Continuous Integration, and other practices related to unit testing.  ",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/tahchiev.jpg",
      "print_length": "504 pages",
      "language": "English",
      "author": "Gary Gregory",
      "price": 11000,
      "genre": [
        "Adventure",
        "Mystery",
        "Health & Fitness",
        "Psychology"
      ],
      "stock": 16,
      "createdDate": "25/02/23"
    },
    {
      "id": 136,
      "title": "Bitter EJB",
      "sumary": "In Bitter EJB, Bruce Tate and his co-authors continue the entertaining and engaging writing style of relating true-life adventure sport experiences to antipattern themes established in Bruce's first book, the best selling Bitter Java.    This more advanced book explores antipatterns, or common traps, within the context of EJB technology.    EJB is experiencing the mixture of practical success and controversy that accompanies a new and quickly-changing framework. Bitter EJB takes the swirling EJB controversies head-on. It offers a practical approach to design: how to become a better programmer by studying problems and solutions to the most important problems surrounding the technology.    The flip side of design patterns, antipatterns, are a fun and interesting way to take EJB expertise to the next level. The book covers many different aspects of EJB, from transactions to persistence to messaging, as well as performance and testing.    Bitter EJB will teach programmers to do the following:    Identify EJB persistence strategies  Choose Entity bean alternatives  Use EJB message driven beans  Know when to apply or avoid stateful session beans  Create efficient build strategies with XDoclet, Ant and JUnit  Automate performance tuning",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/tate2.jpg",
      "print_length": "440 pages",
      "language": "English",
      "author": "Bruce Tate",
      "price": 14000,
      "genre": [
        "Cookbooks",
        "Adventure",
        "Biography",
        "Travel"
      ],
      "stock": 11,
      "createdDate": "10/05/23"
    },
    {
      "id": 137,
      "title": "iPhone and iPad in Action",
      "sumary": "This hands-on tutorial will help you master iPhone/iPad development using the native iPhone SDK. It guides you from setting up dev tools like Xcode and Interface Builder, through coding your first app, all the way to selling in the App Store.    Using many examples, the book covers core features like accelerometers, GPS, the Address Book, and much more. Along the way, you'll learn to leverage your iPhone skills to build attractive iPad apps. This is a revised and expanded edition of the original iPhone in Action.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/trebitowski.jpg",
      "print_length": "450 pages",
      "language": "English",
      "author": "",
      "price": 20000,
      "genre": [
        "Health & Fitness",
        "Science",
        "Mystery",
        "Philosophy"
      ],
      "stock": 19,
      "createdDate": "05/04/23"
    },
    {
      "id": 138,
      "title": "Ten Years of UserFriendly.Org",
      "sumary": "For over 10 years, UserFriendly has been entertaining geeks of all stripes with its daily dose of humor, social commentary, and occasionally absurd observations about the world of technology. Loyal UserFriendly fans   UFies   have been asking for a Big Book of UserFriendly that assembles the first decade of UserFriendly   almost 4,000 individual comics   in a single volume. Manning has teamed up with the folks at UserFriendly.Org to bring you exactly that!    This unique collector's volume includes every daily strip from November 17, 1997 to November 16, 2007. Many of the cartoons are annotated with comments from UserFriendly artist and creator JD    Illiad    Frazer.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/userfriendly.jpg",
      "print_length": "1096 pages",
      "language": "English",
      "author": "JD \"Illiad\" Frazer",
      "price": 15000,
      "genre": [
        "Drama",
        "Philosophy"
      ],
      "stock": 11,
      "createdDate": "28/01/23"
    },
    {
      "id": 139,
      "title": "Spring in Action",
      "sumary": "Spring is a fresh breeze blowing over the Java landscape. Based on a design principle called Inversion of Control, Spring is a powerful but lightweight J2EE framework that does not require the use of EJBs. Spring greatly reduces the complexity of using interfaces, and speeds and simplifies your application development. You get the power and robust features of EJB and get to keep the simplicity of the non-enterprise JavaBean.    Spring in Action introduces you to the ideas behind Spring and then quickly launches into a hands-on exploration of the framework. Combining short code snippets and an ongoing example developed throughout the book, it shows you how to build simple and efficient J2EE applications. You will see how to solve persistence problems using the leading open-source tools, and also how to integrate your application with the most popular web frameworks. You will learn how to use Spring to manage the bulk of your infrastructure code so you can focus on what really matters     your critical business needs.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/walls2.jpg",
      "print_length": "472 pages",
      "language": "English",
      "author": "Ryan Breidenbach",
      "price": 17000,
      "genre": [
        "Biography",
        "Science"
      ],
      "stock": 10,
      "createdDate": "15/04/23"
    },
    {
      "id": 140,
      "title": "Spring in Action, Third Edition",
      "sumary": "A few years back, Spring arrived as is a fresh breeze blowing over the Java landscape. Based on the principles of dependency injection, interface-oriented design, and aspect-oriented programming, Spring combines enterprise application power with the simplicity of plain-old Java objects (POJOs). Now, Spring has grown into a full suite of technologies, including dedicated projects for integration, OSGI-based development, and more.    Spring in Action, Third Edition has been completely revised to reflect the latest features, tools, practices Spring offers to java developers. It begins by introducing the core concepts of Spring and then quickly launches into a hands-on exploration of the framework. Combining short code snippets and an ongoing example developed throughout the book, it shows you how to build simple and efficient J2EE applications.    Inside, you'll see how to:    Solve persistence problems  Handle asynchronous messaging  Create and consume remote services  Build web applications  Integrate with most popular web frameworks  In short, you'll learn how to use Spring to write simpler, easier to maintain code so that you can focus on what really matters   your critical business needs.    The revised Third Edition explores the core Spring Framework issues, as well as the latest updates to other Spring portfolio projects such as Spring WebFlow and Spring Security. The result is a book that's both broader and deeper than previous editions. You'll learn the full range of new features available with Spring 3, including:    More annotation-oriented options to reduce the amount of XML configuration  Full-featured support for REST  A new Spring Expression Language (SpEL) that makes short work of wiring complex values.  Examples that illustrate the current best practices developed in the Spring community.  This book assumes that you know your way around Java, but no previous experience with Spring is required.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/walls4.jpg",
      "print_length": "424 pages",
      "language": "English",
      "author": "Craig Walls",
      "price": 10000,
      "genre": [
        "Travel",
        "Psychology",
        "Fantasy",
        "Biography"
      ],
      "stock": 19,
      "createdDate": "21/04/23"
    },
    {
      "id": 141,
      "title": "Spring in Practice",
      "sumary": "For enterprise Java developers, Spring Framework provides remarkable improvements in developer productivity, runtime performance, and overall application quality. Its unique blend of a complete, lightweight container that allows you to build a complex application from loosely-coupled POJOs and a set of easily understood abstractions that simplify construction, testing, and deployment make Spring both powerful and easy-to-use   a hard-to-beat combination. With this power comes the potential for a wide range of uses in both common and not-so-common scenarios. That's where Spring in Practice comes in.    Unlike the many books that teach you what Spring is, Spring in Practice shows you how to tackle the challenges you face when you build Spring-based applications. The book empowers software developers to solve concrete business problems \"the Spring way\" by mapping application-level issues to Spring-centric solutions.    Spring in Practice diverges from other cookbooks because it presents the background you need to understand the domain in which a solution applies before it offers the specific steps to solve the problem. You're never left with the feeling that you understand the answer, but find the question irrelevant. You can put the book to immediate use even if you don't have deep knowledge of every part of Spring Framework.    The book divides into three main parts. In Part 1, you'll get a rapid overview of Spring Framework   enough to get you started if you're new and a great refresher for readers who already have a few Spring cycles. Part 2 provides techniques that are likely to be useful no matter what type of application you're building. You'll find discussions of topics like user accounts, security, site navigation, and application diagnosis.    Part 3 provides domain-specific recipes. Here, you'll find practical solutions to realistic and interesting business problems. For example, this part discusses Spring-based approaches for ecommerce, lead generation, and CRM.    There are several recurring themes throughout Spring in Practice, including Spring MVC, Hibernate, and transactions. Each recipe is an opportunity to highlight something new or interesting about Spring, and to focus on that concept in detail.    This book assumes you have a good foundation in Java and Java EE. Prior exposure to Spring Framework is helpful, but not required.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/wheeler.jpg",
      "print_length": "600 pages",
      "language": "English",
      "author": "Willie Wheeler with Joshua White",
      "price": 13000,
      "genre": [
        "Travel",
        "Comics & Graphic Novels"
      ],
      "stock": 18,
      "createdDate": "29/04/23"
    },
    {
      "id": 142,
      "title": "SharePoint 2010 Workflows in Action",
      "sumary": "You can use SharePoint 2010 workflows to transform a set of business processes into working SharePoint applications. For that task, a power user gets prepackaged workflows, wizards, and design tools, and a programmer benefits from Visual Studio to handle advanced workflow requirements.    SharePoint 2010 Workflows in Action is a hands-on guide for workflow application development in SharePoint. Power users are introduced to the simplicity of building and integrating workflows using SharePoint Designer, Visio, InfoPath, and Office. Developers will learn to build custom processes and use external data sources. They will learn about state machine workflows, ASP.NET forms, event handlers, and much more. This book requires no previous experience with workflow app development. ",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/wicklund.jpg",
      "print_length": "360 pages",
      "language": "English",
      "author": "Phil Wicklund",
      "price": 14000,
      "genre": [
        "Horror",
        "Health & Fitness"
      ],
      "stock": 17,
      "createdDate": "11/05/23"
    },
    {
      "id": 143,
      "title": "SharePoint 2010 Web Parts in Action",
      "sumary": "If you look at a SharePoint application you'll find that most of its active components are Web Parts. SharePoint 2010 includes dozens of prebuilt Web Parts that you can use. It also provides an API that lets you build custom Web Parts using C# or VB.NET.    SharePoint 2010 Web Parts in Action is a comprehensive guide to deploying, customizing, and creating Web Parts. Countless examples walk you through everything from design, to development, deployment, troubleshooting, and upgrading. Because Web Parts are ASP.NET controls, you'll learn to use Visual Studio 2010 to extend existing Web Parts and to build custom components from scratch. ",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/wilen.jpg",
      "print_length": "448 pages",
      "language": "English",
      "author": "Wictor WilÃ©n",
      "price": 17000,
      "genre": [
        "Adventure",
        "Mystery",
        "Science Fiction",
        "Psychology"
      ],
      "stock": 11,
      "createdDate": "06/01/23"
    },
    {
      "id": 144,
      "title": "C++ Concurrency in Action",
      "sumary": "It seems like we're all being asked to multi-task more than ever   and our computers are no exception to this trend. Multiple processors with multiple cores running multiple threads is quickly becoming the norm. C++ developers will have to master the principles, techniques, and new language features supporting concurrency to stay ahead of the curve.    With the new C++ Standard and Technical Report 2 (TR2), multi-threading is coming to C++ in a big way. There is a new memory model with support for multiple threads, along with a new multi-threading support library featuring low-level atomic operations, as well as basic thread launching and synchronization facilities. TR2 will provide higher-level synchronization facilities that allow for a much greater level of abstraction, and make programming multi-threaded applications simpler and safer.    C++ Concurrency in Action is the first book to show you how to take advantage of the new C++ Standard and TR2 to write robust multi-threaded applications in C++.    As a guide and reference to the new concurrency features in the upcoming C++ Standard and TR, this book is invaluable for existing programmers familiar with writing multi-threaded code in C++ using platform-specific APIs, or in other languages, as well as C++ programmers who have never written multi-threaded code before.    If you're a programmer accustomed to writing single-threaded applications, C++ Concurrency in Action will show you how to write your new parallel algorithm in C++. You'll learn to avoid many of the pitfalls associated with writing multi-threaded applications. You can also use this book to quickly transfer your platform-specific knowledge to the new Standard C++ threading library, enabling you to use a single API on both systems and simplify your code.",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/williams.jpg",
      "print_length": "325 pages",
      "language": "English",
      "author": "Anthony Williams",
      "price": 19000,
      "genre": [
        "Cookbooks",
        "Health & Fitness",
        "Poetry"
      ],
      "stock": 10,
      "createdDate": "13/01/23"
    },
    {
      "id": 145,
      "title": "Node.js in Action",
      "sumary": "JavaScript on the server? Yep. Node.js is an elegant server-side JavaScript development environment perfect for scalable, high-performance web applications. With Node you access HTTP and TCP/IP functionality through a minimalist server-side Javascript interface. It supports an asynchronous programming model that enables the web server to more easily do more than one thing at a time, a key requirement for real-time applications such as chat, online games, and live statistics. And since it's JavaScript, you'll use the same language throughout your entire application.Node.js in Action is an example-driven tutorial that starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications. You'll start by learning how to set up your Node development environment, including loading the community-created extensions. Next, you'll run several simple demonstration programs where you'll learn the basics of a few common types of Node applications. Then you'll dive into asynchronous programming, a model Node leverages to lessen application bottlenecks.With the basics under your belt, you're ready to start building serious web applications using Node's HTTP API. You'll explore data storage, application deployment, and output templating, and you'll discover community frameworks that make web development easier and faster. Along the way, you'll learn to interact with the filesystem and to create non-HTTP applications, such as TCP/IP servers and command-line tools.Much of the Node ecosystem is open source, so this book will show you how the community works and how you can contribute. You'll learn about the NPM Repository, where most community extensions reside, and you'll learn how to publish your own extensions. In addition, the book outlines online resources for getting help with any stumbling blocks you run into during your journey as a Node developer.WHAT'S INSIDE",
      "book_url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cantelon.jpg",
      "print_length": "300 pages",
      "language": "English",
      "author": "T.J. Holowaychuk",
      "price": 20000,
      "genre": [
        "Travel",
        "Psychology",
        "Biography",
        "Science"
      ],
      "stock": 10,
      "createdDate": "16/01/23"
    }
  ];

for (let i = 0; i < BookData.length; i++) {
  const book = BookData[i];
  writeBookData(
    book.id,
    book.title,
    book.author,
    book.sumary,
    book.price,
    book.stock,
    book.genre,
    book.createdDate,
    book.book_url,
    book.print_length
  );
}

// Userdata
//

function writeUserData(user_id, username, email, first_name, last_name, phone_num, address) {
    const primaryKey = user_id;
    const reference = ref(database, "User/" + primaryKey);
    set(reference, {
      "username": username,
      "email": email,
      "first_name": first_name,
      "last_name": last_name,
      "phone_num": phone_num,
      "address": address
    }).then(() => {
        console.log("Data inserted successfully!");
        // process.exit();

      })
        .catch((error) => {
            console.error("Error inserting data:", error);
            // process.exit();

        });
}

const UserData = [
{
    "id": 1,
    "username": "thanhstar",
    "email": "thanhstar260@gmail.com",
    "first_name": "vo",
    "last_name": "thanh",
    "phone_num": "03211111111",
    "address": "HCM city"
},
{
    "id": 2,
    "username": "thanhvo",
    "email": "123@gmail.com",
    "first_name": "thanh",
    "last_name": "minh vo",
    "phone_num": "0321893121",
    "address": "ThuDuc city"
}
];
  
for (let i = 0; i < UserData.length; i++) {
const user = UserData[i];
writeUserData(
    user.id,
    user.username,
    user.email,
    user.first_name,
    user.last_name,
    user.phone_num,
    user.address
);
}


// StaffData
function writeStaffData(staff_id, username, email, first_name, last_name, phone_num, address) {
    const primaryKey = staff_id;
    const reference = ref(database, "Staff/" + primaryKey);
    set(reference, {
      "staffname": username,
      "email": email,
      "first_name": first_name,
      "last_name": last_name,
      "phone_num": phone_num,
      "address": address
    }).then(() => {
        console.log("Data inserted successfully!");
        // process.exit();

      })
        .catch((error) => {
            console.error("Error inserting data:", error);
            // process.exit();

        });
}
const StaffData = [
    {
        "id": 1,
        "username": "thanhstar",
        "email": "thanhstar260@gmail.com",
        "first_name": "vo",
        "last_name": "thanh",
        "phone_num": "03211111111",
        "address": "HCM city"
    },
    {
        "id": 2,
        "username": "thanhvo",
        "email": "123@gmail.com",
        "first_name": "thanh",
        "last_name": "minh vo",
        "phone_num": "0321893121",
        "address": "ThuDuc city"
    }
];
      
for (let i = 0; i < StaffData.length; i++) {
const staff = StaffData[i];
writeStaffData(
    staff.id,
    staff.username,
    staff.email,
    staff.first_name,
    staff.last_name,
    staff.phone_num,
    staff.address
);
}


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
      "staff_id": "None",
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
      "staff_id": "None",
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
      "book_id": [52,50,57,63],
      "staff_id": 2,
      "order_status": "done", 
      "return_date": "10/06/23",
      "verify_date": "08/06/23" 
  },
  {
      "order_id": 10, 
      "user_id": 2,
      "book_id": [52,14,33],
      "staff_id": 2,
      "order_status": "done", 
      "return_date": "20/06/23",
      "verify_date": "18/06/23" 
  },
  {
      "order_id": 11, 
      "user_id": 1,
      "book_id": [63,44,35],
      "staff_id": 1,
      "order_status": "done", 
      "return_date": "30/06/23",
      "verify_date": "26/06/23" 
  },
  {
      "order_id": 12, 
      "user_id": 2,
      "book_id": [12,44,132],
      "staff_id": 1,
      "order_status": "done", 
      "return_date": "18/06/23",
      "verify_date": "12/06/23" 
  },
  {
    "order_id": 13, 
    "user_id": 2,
    "book_id": [19,40,72],
    "staff_id": 1,
    "order_status": "done", 
    "return_date": "27/06/23",
    "verify_date": "23/06/23" 
  },
  {
    "order_id": 14, 
    "user_id": 1,
    "book_id": [20,48,75],
    "staff_id": 2,
    "order_status": "done", 
    "return_date": "14/07/23",
    "verify_date": "10/07/23" 
  },
  {
    "order_id": 15, 
    "user_id": 2,
    "book_id": [93,48,73],
    "staff_id": 2,
    "order_status": "done", 
    "return_date": "21/07/23",
    "verify_date": "18/07/23" 
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