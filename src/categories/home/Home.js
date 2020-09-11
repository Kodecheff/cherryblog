import React, {useState} from 'react';
import Navbar from '../../components/navbar';
import Topnav from '../../components/topnav';
import Footer from '../../components/footer';
import './home.css'

function Home() {
  const [news, setNews] = useState([])

  // fetch('localhost:4000/news')
  // .then(res => {
  //   // setNews(news)
  //   console.log(news)
  // })

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

          <div className="row">
              <div className="headline"></div>
              <div className="headline"></div>
              <div className="headline"></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home;