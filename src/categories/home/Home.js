import React, {useEffect, useState} from 'react';
import axios from'axios'
import Navbar from '../../components/navbar';
import Topnav from '../../components/topnav';
import Footer from '../../components/footer';
import './home.scss'

function Home() {
  const [latestNews, setLatestNews] = useState([])
  const [generalhealth, setGeneralhealth] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/news',
      headers: {'Content-Type': 'application/json'}
    }).then(res => {
      console.log(res.data)
      setLatestNews(res.data)
    })
  },[setLatestNews])

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/generalhealth',
      headers: {'Content-Type': 'application/json'}
    }).then(res => {
      console.log(res.data)
      setGeneralhealth(res.data)
    })
  },[setGeneralhealth])

  return(
    <div>
      <Topnav />
      <Navbar />

      <div className="category lastest">
        <div className="container-fluid">
          <div className="ro">
            <h2>Latest</h2>

            <div className="category-bg">
              <div className="headline">
                <span className="heading">Meet your online vet</span>
                <h4>Nigerians please learn to put your dog in a cage, it has
                  its benefits - Vet
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="category editor">
        <div className="container-fluid">
          <h2>Editor's Pick</h2>

          <div className="category-bg">
            <div className="headline">
              <h4>OPINION POLL - What is your most preferred food seasoning in Nigeria</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="category sexualhealth">
        <div className="container-fluid">
          <h2>Sexual Health</h2>

          <div className="category-bg">
            <div className="headline">
              <span className="heading">Sexual Health</span>
              <h4>Here are some facts, curiosities and interesting information about your penis</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="category generalhealth">
        <div className="container-fluid">
          <h2>General Health</h2>
          {generalhealth.map(news => {
            return(
              <div className="news-card">
                <i>{news.category}</i>
                <h2 className="news_headline">{news.headline}</h2>
                <p className="news_content">{news.content}</p>
              </div>
            )
          })}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home;