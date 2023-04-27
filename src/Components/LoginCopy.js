import React, { useState } from 'react'
import MyMenu from './Mymenu'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import GoogleLogo from '../Images/GoogleLogo.img'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown';
import '../Css/DropdownDemo.css'


export default function Login(props) {

    const [credentials, setCredentials] = useState({ email: "", password: "", userType: 0 })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password, userType: credentials.userType })
        });

        if (response) {
            const json = await response.json()
            console.log(json);
            if (json.success) {
                // Save the auth token and redirect
                localStorage.setItem('token', json.accessToken);
                navigate('/')
            }
            else {
                alert("Invalid Creds")
            }
        }

    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const user = [
        { name: 'Super', value: 0 },
        { name: 'Class', value: 1 },
        { name: 'Student', value: 2 },
    ];


    const user1 = user.map((users) => {
        return users.value
    })
    // console.log(user1);

    const [userType, setUserType] = useState(user1)
    // console.log(userType);


    const onUserTypeChange = (e) => {
        setUserType(e.target.value);
        console.log(e.target.value);
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    const myGoogleLogo = {
        width: '2.5rem',
        height: '2.5rem',
    }

    const linkToGoogle = 'https://accounts.google.com/v3/signin/identifier?dsh=S-485873614%3A1669885988615360&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=ARgdvAsN_MjXRnyhUoNuCKDlhcc3xaEgHrWfln4gcQ3-owMa82a0JQL8qLrzIA8M-kQgiPulvhGa5Q'

    return (
        <div>
            <MyMenu />
            <div className='flex flex-column justify-content-center w-20rem m-auto'>
                <div>
                    <h2>Log in to your account</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div
                        className='flex m-auto justify-content-center align-items-center border-1 border-solid border-900
                    w-20rem h-3rem'>
                        <img src={GoogleLogo} alt="" style={myGoogleLogo} />
                        <h4><a href={linkToGoogle}>Continue with Google</a></h4>
                    </div>
                    <hr className='w-20rem mt-3 opacity-80' />
                    <div>
                        <h2>Continue with email</h2>
                        <p className='mt-2 text-left'>Email</p>
                        <InputText className='w-20rem border-900 p-float-value -mt-3' id="email" name="email" value={credentials.email}
                            onChange={onChange} />
                    </div>
                    <p className='mt-3 text-left'>Password</p>
                    <div className='flex justify-content-center -mt-2'>
                        <Password toggleMask feedback={false} name="password" id="password"
                            value={credentials.password}
                            onChange={onChange} />
                    </div>
                    <p className='mt-3 text-left'>Select User Type</p>
                    <div className='flex -mt-2'>
                        <div className='dropdown-demo'>
                            <Dropdown value={userType} options={user} optionLabel="name"
                                placeholder="Select usertype" name='userType'
                                onChange={onUserTypeChange} />
                        </div>
                    </div>
                    <Button type="submit" label="Log In" className='mt-4 w-20rem' />
                </form>
                <p>or<span className='ml-2 text-purple-700'>Forgot Password</span></p>
                <p>Don't have an account?<span className='ml-1 text-purple-700 underline cursor-pointer'>Sign up</span></p>
            </div>
        </div>
    )
}





    // let userType, url;

    // if(userType === 0){
    //     url = "http://localhost:8080/login/class"

    // }else if(userType === 1){
    //     url = "http://localhost:8080/login/student"
    // }else{
    //     alert("Invalid User Type")
    // }
        // const response = await fetch("http://localhost:8080/login/class", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ email: credentials.email, password: credentials.password, userType: credentials.userType })
        // });

        //     if (response) {
        //         const json = await response.json()
        //         console.log(json);
        //         if (json.success) {
        //             // Save the auth token and redirect
        //             localStorage.setItem('token', json.authtoken);
        //             navigate('/')
        //         }
        //         else {
        //             alert("Invalid Creds")
        //         }
        //     }





        // const response2 = await fetch("http://localhost:8080/login/student", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ email: credentials.email, password: credentials.password, userType: credentials.userType  })
        // });



        //     if (response2) {
        //         const json = await response2.json()
        //         console.log(json);
        //         if (json.success) {
        //             // Save the auth token and redirect
        //             localStorage.setItem('token', json.authtoken);
        //             navigate('/')
        //         }
        //         else {
        //             alert("Invalid Creds")
        //         }
        //     }