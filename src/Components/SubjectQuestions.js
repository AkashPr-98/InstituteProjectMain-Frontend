import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown'
import { InputTextarea } from 'primereact/inputtextarea';
import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import DashNavbar from './DashNavbar'
import '../Css/DropdownDemo.css'
import axios from 'axios'


export default function SubjectQuestions() {

    const [subjects, setSubjects] = useState([]);
    const [errors, setErrors] = useState([]);
    const [subject, setSubject] = useState("")
    const [question, setQuestion] = useState("")
    const [option1, setOption1] = useState("")
    const [option2, setOption2] = useState("")
    const [option3, setOption3] = useState("")
    const [option4, setOption4] = useState("")
    const [correctans, setCorrectAns] = useState("")
    // const [credentials, setCredentials] = useState({
    //     subject: "",
    //     question: "",
    //     option1: "",
    //     option2: "",
    //     option3: "",
    //     option4: "",
    //     correctans: "",
    //     user_id: localStorage.getItem("user_id")
    // })


    useEffect(() => {

        // const newData = { user_id: credentials.user_id }
        const newData = { user_id: localStorage.getItem("user_id") }
        axios.post('http://localhost:8080/subject/view', newData)
            .then((res) => setSubjects(res.data))
            .catch((err) => setErrors(err.response.data.error))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    const handleSubmit = async (e) => {
        e.preventDefault();

        // const newData = {
        //     subject: credentials.subject,
        //     user_id: credentials.user_id,
        //     question: credentials.question,
        //     option1: credentials.option1,
        //     option2: credentials.option2,
        //     option3: credentials.option3,
        //     option4: credentials.option4,
        //     correctans: credentials.correctans.name
        // }

        const newData = {
            subject: subject,
            user_id: localStorage.getItem("user_id"),
            question: question,
            option1: option1,
            option2: option2,
            option3: option3,
            option4: option4,
            correctans: correctans.name
        }
        axios.post("http://localhost:8080/subques/add", newData)
            .then((res) => console.log(res.data))
            .catch((err) => setErrors(err.response.data.error))

        // setCredentials({
        //     ...credentials,
        //     subject: "",
        //     question: "",
        //     option1: "",
        //     option2: "",
        //     option3: "",
        //     option4: "",
        //     correctans: ""
        // })
        setSubject("")
        setQuestion("")
        setOption1("")
        setOption2("")
        setOption3("")
        setOption4("")
        setCorrectAns("")
    }

    // const onChange = (e) => {
    //     setCredentials({ ...credentials, [e.target.name]: e.target.value })
    //     setErrors(errors.filter((error) => error.param !== e.target.name))
    //     console.log(errors);
    // }

    // const onSubjectChange = (e) => {
    //     console.log(e.target.value);
    //     setCredentials({ ...credentials, [e.target.name]: e.target.value })
    //     setErrors(errors.filter((error) => error.param !== e.target.name))
    // }



    // const onOptionChange = (e) => {
    //     console.log(e.target.value);
    //     setCredentials({ ...credentials, [e.target.name]: e.target.value })
    //     setErrors(errors.filter((error) => error.param !== e.target.name))
    //     console.log(errors);
    // }

    const onSubjectChange = (e) => {
        console.log(e.target.value);
        setSubject(e.target.value)
        setErrors(errors.filter((error) => error.param !== e.target.name))
        console.log(errors);
    }

    const onQuestionChange = (e) => {
        console.log(e.target.value);
        setQuestion(e.target.value)
        setErrors(errors.filter((error) => error.param !== e.target.name))
        console.log(errors);
    }

    const onInput1Change = (e) => {
        console.log(e.target.value);
        setOption1(e.target.value)
        console.log("option1", option1);
        setErrors(errors.filter((error) => error.param !== e.target.name))
        console.log(errors);
    }

    const onInput2Change = (e) => {
        console.log(e.target.value);
        setOption2(e.target.value)
        setErrors(errors.filter((error) => error.param !== e.target.name))
        console.log(errors);
    }

    const onInput3Change = (e) => {
        console.log(e.target.value);
        setOption3(e.target.value)
        setErrors(errors.filter((error) => error.param !== e.target.name))
        console.log(errors);
    }

    const onInput4Change = (e) => {
        console.log(e.target.value);
        setOption4(e.target.value)
        setErrors(errors.filter((error) => error.param !== e.target.name))
        console.log(errors);
    }

    const onOptionChange = (e) => {
        console.log(e.target.value);
        setCorrectAns(e.target.value)
        setErrors(errors.filter((error) => error.param !== e.target.name))
        console.log(errors);
    }

    const correct = [
        { name: option1 },
        { name: option2 },
        { name: option3 },
        { name: option4 }
    ];

    return (
        <>
            <DashNavbar />
            <div className="grid">
                <div className='lg:col-2 md:col-3 sm:col-3 col-12'>
                    <Dashboard />
                </div>
                <form className='lg:col-9 md:col-9 sm:col-9 col-12 lg:ml-3'
                    onSubmit={handleSubmit}>
                    <div className='text-left lg:ml-8 md:ml-2 sm:ml-2 ml-0'>
                        <p>Select Subject</p>
                        <Dropdown value={subject} options={subjects} onChange={onSubjectChange}
                            optionLabel="subject_name" optionValue="subject_name" placeholder="Select a Subject"
                            name="subject" className='w-full' />
                        {errors.find((error) => error.param === 'subject') && (
                            <p className='alerttext'>{errors.find((error) => error.param === 'subject').msg}</p>
                        )}
                    </div>
                    <div className='text-left lg:ml-8 md:ml-2 sm:ml-2 ml-0'>
                        <p>Question</p>
                        <InputTextarea className='w-full' autoResize placeholder="Enter your question here"
                            onChange={onQuestionChange}
                            value={question} name="question" />
                        {errors.find((error) => error.param === 'question') && (
                            <p className='alerttext'>{errors.find((error) => error.param === 'question').msg}</p>
                        )}
                    </div>
                    <div className='text-left lg:ml-8 md:ml-2 sm:ml-2 ml-0'>
                        <p>Option 1</p>
                        <InputTextarea className='w-full' autoResize placeholder="Enter option 1"
                            onChange={onInput1Change}
                            value={option1} name="option1" />
                        {errors.find((error) => error.param === 'option1') && (
                            <p className='alerttext'>{errors.find((error) => error.param === 'option1').msg}</p>
                        )}
                    </div>
                    <div className='text-left lg:ml-8 md:ml-2 sm:ml-2 ml-0'>
                        <p>Option 2</p>
                        <InputTextarea className='w-full' autoResize placeholder="Enter option 2"
                            onChange={onInput2Change}
                            value={option2} name="option2" />
                        {errors.find((error) => error.param === 'option2') && (
                            <p className='alerttext'>{errors.find((error) => error.param === 'option2').msg}</p>
                        )}
                    </div>
                    <div className='text-left lg:ml-8 md:ml-2 sm:ml-2 ml-0'>
                        <p>Option 3</p>
                        <InputTextarea className='w-full' autoResize placeholder="Enter option 3"
                            onChange={onInput3Change}
                            value={option3} name="option3" />
                        {errors.find((error) => error.param === 'option3') && (
                            <p className='alerttext'>{errors.find((error) => error.param === 'option3').msg}</p>
                        )}
                    </div>
                    <div className='text-left lg:ml-8 md:ml-2 sm:ml-2 ml-0'>
                        <p>Option 4</p>
                        <InputTextarea className='w-full' autoResize placeholder="Enter option 4"
                            onChange={onInput4Change}
                            value={option4} name="option4" />
                        {errors.find((error) => error.param === 'option4') && (
                            <p className='alerttext'>{errors.find((error) => error.param === 'option4').msg}</p>
                        )}
                    </div>
                    <div className='w-11 lg:ml-8 ml-0 text-left'>
                        <p>Select Correct Answer</p>
                        <Dropdown value={correctans}
                            options={correct}
                            onChange={onOptionChange}
                            optionLabel="name" placeholder="Select correct option"
                            className='w-full' name='correctans' />
                        {errors.find((error) => error.param === 'correctans') && (
                            <p className='alerttext'>{errors.find((error) => error.param === 'correctans').msg}</p>
                        )}
                    </div>
                    <Button type="submit" label="Submit" className='mt-2' />
                </form>
            </div>
        </>
    )
}
