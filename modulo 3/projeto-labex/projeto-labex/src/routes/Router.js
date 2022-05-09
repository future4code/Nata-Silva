import { HomePage } from "../pages/HomePage";
import { ListTripsPage } from "../pages/ListTripsPage";
import { AdminHomePage } from "../pages/AdminHomePage"
import { LoginPage } from "../pages/LoginPage"
import { CreateTripPage} from "../pages/CreateTripPage"
import { ApplicationFormPage } from "../pages/ApplicationFormPage";
import { TripDetrailsPage } from "../pages/TripDetailsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="login" element ={<LoginPage/>}/>
            <Route path="viagens" element ={<ListTripsPage/>}/>
            <Route path="admin" element ={<AdminHomePage/>}/>
            <Route path="createviagens" element ={<CreateTripPage/>}/>
            <Route path="formpage" element ={<ApplicationFormPage/>}/>
            <Route path="tripDetails" element ={<TripDetrailsPage/>}/>
        </Routes>
        </BrowserRouter>)
}