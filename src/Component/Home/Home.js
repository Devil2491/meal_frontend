import React from 'react'
import Navbar from '../widgets/Navbar/Navbar'
import MyCalendar from './MyCalendar'
import Navigation from '../widgets/NavigationPanel/Navigation'

const Home = () => {
  return (
    <div>
      <Navigation/>
      <Navbar/>
      <MyCalendar/>
    </div>
  )
}

export default Home