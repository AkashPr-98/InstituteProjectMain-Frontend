import React, { useState } from 'react'
// import MyMenu from './Mymenu'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea';
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown';
import '../Css/DropdownDemo.css'
import { states } from '../utils/States'
import { city } from '../utils/Districts'
import Dashboard from './Dashboard';
import DashNavbar from './DashNavbar';




export default function Register() {


    const [errors, setErrors] = useState([]);



    const [credentials, setCredentials] = useState({ email: "", password: "", firstname: "", lastname: "", city: "", state: "" })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await fetch("http://localhost:8080/studentDetail/add", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        email: credentials.email,
                        password: credentials.password,
                        firstname: credentials.firstname,
                        lastname: credentials.lastname,
                        userType: 2,
                        city: credentials.city.city,
                        state: credentials.state.state
                    }),
            });


            if (response) {
                console.log(response);
                const json = await response.json()
                console.log(json);
                if (json.error) {
                    setErrors(json.error)
                    console.log(json.error);
                } else {
                    // Save the auth token and redirect
                    // localStorage.setItem('token', json.accessToken);
                    navigate('/login')
                }
            }
        }
        catch (err) {
            console.error(err);
        }

    }


    const [stateselect, setStateselect] = useState("")
    const [cityselect, setCityselect] = useState("")

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
        setErrors(errors.filter((error) => error.param !== e.target.name))
        console.log(errors);
    }

    const onStateChange = (e) => {
        setStateselect(e.target.value);
        console.log(e.target.value);
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
        setErrors(errors.filter((error) => error.param !== e.target.name))
        console.log(errors);
    }

    const onCityChange = (e) => {
        setCityselect(e.target.value);
        console.log(e.target.value);
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
        setErrors(errors.filter((error) => error.param !== e.target.name))
        console.log(errors);
    }

    return (
        <>
            <DashNavbar className='block'/>
            <div className='grid sm:overflow-hidden overflow-visible'>
                {/* <MyMenu /> */}
                <div className='md:col-2 lg:col-3 sm:col-1'>
                    <Dashboard />
                </div>
                <div className='md:col-10 lg:col-9 sm:col-11 lg:-ml-3'>
                    <div className='-mt-3 -ml-4'>
                        <h2 className='text-blue-600'>Student Registration</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='grid'>
                            <div className='md:col-12 lg:col-4 sm:col-12 ml-4 lg:ml-8 md:ml-0 sm:ml-0
                        mr-7 sm:mr-0 lg:mr-0 md:mr-0'>
                                <p className='lg:text-left sm:text-center text-left md:text-center'>First Name</p>
                                <InputText className='w-20rem border-900' id="firstname" name="firstname"
                                    value={credentials.firstname} onChange={onChange} />
                                {errors.find((error) => error.param === 'firstname') && (
                                    <p className='alerttext'>{errors.find((error) => error.param === 'firstname').msg}</p>
                                )}
                            </div>
                            <div className='md:col-12 lg:col-4 sm:col-12 ml-4 lg:ml-8 md:ml-0 sm:ml-0
                        mr-7 sm:mr-0 lg:mr-0 md:mr-0'>
                                <p className='lg:text-left sm:text-center text-left md:text-center'>Last Name</p>
                                <InputText className='w-20rem border-900' id="lastname" name="lastname"
                                    value={credentials.lastname} onChange={onChange} />
                                {errors.find((error) => error.param === 'lastname') && (
                                    <p className='alerttext'>{errors.find((error) => error.param === 'lastname').msg}</p>
                                )}
                            </div>
                        </div>
                        <div className='grid'>
                            <div className='md:col-12 lg:col-4 sm:col-12 ml-4 lg:ml-8 md:ml-0 sm:ml-0
                        mr-7 sm:mr-0 lg:mr-0 md:mr-0'>
                                <p className='mt-3 lg:text-left sm:text-center text-left md:text-center'>Email</p>
                                <InputText className='w-20rem border-900' id="email" name="email"
                                    value={credentials.email} onChange={onChange} />
                                {errors.find((error) => error.param === 'email') && (
                                    <p className='alerttext'>{errors.find((error) => error.param === 'email').msg}</p>
                                )}
                            </div>
                            <div className='md:col-12 lg:col-4 sm:col-12 ml-4 lg:ml-8 md:ml-0 sm:ml-0
                        mr-7 sm:mr-0 lg:mr-0 md:mr-0'>
                                <p className='mt-3 lg:text-left sm:text-center text-left md:text-center'>Password</p>
                                <Password toggleMask feedback={false} name="password" id="password"
                                    className='' value={credentials.password} onChange={onChange} />
                                {errors.find((error) => error.param === 'password') && (
                                    <p className='alerttext'>{errors.find((error) => error.param === 'password').msg}</p>
                                )}
                            </div>
                        </div>
                        <div className='grid'>
                            <div className='md:col-12 lg:col-4 sm:col-12 ml-4 lg:ml-8 md:ml-0 sm:ml-0
                        mr-7 sm:mr-0 lg:mr-0 md:mr-0'>
                                <p className='lg:text-left sm:text-center text-left md:text-center'>Address</p>
                                <InputTextarea onChange={onChange} rows={1} cols={30} autoResize className='w-20rem border-900' id="address" name="address" />
                            </div>
                            <div className='md:col-12 lg:col-4 sm:col-12 ml-4 lg:ml-8 md:ml-0 sm:ml-0
                        mr-7 sm:mr-0 lg:mr-0 md:mr-0'>
                                <p className='lg:text-left sm:text-center text-left md:text-center'>Select State</p>
                                <Dropdown value={stateselect} options={states} optionLabel="state"
                                    placeholder="Select state" name='state'
                                    onChange={onStateChange} />
                                {errors.find((error) => error.param === 'state') && (
                                    <p className='alerttext'>{errors.find((error) => error.param === 'state').msg}</p>
                                )}
                            </div>
                        </div>
                        <div className='grid'>
                            <div className='md:col-12 lg:col-4 sm:col-12 ml-4 lg:ml-8 md:ml-0 sm:ml-0
                        mr-7 sm:mr-0 lg:mr-0 md:mr-0'>
                                <p className='lg:text-left sm:text-center text-left md:text-center'>Select City</p>
                                <Dropdown value={cityselect} options={city} optionLabel="city"
                                    placeholder="Select city" name='city'
                                    onChange={onCityChange} />
                                {errors.find((error) => error.param === 'city') && (
                                    <p className='alerttext'>{errors.find((error) => error.param === 'city').msg}</p>
                                )}
                            </div>
                        </div>
                        <Button type="submit" label="Sign Up" className='mt-2 w-20rem' />
                    </form>
                </div>
            </div>
        </>
    )
}
