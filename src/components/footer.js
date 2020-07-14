import React from 'react';

function Footer() {
  return(
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <h4>About Us</h4>

            <p>
            Cherry Blog is a research-based health site that specializes in Science-Backed facts about 
            diseases and treatments, cost of surgeries, In Vitro Fertilization (IVF) and anatomy of the Human Body 
            with the aim of enlightening, educating, and informing the public. This site scientifically answers all 
            health questions and concerns of individuals and the public.
            </p>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <h4>Site Links</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Share Story</li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <h4>SUBSCRIBE FOR UPDATES</h4>

            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>

      <footer>
        Copyright &copy; 2020 Cherry blog | Designed & Developed by Kodecheff
      </footer>
    </div>
  )
}

export default Footer;