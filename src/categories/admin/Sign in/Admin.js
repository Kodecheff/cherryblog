import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

function Admin() {
  const [admin] = useState({})
  let history = useHistory()

  const signInAdmin = (e) =>{
    e.preventDefault()
    axios({
      method: 'POST',
      url: '/admin/login',
      headers: {'Content-Type': 'application/json'},
      data: admin
    }).then(res => {
      localStorage.setItem('cherryblog', JSON.stringify(res.data))
      return history.push('/admin/dashboard')
    }).catch(err => {
      console.log(err)
      return history.push('/admin/signin')
    })
  }
  return (
    <div>
      <h1>Administrator</h1>
      <p>Only authorized personnel can login</p>
      <p>If you are not authorized, geddifok!!</p>

      <form onSubmit={signInAdmin}>
        <input type="email" placeholder="Enter email" onChange={(e) => admin.email = e.target.value} required />
        <input type="password" placeholder="Enter password" onChange={(e) => admin.password = e.target.value} required />
        <button type="submit">Sign in</button>
      </form>
    </div>
  )
}

export default Admin
