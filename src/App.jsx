import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateYourPopX from './components/CreateYourPopX'
import { Fragment } from 'react'
import LoginForm from './components/LoginForm'
import WelcomePage from './components/WelcomePage'
import AccountSetting from './components/AccountSetting'

function App() {
  return (
    <div className='min-h-screen bg-white max-w-md mx-auto shadow-lg rounded-lg'>
      <Fragment>
        <Routes>
          <Route element={<CreateYourPopX/>} path='/register'/>
          <Route element={<LoginForm/>} path='/login'/>
          <Route element={<WelcomePage/>} path='/'/>
          <Route element={<AccountSetting/>} path='/profile'/>
        </Routes>
      </Fragment>

    </div>
  )
}

export default App