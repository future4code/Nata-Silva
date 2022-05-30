import express from 'express'
import cors from 'cors'
import { getMaxListeners, send } from 'process';


const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

app.listen(3003, function() {
    console.log(" rodando o pc como servidor !");
});

// 2

type User = { 
    id: string | number,
    name: string,
    phone: number,
    email: string,
    website: string,
}

// 3

 const array: User[] =[
    {
        id: 2,
        name: "natã",
        phone: 81994965126,
        email: "natan@gmail.com",
        website: "www.natan.com",   
    },
    {
        id: 2,
        name: "mateus",
        phone: 596599626,
        email: "mateus@gmail.com",
        website: "www.mateus.com",   
    },
    {
        id: 3,
        name: "yasmin",
        phone: 8484848,
        email: "yasmin@gmail.com",
        website: "www.yasmin.com",   
    }
]


// 4

app.get("/users", (req, res) => {          
     res.send(array)
})

// 5 

type Post = { 
    id: string | number,
    title: string,
    body: string,
    userId: string | number 
}


// 6
const posts: Post[] =[
    {
        id: 1,
        title: "bbbb",
        body: "body",
        userId: Date.now()
    },
    {
        id: 2,
        title: "aaa",
        body: "bodybody",
        userId: Date.now()
    } 
]

 // 7 

 app.get("/post", (req, res) => {          
    res.send(posts)
})

// 8 

app.get("/post/:1", (req, res) => {          
    res.send(posts[0])
})

