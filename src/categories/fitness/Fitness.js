import React, {useEffect, useState} from 'react';
import Navbar from '../../components/navbar';
import Topnav from '../../components/topnav';
import Footer from '../../components/footer';
import axios from 'axios'
import './fitness.scss'

const Fitness = () => {
  const [fitnessNews, setFitnessNews] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/fitness',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      console.log(res.data)
      setFitnessNews(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [setFitnessNews])

  return(
    <div className="main_content">
      <Topnav />
      <Navbar />
      <h1>Fitness news</h1>
      <h2>All about that body goal!</h2>
      <div className="fitness-news">
      {fitnessNews.map(news => {
        return(
            <div className="news-card" key={news._id}>
              <img src={`/news/${news._id}/image`} />
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

export default Fitness