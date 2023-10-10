import React from 'react'
import './App.css'
 import Sidenavbar from './components/SIDENAVBAR'
// import { BrowserRouter,Routes, Route} from 'react-router-dom'
 import Submission from './components/Submission'
 import Demand from './components/Demand'
  import Target from './components/Target'
 import DashboardPage from './components/DashboardPage'
 import BDEdashboard from './components/BDEdashboard'
import AtsLogin from './components/AtsLogin'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


const App = () => {
  return (
    
  
    <BrowserRouter>
   
    <div>
    {/* </> */}
      <Routes>
                <Route path = "/" element={<AtsLogin/>}/>
                <Route path = "/dashboard" element={<Sidenavbar/>}/>
                <Route path = "/BDEDashboard" element={<BDEdashboard/>}/>
                <Route path = "/Target" element={<Target/>}/>
                <Route path ="/Deamd" element={<Demand/>}/>
                <Route path ="/SubmissionReport" element={<Submission/>}/>
                {/* <Route key="/" element={}/>
                 <Route key="" element={}/>
                <Route key="" element={}/>  */}
              </Routes> 
    </div>
    </BrowserRouter>
  )
}

export default App
