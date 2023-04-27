import React, { useState } from 'react'
import { InputTextarea } from 'primereact/inputtextarea';
import DashNavbar from './DashNavbar';
import Dashboard from './Dashboard';
import { Button } from 'primereact/button';
import axios from 'axios'

export default function Subjects() {


    const [errors, setErrors] = useState([]);
    const [credentials, setCredentials] = useState({
        subject_name: "",
        user_id: localStorage.getItem("user_id")
    })


    const handleSubmit = async (e) => {
        e.preventDefault();

        const newData = {
            subject_name: credentials.subject_name,
            user_id: credentials.user_id
        }

        axios.post("http://localhost:8080/subject/add", newData)
            .then((res) => console.log(res.data))
            .catch((err) => setErrors(err.response.data.error))

        setCredentials({ ...credentials, subject_name: "" })

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
                <div className='lg:col-3 md:col-12 sm:col-12 col-6'>
                    <Dashboard />
                </div>
                <form className='lg:col-9 md:col-12 sm:col-12 col-12'
                    onSubmit={handleSubmit}>
                    <div className="text-left w-11">
                        <p>Add Subject</p>
                        <InputTextarea className='w-full' autoResize placeholder="Add Subject"
                            onChange={onChange}
                            value={credentials.subject_name}
                            name="subject_name" />
                        {errors.find((error) => error.param === 'subject_name') && (
                            <p className='alerttext'>{errors.find((error) => error.param === 'subject_name').msg}</p>
                        )}
                    </div>
                    <Button type="submit" label="Submit" className='mt-2' />
                </form>
            </div>
        </>
    )
}