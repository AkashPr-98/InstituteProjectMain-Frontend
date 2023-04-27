import './App.css';
import "../node_modules/primeflex/primeflex.css"
import React from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./Components/Home'));
const About = lazy(() => import('./Components/About'));
const Contact = lazy(() => import('./Components/Contact'));
const Register = lazy(() => import('./Components/Register'));
const StudentRegister = lazy(() => import('./Components/StudentRegister'))
const Login = lazy(() => import('./Components/Login'));
// const Dashboard = lazy(() => import('./Components/Dashboard'));
const ProtectedRoute = lazy(() => import('./utils/ProtectedRoute'));
const Subjects = lazy(() => import('./Components/Subjects'));
const SubjectsQuestions = lazy(() => import('./Components/SubjectQuestions'));
const TestAdd = lazy(() => import('./Components/TestAdd'));
const TestSubjectMap = lazy(() => import('./Components/TestSubjectMap'));
const StudentTest = lazy(() => import('./Components/StudentTest'))
// const TestSubjectsQuestions = lazy(() => import('./Components/TestSubQues'));

function App() {

 
  return (
    <div className='App'>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/studentregister" element={<StudentRegister />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/subques" element={<SubjectsQuestions />} />
            <Route path="/test" element={<TestAdd />} />
            <Route path="/testsubmap" element={<TestSubjectMap />} />
            {/* <Route path="/testques" element={<TestSubjectsQuestions />} /> */}
            {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
            {/* <Route path='/dashboard' element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            } /> */}
            <Route path='/studentregister' element={
                <ProtectedRoute>
                    <StudentRegister />
                </ProtectedRoute>
            } />
            <Route path='/testpage' element={<StudentTest/>} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
