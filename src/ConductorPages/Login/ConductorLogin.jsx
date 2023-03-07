import React from 'react'
import './conductorlogin.css'

function ConductorLogin() {
  return (
    <div className='userlogin-wrapper'>
    <h2>ConductorLogin </h2>
    <main class="form-signin w-100 m-auto userlogin-wrapper">
      <form>

        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="checkbox mb-3 text-start">
          <label>
            <input type="checkbox" value="remember-me"/>Remember me</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      </form>
    </main>
  </div>
  )
}

export default ConductorLogin