import React from 'react';
import Topnav from '../../components/topnav';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import './food.css'

function Food() {
  return(
    <div>
      <Topnav />
      <Navbar />
      
      <div className="foodPage">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
              <h6>Food</h6>
              <div className="row">
                <div className="foodHeadline">

                </div>
                <div className="foodHeadline">
                  
                </div>
                <div className="foodHeadline">
                  
                </div>
                <div className="foodHeadline">
                  
                </div>
                <div className="foodHeadline">
                  
                </div>
                <div className="foodHeadline">
                  
                </div>
              </div>
            </div>


            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <h4>Latest Post</h4>

              <div className="latestPost">

              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Food;