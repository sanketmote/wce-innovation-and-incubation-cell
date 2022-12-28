import React from 'react'
import { useNavigate } from 'react-router-dom';
import {LoginHelper} from './AppDrawer'

export default function NavBar() {

    const navigate = useNavigate();


    return (
        <>

            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <a onClick={() => {
                        navigate("/")
                    }} className="nav-item nav-link active">Home</a>
                    <a onClick={() => {
                        navigate("/about")
                    }} className="nav-item nav-link">About</a>
                    <a onClick={() => {
                        navigate("/")
                    }} className="nav-item nav-link">Innovation Council</a>
                    <div className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Events</a>
                        <div className="dropdown-menu bg-light m-0">
                            <a onClick={() => {
                        navigate("/")
                    }} className="dropdown-item">WCE ACM HACKATHON</a>
                            <a onClick={() => {
                        navigate("/")
                    }} className="dropdown-item">WCE RSC</a>
                            <a onClick={() => {
                        navigate("/")
                    }} className="dropdown-item">WLUG METAMORPHOSIS</a>
                            <a onClick={() => {
                        navigate("/")
                    }} className="dropdown-item">Z-Matrix</a>
                            <a onClick={() => {
                        navigate("/")
                    }} className="dropdown-item">Other Events</a>
                        </div>
                    </div>
                    <a onClick={() => {
                        navigate("/contact")
                    }} className="nav-item nav-link">Contact</a>
                </div>
                <LoginHelper />
            </div>
        </>
    )
}