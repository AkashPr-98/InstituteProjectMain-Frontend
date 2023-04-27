import React from "react";
import { Menubar } from 'primereact/menubar';
// import {InputText} from "primereact/inputtext";
import {useNavigate} from "react-router-dom"

const MyMenu = () => {
    const navigate = useNavigate();
    const items =  [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            command: () => {navigate('/') }
        },
        {
            label: 'About us',
            icon: 'pi pi-fw pi-info-circle',
            command: () => {navigate('/about') }
        },
        {
            label: 'Contact',
            icon: 'pi pi-fw pi-phone',
            command: () => {navigate('/contact') }
        },
        {
            label: 'Register',
            icon: 'pi pi-fw pi-user',
            command: () => {navigate('/register') }
        },
        // {
        //     label: 'Dashboard',
        //     icon: 'pi pi-fw pi-user',
        //     command: () => {navigate('/dashboard') }
        // },
        {
            label: 'Login',
            icon: 'pi pi-fw pi-sign-in',
            command: () => {navigate('/login') }
        },
    ];



    return (
        <nav>
        <Menubar
            className='main-nav shadow-4'
            model={items}
            // end={<InputText placeholder="Search" type="text"/>}
          />
        </nav>
    );
}

export default MyMenu;