import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Sidebar from './sidebar'
import {getLocalStorageToken} from './Dashboard'
import { useHistory } from 'react-router'
import './dashboard.scss'

function Allnews() {
  const [admin, setAdmin] = useState({})
  const [news, setNews] = useState([])
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
  }, [setAdmin])

  const getNews = () => {
    axios({
      method: 'GET',
      url: '/news',
      headers: {'Content-Type':'application/json', 'Authorization': getLocalStorageToken('cherryblog')}
    })
    .then(res => {
      setNews(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  useEffect(() => {

    getNews()
  }, [setNews])

  const deleteNews = (e) => {
    e.preventDefault()

    axios({
      method: 'DELETE',
      url: `/news/${e.target.value}`,
      headers: {'Content-Type': 'application/json', 'Authorization': getLocalStorageToken('cherryblog')}
    }).then(() => {
      return getNews()
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div className="allnews">
      <div className="dashboard">
        <Sidebar />

        <div className="dashboard_main_page">

        <form>
            <input type="text" placeholder="Search news..." />
          </form>

         <table>
           <thead>
             <tr>
              <th>ID</th>
              <th>Headline</th>
              <th>Category</th>
            </tr>
           </thead>
           <tbody>
             {news.map(article => {
               return (
                 <tr key={article._id}>
                    <td>{article._id}</td>
                    <td>{article.headline}</td>
                    <td>{article.category}</td>
                    <td><button>Edit</button></td>
                    <td><button onClick={deleteNews} value={article._id}>Delete</button></td>
                 </tr>
               )
             })}
           </tbody>
         </table>
        </div>
      </div>
    </div>
  )
}

export default Allnews
