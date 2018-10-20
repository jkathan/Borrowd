import React from 'react';
import {connect} from 'react-redux';
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
          <img src={'https://i.imgur.com/Z4XP0V8.png'} className='logoBanner'/>
          <div className='bannerRight'>
            <h1>Borrowd</h1>
            <h2>Lending Made Easy</h2>
            <Link to = '/register' className='homescreenLink'>Sign Up Today!</Link>
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
          <p>[<em>placeholder for screenshot of Borrowd landing feature</em>]</p>
          <p>Borrowd lets you track what item you lent out, who you lent it out to, and when you want it back</p>
        </div>
        <div className="section">
          <div className="header">
              <h3>Get Notified</h3>
          </div>
          <p>[<em>placeholder for screenshot of Borrowd notification feature</em>]</p>
          <p>Borrowd notifies you when the item return date has passed and prompts you to contact the borrowee</p>
        </div>
        </div>
    </div>
    </div>
    )
  }
}
