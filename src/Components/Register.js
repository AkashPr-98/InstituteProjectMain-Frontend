import React, { useState } from 'react'
import MyMenu from './Mymenu'
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




export default function Register() {


    const [errors, setErrors] = useState([]);



    const [credentials, setCredentials] = useState({ email: "", password: "", firstname: "", lastname: "", city: "", state: "" })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await fetch("http://localhost:8080/classDetail/add", {
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
                        userType: 1,
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
        <div>
            <MyMenu />
            <div className='flex flex-column justify-content-center w-20rem m-auto'>
                <div>
                    <h2>Class Sign up</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <p className='mt-1 text-left'>First Name</p>
                        <InputText className='w-20rem border-900 p-float-value -mt-3' id="firstname" name="firstname"
                            value={credentials.firstname} onChange={onChange} />
                        {errors.find((error) => error.param === 'firstname') && (
                            <p className='alerttext'>{errors.find((error) => error.param === 'firstname').msg}</p>
                        )}
                    </div>
                    <div>
                        <p className='mt-3 text-left'>Last Name</p>
                        <InputText className='w-20rem border-900 p-float-value -mt-3' id="lastname" name="lastname"
                            value={credentials.lastname} onChange={onChange} />
                        {errors.find((error) => error.param === 'lastname') && (
                            <p className='alerttext'>{errors.find((error) => error.param === 'lastname').msg}</p>
                        )}
                    </div>
                    <div>
                        <p className='mt-3 text-left'>Email</p>
                        <InputText className='w-20rem border-900 p-float-value -mt-3' id="email" name="email"
                            value={credentials.email} onChange={onChange} />
                        {errors.find((error) => error.param === 'email') && (
                            <p className='alerttext'>{errors.find((error) => error.param === 'email').msg}</p>
                        )}
                    </div>
                    <div>
                        <p className='mt-3 text-left'>Password</p>
                        <Password toggleMask feedback={false} name="password" id="password"
                            className='-mt-3 mb-2' value={credentials.password} onChange={onChange} />
                    </div>
                    {errors.find((error) => error.param === 'password') && (
                        <p className='alerttext'>{errors.find((error) => error.param === 'password').msg}</p>
                    )}
                    <div>
                        <p className='mt-3 text-left'>Address</p>
                        <InputTextarea onChange={onChange} rows={1} cols={30} autoResize className='w-20rem border-900 p-float-value -mt-3' id="address" name="address" />
                    </div>
                    <div>
                        <p className='mt-3 text-left'>Select State</p>
                        <Dropdown value={stateselect} options={states} optionLabel="state"
                            placeholder="Select state" name='state'
                            onChange={onStateChange} />
                        {errors.find((error) => error.param === 'state') && (
                            <p className='alerttext'>{errors.find((error) => error.param === 'state').msg}</p>
                        )}
                    </div>
                    <div>
                        <p className='mt-3 text-left'>Select City</p>
                        <Dropdown value={cityselect} options={city} optionLabel="city"
                            placeholder="Select city" name='city'
                            onChange={onCityChange} />
                        {errors.find((error) => error.param === 'city') && (
                            <p className='alerttext'>{errors.find((error) => error.param === 'city').msg}</p>
                        )}
                    </div>
                    <Button type="submit" label="Sign Up" className='mt-2 w-20rem' />
                </form>

            </div>
        </div>
    )
}
