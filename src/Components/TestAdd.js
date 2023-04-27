import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import React, { useState } from 'react'
import Dashboard from './Dashboard'
import DashNavbar from './DashNavbar'
import axios from 'axios';

export default function TestAdd() {


    const [errors, setErrors] = useState([]);
    const [credentials, setCredentials] = useState({
        test_name: "",
        test_date: "",
        user_id: localStorage.getItem("user_id")
    })



    const handleSubmit = async (e) => {
        e.preventDefault();

        const newData = {
            test_name: credentials.test_name,
            test_date: credentials.test_date,
            user_id: credentials.user_id
        }
        axios.post("http://localhost:8080/test/add", newData)
        .then((res) => console.log(res.data))
        .catch((err) => setErrors(err.response.data.error))

        setCredentials({
            ...credentials,
            test_name:"",
            test_date:""
        })
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
        setErrors(errors.filter((error) => error.param !== e.target.name))
        console.log(errors);
    }


    return (
        <>
            <DashNavbar />
            <div className="grid">
                <div className='lg:col-3 md:col-3 sm:col-2 col-12'>
                    <Dashboard />
                </div>
                <form className='lg:col-9 md:col-9 sm:col-10 col-12 
                lg:mt-6 md:mt-6 sm:mt-6 mt-0' onSubmit={handleSubmit}>
                    <div>
                        <div className='text-left lg:ml-5 md:ml-2 sm:ml-2 ml-0'>
                            <p>Add Test</p>
                            <InputText className='lg:w-9 md:w-9 sm:w-full w-full'
                                onChange={onChange} value={credentials.test_name} name="test_name" />
                        </div>
                        <div className='text-left lg:ml-5 md:ml-2 sm:ml-2 ml-0'>
                            <p>Add Date</p>
                            <Calendar className='lg:w-9 md:w-9 sm:w-full w-full' id="calendar"
                                value={credentials.test_date} onChange={onChange} name="test_date" />
                        </div>
                        <Button type="submit" label="Submit" className='mt-5 -ml-8' />
                    </div>
                </form>
            </div>
        </>
    )

}
