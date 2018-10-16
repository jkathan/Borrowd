import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


export default class LandingPage extends React.Component {

render () {
  return (
  <div className="landingPage">
    <div className="navBar">
      <img />
      <Link to="/login" >
      Log in
      </Link>
      <Link to="/register">
      Sign up
      </Link>
    </div>
      <div className="banner">
        <h1>Borrowd</h1>
        <h2>Lending Made Easy</h2>
      </div>
      <div className="section">
        <div className="header">
            <h3>Lost track of an item?</h3>
        </div>
        <p>When was the last time you lent money, a tool, or your sick new hat to a friend and never got it back? In this fast moving world, we lose track of our items all the time! Borrowd makes sure this never happens again.</p>
      </div>
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
    )
  }
}