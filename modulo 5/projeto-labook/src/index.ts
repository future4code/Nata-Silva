import { PostBusiness } from "./business/PostBusiness";
import { UserBusiness } from "./business/UserBusiness";
import { app } from "./controller/app";
import { PostController } from "./controller/PostController";
import { UserController } from "./controller/UserController";
import { PostDatabase } from "./data/PostDatabase";
import { UserDatabase } from "./data/UserDatabase";
import { Authenticator } from "./services/Authenticator";
import { HashManager } from "./services/HashManager";
import { IdGenerator } from "./services/IdGenerator";

const userController = new UserController(
    new UserBusiness(
        new IdGenerator(),
        new HashManager(),
        new UserDatabase(),
        new Authenticator()
    )
)

const postController = new PostController(
    new PostBusiness(
        new IdGenerator(),
        new PostDatabase(),
        new Authenticator()
    )
)

// Usuário
app.post("/signup", userController.signUp)
app.post("/login", userController.login)

// Post
app.post("/post", postController.createPost)
app.get("/post/:id", postController.getPostById)