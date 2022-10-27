import Header from "../header/Header";
import Footer from "../footer/Footer";
import {Fragment} from "react";


export default function Layout({children}) {
    return (
        <div className="layout">
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}