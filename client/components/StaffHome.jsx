import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../src/navbar.css'

export default function StaffHome() {
  const navigate = useNavigate()
  function logout() {
    navigate('/')
  }
  return (
    <>
      <div className='navbar'>
        <div className='navBarContainer'>
          <div className='navBarLogo'>
            <button>
              <h3 className='text-2xl'>Airport Management System</h3>
            </button>
          </div>

          <div className='navLinks flex gap-3'>
            <button className='link-btn border-2 rounded-xl border-white border-spacing-10'>Flight Details</button>
            <button className='link-btn border-2 rounded-xl border-white border-spacing-10'>Passenger Info</button>
            <button className='link-btn border-2 rounded-xl border-white border-spacing-10'>Profile</button>
            <button className='link-btn border-2 rounded-xl border-black bg-white text-black border-spacing-10' onClick={logout}>Log Out</button>
          </div>
        </div>
      </div>
    </>
  )
}