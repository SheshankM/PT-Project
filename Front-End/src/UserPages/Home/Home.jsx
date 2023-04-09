import React from 'react'
import "./Home.css"
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
        <div class="wrapper">
        <h1>Automation In Public Transport - TEAM-17</h1>
        <div class="container">
            <div class="box">
                <h3>Search Bus Stops</h3>
                <p>Search for the Bus Stops available near me</p>
                <Link to={'/Bus-Number'}>Click Here</Link>
            </div>
            <div class="box">
                <h3>Search Buses</h3>
                <p>Search the Buses between two locations (From-To)</p>
                <Link to={'/Bus-Search'}>Click Here</Link>
            </div>
            <div class="box">
                <h3>Track Bus</h3>
                <p>Track the Bus by Reservation Service Number</p>
                <Link to={'/Bus-Number'}>Click Here</Link>
            </div>
            <div class="box">
                <h3>Emergency</h3>
                <p>Emergency Services</p>
                <a href="#" class="btn">Click here</a>
            </div>
            <div class="box">
                <h3>Feedback</h3>
                <p>Give your Feedback</p>
                <a href="#" class="btn">Click here</a>
            </div>
            <div class="box">
                <h3>Account</h3>
                <p>Account Details</p>
                <a href="#" class="btn">Click here</a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home