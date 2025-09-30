import { Route, Routes } from "react-router"
import App from "./App"
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import UserForm from "./pages/UserForm"


export const RoutesPublic = () => {


    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact-us" element={<ContactUs/>} />
            <Route path="/user-form" element={<UserForm/>} />
        </Routes>
    )

}