import { CardController } from "./Controller/CardController"
import { PaymentController } from "./Controller/PaymentController"
import { UserController } from "./Controller/UserController"
import {app} from "./Services/app"


const userController = new UserController()
const paymentController = new PaymentController()
const cardController = new CardController()




app.post("/signup", userController.signup)

app.post("/login", userController.login )

app.post("/payment/creditcard", paymentController.creditPayment)

app.post("/payment/boleto", paymentController.boletoPayment)

app.get("/get/payment", paymentController.getPayment)

app.post("/creditcard" ,cardController.card)
