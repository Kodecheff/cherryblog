import React, {useEffect, useState} from 'react';
import Navbar from '../../components/navbar';
import Topnav from '../../components/topnav';
import Footer from '../../components/footer';
import axios from 'axios'
import './lifestyle.scss'

const Lifestyle = () => {
  const [lifestyleNews, setLifestyleNews] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/lifestyle/',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      console.log(res.data)
      setLifestyleNews(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [setLifestyleNews])
  return (
    <div className="main_content">
      <Topnav />
      <Navbar />
      <h1>Lifestyle</h1>
      <div className="lifestyle-news">
      {lifestyleNews.map(news => {
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

export default Lifestyle
