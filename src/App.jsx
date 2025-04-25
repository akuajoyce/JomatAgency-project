
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'

import Home from './pages/parent-student/Home'
import Signup from './pages/auth/Signup'
import RootLayout from './layouts/RootLayout'
import Login from './pages/auth/Login'
import DashboardLayout from './layouts/DashboardLayout'
import Overview  from './pages/teacher/Overview'
import Application from './pages/teacher/Application'
import ApplyLayout from './layouts/ApplyLayout'
import Reset from './pages/auth/Reset'
import BookForm from './pages/parent-student/BookForm'
import Profiles from './pages/parent-student/Profiles'
import SingleProfile from './pages/parent-student/SingleProfile'







function App() {
 

  return (
    <>
     <div>
      <BrowserRouter>
       <Routes>

        <Route  >
          <Route path='/' element={<RootLayout />}/>
          <Route index={true} element={<Home />} />
          <Route path='signup' element={<Signup />}/>
          <Route path='login' element={<Login />}/>
          <Route path='reset' element={<Reset />} />
          <Route path='bookForm' element={<BookForm />} />
          <Route path='profiles' element={<Profiles />} />
          <Route path='profile/:id' element={<SingleProfile />} />

        </Route>


        <Route  path='/teacher' element={<DashboardLayout />} >
          <Route index={true} element={<Overview/>}/>
        </Route>

        <Route path='/teacher' element={<ApplyLayout />}>
          <Route path='Application' element={<Application />}/>
        </Route>
       </Routes>
      </BrowserRouter>
      
     </div>
    </>
  )
}

export default App
