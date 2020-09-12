import React from 'react'
import axios from 'axios'
import './dashboard.scss'
import {getLocalStorageToken} from './Dashboard'
import { useHistory } from 'react-router'

function Sidebar() {
  let history = useHistory()

  const logout = () => {
    axios({
      method: 'POST',
      url: '/admin/logout',
      headers: {'Content-Type': 'application/json', 'Authorization': getLocalStorageToken('cherryblog')},
    })
    .then(() => {
      return history.push('/admin/signin')
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <div className="dashboard_sidebar">
          <ul>
            <li onClick={() => history.push('/admin/dashboard')}>Post news</li>
            <li onClick={() => history.push('/admin/dashboard/news')}>All news</li>
            <li onClick={() => history.push('/admin/dashboard/fitness')}>Fitness news</li>
            <li onClick={() => history.push('/admin/dashboard/general health')}>General health news</li>
            <li onClick={() => history.push('/admin/dashboard/food')}>Food news</li>
            <li onClick={() => history.push('/admin/dashboard/lifestyle')}>Lifestyle news</li>
            <li onClick={logout}>Log out</li>
          </ul>
        </div>
    </div>
  )
}

export default Sidebar
