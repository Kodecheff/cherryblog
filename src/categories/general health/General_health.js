import React, {useEffect, useState} from 'react';
import Navbar from '../../components/navbar';
import Topnav from '../../components/topnav';
import Footer from '../../components/footer';
import axios from 'axios'

function General_health() {
  const [generalHealthNews, setGeneralHealthNews] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/generalhealth/',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      console.log(res.data)
      setGeneralHealthNews(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [setGeneralHealthNews])
  return (
    <div className="main_content">
      <Topnav />
      <Navbar />
      <h1>It's all about your health</h1>
      <div className="generalhealth-news">
      {generalHealthNews.map(news => {
        return(
            <div className="news-card" key={news._id}>
              <i>{news.category}</i>
              <h2 className="headline">{news.headline}</h2>
              <p className="content">{news.content}</p>
            </div>
        )
      })}
      </div>
      <Footer />
    </div>
  )
}

export default General_health