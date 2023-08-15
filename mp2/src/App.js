import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Modules from './pages/modules'
import Milestones from './pages/milestones'
import Database from './pages/database'
import Feedback from './pages/feedback'
import RootLayout from './layouts/rootlayout'
import EmployeeLayout from './layouts/employeelayout'

function App() {
  return (
    <Routes>
     <Route element={<RootLayout />}>  
        <Route path="/" element={<Home />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
        <Route path="/home" element={<Home />}> </Route>
        <Route path="/dashboard" element={<Dashboard />}> </Route>
        <Route path="/modules" element={<Modules /> }> </Route>
        <Route path="/milestones" element={<Milestones /> }> </Route>
        <Route path="/database" element={<Database /> }> </Route>
        <Route path="/feedback" element={<Feedback /> }> </Route>
     </Route>

     <Route element={<EmployeeLayout/>}>

     </Route>
   </Routes>
  );
}

export default App;
