import React from 'react';

function Topnav() {

  function getdate() {
    var currentMonth;
    const date = new Date();

    switch(date.getMonth()){
      case 0:
        currentMonth = "January";
        break;
      case 1:
        currentMonth = "February";
        break;
      case 2:
        currentMonth = "March";
        break;
      case 3:
        currentMonth = "April";
        break;
      case 4:
        currentMonth = "May";
        break;
      case 5:
        currentMonth = "June"
        break;
      case 6:
        currentMonth = "July"
        break;
      case 7:
        currentMonth = "August"
        break;
      case 8:
        currentMonth = "September"
        break;
      case 9:
        currentMonth = "October"
        break;
      case 10:
        currentMonth = "November"
        break;
      case 11:
        currentMonth = "December"
        break;
      default:
        currentMonth = ""
    }
    const month = currentMonth;
    const day = date.getDate();
    const year = date.getFullYear();

    const fullDate = `${month} ${day}, ${year}`;

    return fullDate;
  }

  return(
    <div className="topnav">
      <div className="getdate float-left">{getdate()}</div>

      <nav className="float-right">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </nav>
      <div className="clearfix"></div>
    </div>
  )
}

export default Topnav;