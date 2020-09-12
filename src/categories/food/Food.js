import React, { useEffect, useState } from 'react';
import Topnav from '../../components/topnav';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import axios from 'axios'
import './food.scss'

function Food() {
  const [foodNews, setFoodNews] = useState([])

  useEffect(() =>{
    axios({
      method: 'GET',
      url: '/food',
      headers: {'Content-Type': 'application/json'}
    }).then(res => {
      setFoodNews(res.data)
    })
  }, [setFoodNews])

  return(
    <div className="main_content">
      <Topnav />
      <Navbar />
      
      <div className="foodPage">
        <div className="containe">
          <h3>Food</h3>
          <div className="food-news">
            {foodNews.map(news => {
              return(
                <div className="news-card">
                  <i>{news.category}</i>
                  <h2>{news.headline}</h2>
                  <p>{news.content}</p>
                </div>
              )
            })}  
          </div>
        </div>


        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <h4>Latest Post</h4>

          <div className="latestPost">

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Food;