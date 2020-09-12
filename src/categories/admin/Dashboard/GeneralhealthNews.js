import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Sidebar from './sidebar'
import {getLocalStorageToken} from './Dashboard'
import { useHistory } from 'react-router'
import './dashboard.scss'

function GeneralhealthNews() {
  const [news, setNews] = useState([])

  const getNews = () => {
    axios({
      method: 'GET',
      url: '/generalhealth',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      console.log(res.data)
      setNews(res.data)
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
    <div>
      <div className="dashboard">
        <Sidebar />

        <div className="dashboard_main_page">
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
               return(
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

export default GeneralhealthNews
