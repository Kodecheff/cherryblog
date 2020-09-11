import React, {Component} from 'react';
import Navbar from '../../components/navbar';
import Topnav from '../../components/topnav';
import Footer from '../../components/footer';

class Fitness extends Component {
  constructor(props) {
    super(props)

    this.state = {apiResponse: ""}
  }

  callFitnessAPI() {
    fetch('http://localhost:9000/fitness')
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}))
  }

  componentDidMount() {
    this.callFitnessAPI()
  }

  render() {
    return(
      <div>
        <Topnav />
        <Navbar />
        <h1>How do you keep fit?</h1>
        <h2>{this.state.apiResponse}</h2>
        <Footer />
      </div>
    )
  }
}

export default Fitness