import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import './HelloWorld'
// import HelloWorld from './HelloWorld';
import Navbar from './components/Navbar/Navbar';
import MeetupCard from './components/MeetupCard/MeetupCard';
import NextMeetupCard from './components/NextMeetupCard/NextMeetupCard';
import MembersCard from './components/MembersCard/MembersCard';
import PastMeetupCard from './components/PastMeetupCard/PastMeetupCard';


function App() {
  return (
    <div className="App">

      <Navbar/>
      <div className="container">
        
        <MeetupCard />
        <br></br>
        <h1>Next Meetup</h1>
        <NextMeetupCard />
        <h1>About Meetup</h1>
        <p> 
          Come and meet other developers interested in the JavaScript and its library in the Greater Jakarta area<br /><br />
          Twitter: @JakartaJS and we user the hashtag #jakartajs
        </p>
        <br />
        <div>
          <h1>Members</h1> 
          <text className="SeeAll">See all</text><br />
        </div>
        <MembersCard />
        <div>
          <h1>Past Meetups</h1> 
          <text className="SeeAll">See all</text><br />
        </div>
        <div className="past-meetups">
          <PastMeetupCard date="27 November 2017" event_desc="#39 JakartaJS April Meetup with Kumparan" attendees="139"/>
          <PastMeetupCard date="27 November 2017" event_desc="#38 JakartaJS April Meetup with Blibli" attendees="113"/>
          <PastMeetupCard date="27 November 2017" event_desc="#37 JakartaJS April Meetup with Hacktiv8" attendees="110"/>
        </div>
        <br />
        <hr></hr>
        <br />
        <center><text className="copyright">Copyright &copy; Hacktiv8 2020 </text></center>
        <br />
        


              
      </div>  
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
