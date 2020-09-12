import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Sidebar from './sidebar'
import './dashboard.scss'
import { useHistory } from 'react-router'

export const getLocalStorageToken = (item) => {
  const storage = localStorage.getItem(item)
  const parseStorage = JSON.parse(storage)
  return parseStorage.token
}

function Dashboard() {
  const [admin, setAdmin] = useState({})
  const [news, setNews] = useState({})
  let history = useHistory()


  useEffect(() => {
    axios({
      method: 'GET',
      url: '/admin/me',
      headers: {'Content-Type': 'application/json', 'Authorization': getLocalStorageToken('cherryblog')},
    })
    .then(res => {
      console.log(res.data)
      setAdmin(res.data)
    })
    .catch(err => {
      console.log(err)
      return history.push('/admin/signin')
    })
  }, [history])

  const postNews = (e) => {
    e.preventDefault()

    axios({
      method: 'POST',
      url: '/news',
      headers: {'Content-Type': 'application/json', 'Authorization': getLocalStorageToken('cherryblog')},
      data: news
    }).then(res => {
      console.log(res.data)
      setAdmin(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <div className="dashboard">
        <Sidebar />

        <div className="dashboard_main_page">
          <h3>Welcome {admin.name}</h3>

          <p>Share your article</p>

          <form onSubmit={postNews} className="post_form">
            <input type="text"
             placeholder="Headline..."
             className="input_field"
             name="headline" 
             onChange={(e) => news.headline = e.target.value} />

            <textarea placeholder="Write content..." 
              name="content" 
              className="input_field"
              onChange={(e) => news.content = e.target.value}>
              </textarea>

            <select onChange={(e) => news.category = e.target.value} className="input_field">
              <option>--- Category ---</option>
              <option>Fitness</option>
              <option>General Health</option>
              <option>Food</option>
              <option>Lifestyle</option>
            </select>

            <input type="file"
             name="image" 
             className="input_field"
             onChange={(e) => news.image = e.target.value} />
             
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
