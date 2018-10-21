import React from 'react';
import {Link} from 'react-router-dom';
import LandingPageHeader from './landing-page-header';
import './landing-page.css';

export default class LandingPage extends React.Component {

render () {
  return (
  <div className="landingPage">
    <div className="navBar">
      <LandingPageHeader />
    </div>
    <div className= "pageContent">
      <div className="banner">
        <div className='bannerLeft'>
          <img src={'https://i.imgur.com/Z4XP0V8.png'} className='logoBanner' alt='garage'/>
          <div className='bannerRight'>
            <h1 className='title'>Borrowd</h1>
            <h2 className='hide'>Lending Made Easy</h2>
            <Link to = '/register' className='homescreenLink hide'>Sign Up Today!</Link>
            <div className='navbuttons'>
                <div className='loginButton'> 
                  <Link to= '/login' className='navigateButtons'>
                        Login
                  </Link>
                </div>
                <div className='RegisterButton'> 
                  <Link to= '/register' className='navigateButtons'>
                        Sign Up!
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
        <div className="sectionLong">
          <div className="header">
              <h3>Lost track of an item?</h3>
          </div>
          <p>When was the last time you lent money, a tool, or your sick new hat to a friend and never got it back? In this fast moving world, we lose track of our items all the time! Borrowd makes sure this never happens again.</p>
        </div>
        <div className='sectionDescriber'>
          <div className="section">
            <div className="header">
                <h3>Loan out items</h3>
            </div>
            <div className="landingPageImages">
              <img src={'https://i.imgur.com/6OI6hO5.png'} className='appImages' alt='track loan form' />
            </div>
            <p>Borrowd lets you track what item you lent out, who you lent it out to, and when you want it back</p>
          </div>
          <div className="section">
            <div className="header">
                <h3>Get Notified</h3>
            </div>
            <div className="landingPageImages">
              <img src={'https://i.imgur.com/npRazpj.png'} className='appImages' alt='get notified page' />
            </div>
            <p>Borrowd notifies you when the item return date has passed and prompts you to contact the borrowee</p>
          </div>
        </div>
    </div>
    </div>
    )
  }
}
