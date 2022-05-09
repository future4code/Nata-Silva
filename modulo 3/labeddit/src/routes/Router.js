import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login"
import Cadastro from "../pages/Cadastro"
import Feed from "../pages/Feed"
import Post from "../pages/Post"


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/post" element={<Post />} />
            </Routes>
        </BrowserRouter>
    )
}
