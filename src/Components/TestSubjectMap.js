import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from "primereact/checkbox";
import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import DashNavbar from './DashNavbar'
import axios from 'axios'

export default function TestSubjectMap() {

  const [documents, setDocuments] = useState([]);
  const [test, setTest] = useState([]);
  const [errors, setErrors] = useState([]);
  const [credentials, setCredentials] = useState({
    test_name: "",
    user_id: localStorage.getItem("user_id")
  })

  const selectedQuestions = documents.filter(doc => doc.selected)
    .map(doc => doc.question);
  console.log(selectedQuestions);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newData = {
      test_name: credentials.test_name,
      question: selectedQuestions,
      user_id: credentials.user_id
    }
    axios.post("http://localhost:8080/testsubject/add", newData)
      .then((res) => console.log(res.data))
      .catch((err) => setErrors(err.response.data.error))

    setCredentials({
      ...credentials,
      test_name: "",
    })
    setDocuments((prevDocuments) =>
      prevDocuments.map((doc) => ({ ...doc, selected: false }))
    )

  }

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    console.log("target:", e.target)
    console.log("value:", value);
    console.log("checked:", checked);
    setDocuments((prevDocuments) =>
      prevDocuments.map((doc) => (
        doc.question === value ? { ...doc, selected: checked } : doc
      )
      )
    );
  };


  useEffect(() => {
    const newData = { user_id: credentials.user_id }
    axios.post("http://localhost:8080/test/view", newData)
      .then((res) => setTest(res.data))
      .catch((err) => console.log(err))

    axios.post("http://localhost:8080/subques/view", newData)
      .then((res) => setDocuments(res.data))
      .catch((err) => console.log(err))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onTestChange = (e) => {
    console.log(e.target.value);
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
    setErrors(errors.filter((error) => error.param !== e.target.name))
  }

  return (
    <>
      <DashNavbar />
      <div className="grid">
        <div className='lg:col-3 md:col-3 sm:col-3 col-12'>
          <Dashboard />
        </div>
        <form className='lg:col-9 md:col-9 sm:col-9 col-12'
          onSubmit={handleSubmit}>
          <div className='w-11 lg:ml-5 ml-0 text-left'>
            <Dropdown value={credentials.test_name} options={test} onChange={onTestChange}
              placeholder="Select a Test"
              className='w-full' optionLabel="test_name" optionValue="test_name"
              name="test_name" />
          </div>

          <div className='text-left lg:ml-5 md:ml-2 sm:ml-2 ml-0 mt-6'>
            {documents.map((doc) => (
              <>
                <div key={doc._id} style={{ display: 'flex', alignItems: 'center', marginTop: 25 }}>
                  <Checkbox value={doc.question} checked={doc.selected} id={doc._id}
                    onChange={handleCheckboxChange}
                    name="question" />
                  <span style={{ marginLeft: 8 }}>{doc.question}</span>
                </div>
              </>
            ))}
          </div>
          <Button type="submit" label="Submit" className='mt-2' />
        </form>
      </div>
    </>
  )
}
