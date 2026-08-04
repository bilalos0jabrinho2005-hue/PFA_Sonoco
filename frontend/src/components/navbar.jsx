import { Link } from "react-router-dom"
import "./navbar.css"

export const Navbar = ()=>{
    return (
    <>
        <header>
            <nav>
             
                Home
            </nav>
            <nav><a href="">About</a></nav>
            <nav><a href="">Contact</a></nav>
            <nav><a href="">Dashboard</a></nav>
            <nav><a href="">Authentification</a></nav>
        </header>
    </>
    )
}