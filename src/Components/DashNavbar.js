import React from 'react'
import { Menubar } from 'primereact/menubar';
import { useNavigate } from "react-router-dom"

export default function DashNavbar() {
    const navigate = useNavigate();

    // useEffect(() => {
    //     const handlePopState = (event) => {
    //       event.preventDefault();
    //       navigate('/studentregister');
    //     };
    
    //     window.addEventListener('popstate', handlePopState);
    
    //     return () => {
    //       window.removeEventListener('popstate', handlePopState);
    //     };
    //   }, [navigate]);

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            command: () => { navigate('/') }
        },
        {
            label: 'About us',
            icon: 'pi pi-fw pi-info-circle',
            command: () => { navigate('/about') }
        },
        {
            label: 'Contact',
            icon: 'pi pi-fw pi-phone',
            command: () => { navigate('/contact') }
        },
        // {
        //     label: 'Register',
        //     icon: 'pi pi-fw pi-user',
        //     command: () => {navigate('/register') }
        // },
        // // {
        // //     label: 'Dashboard',
        // //     icon: 'pi pi-fw pi-user',
        // //     command: () => {navigate('/dashboard') }
        // // },
        // {
        //     label: 'Login',
        //     icon: 'pi pi-fw pi-sign-in',
        //     command: () => {navigate('/login') }
        // },
        {
            label: 'Logout',
            icon: 'pi pi-fw pi-sign-out',
            command: () => {
                navigate('/');
                localStorage.clear();
            },
        },
    ];

    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    )
}

