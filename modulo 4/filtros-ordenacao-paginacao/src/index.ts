import { app } from "./app";
import { getByUserLimit } from "./endpoints/getByUserLimit";
import { getFilterUserByOrder } from "./endpoints/getFilterType";
import { getFilterUser } from "./endpoints/getFilterUser";
import { getFilterUserParams } from "./endpoints/getFilterUserParams";


//1

   //A:
   app.get("/filterUser", getFilterUser)

   //B:
   app.get("/filterUserParams/:name", getFilterUserParams)

//2:

   app.get("/filtertype", getFilterUserByOrder)

//3:

   app.get("/userByOrder", getByUserLimit)




