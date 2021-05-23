export default class DataManager {
    static myInstance = null;
    userID = "";

    books = [
        {
            userid: "user1",
            bookid: 1,
            title: "The Star Grand Hotel",
            subtitle: "Sydney, Australia",
            image: require("../assets/hotel1.webp"),
            category: "Hotel",
        },
        {
            userid: "user1",
            bookid: 2,
            title: "Grand Palace",
            subtitle: "Bangkok, Thailand",
            image: require("../assets/landmark1.jpg"),
            category: "Landmark",
        },
        {
            userid: "user1",
            bookid: 3,
            title: "Le Meurice",
            subtitle: "Paris, France",
            image: require("../assets/res1.jpg"),
            category: "Restaurant",
        },
        {
            userid: "user2",
            bookid: 4,
            title: "The Star Grand Hotel",
            subtitle: "Sydney, Australia",
            image: require("../assets/hotel1.webp"),
            category: "Hotel",
        },
        {
            userid: "user2",
            bookid: 5,
            title: "Grand Palace",
            subtitle: "Bangkok, Thailand",
            image: require("../assets/landmark1.jpg"),
            category: "Landmark",
        },
        {
            userid: "user2",
            bookid: 6,
            title: "Le Meurice",
            subtitle: "Paris, France",
            image: require("../assets/res1.jpg"),
            category: "Restaurant",
        }

        
    ]

    users = [
        {
            id: "user1",
            name:"Marco Polo",
            email: "marco@gmail.com",
            password: "1234",
            image:require('../assets/user1.jpeg')
        },
        {
            id:"user2",
            name:"Cristoforo Colombo",
            email: "colombo@gmail.com",
            password: "2345",
            image: require('../assets/user2.jpeg')
        },
    ];

    

    static getInstance(){
        if(DataManager.myInstance==null){
            DataManager.myInstance = new DataManager();
        }
        return this.myInstance;
    }

    getUserID(){
        return this.userID;
    }
    
    setUserID(id){
        this.userID = id;
    }

    getBooks(id){
        return this.books.filter((book)=> book.userid === id);
    }


    addBook(book){
        this.books.push(book);
    }

    addUser(user){
        this.users.push(user);
    }
}