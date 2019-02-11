import React, { Component } from 'react';
import userPhoto from './userPhoto.jpg'
import 'materialize-css/dist/css/materialize.min.css'
import M from "materialize-css";
import './App.scss';

class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
          <div className="nav-wrapper">
            <div className="logo">
              <a href="home"><i href="home" className="left material-icons">toll</i>HYUNDAI</a>
              <span className="info">Dealer Messenger</span>
            </div>
            <ul id="nav-mobile" className="right hide-on-med-and-down nav-items">
              <li><a href="none">CAMPAIGNS</a></li>
              <li><a href="none">CUSTOMER</a></li>
              <li><a href="none">REPORTS</a></li>
            </ul>
            <div className="notification">
              <a href="notifications" className="material-icons">notifications_none</a>
            </div>
            <div className="user">
              <img src={userPhoto} alt="" className="circle responsive-img" />
              <div className="user-name">
                <h5>Bierdie Williams</h5>
                <p>selling specialist</p>
              </div>
              <a href="more"><i className="material-icons right">more_horiz</i></a>
            </div>
          </div>
        <div class="row">
          <div class="col s12">
            <ul class="tabs">
              <li class="tab col s2"><a href="#test1">sent campaigns</a></li>
              <li class="tab col s2"><a href="#test3">drafts</a></li>
              <li class="tab col s2"><a href="#test4">templates</a></li>
              <a className="waves-effect waves-light btn new-campaign" href="more"><i className="material-icons left">add_circle_outline</i>Create Campaign</a>
            </ul>
          </div>
          <div id="test1" class="col s12 sent-campaign">
            <div className="col s9 latest-campaigns">
              <div className="title-filter">
                <h1>Latest campaigns</h1>
                <p>Sort by:  <a className="dropdown-trigger" data-target='dropdown1' href="l">Date<i className="material-icons right">keyboard_arrow_down</i></a></p>
                <ul id='dropdown1' class='dropdown-content'>
                  <li><a href="#!">one</a></li>
                  <li><a href="#!">two</a></li>
                </ul>
              </div>
              <div className="table-campaign">
                <table>
                  <thead>
                    <tr>
                      <th>Campaign title</th>
                      <th>Recipients</th>
                      <th>Opened</th>
                      <th>Cta</th>
                      <th>Responses</th>
                      <th>New messages</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="line">
                      <td>Hyunday i40 Campaign <span>Set on 15 May 2017 at 08:34 am</span></td>
                      <td>1.8987</td>
                      <td>87%</td>
                      <td>39%</td>
                      <td>45%</td>
                      <td><i className="material-icons">radio_button_unchecked</i></td>
                    </tr>
                    <tr className="line">
                      <td>Hyunday i40 Campaign <span>Set on 15 May 2017 at 08:34 am</span></td>
                      <td>1.8987</td>
                      <td>87%</td>
                      <td>39%</td>
                      <td>45%</td>
                      <td><i className="material-icons">radio_button_unchecked</i></td>
                    </tr>
                    <tr className="line">
                      <td>Hyunday i40 Campaign <span>Set on 15 May 2017 at 08:34 am</span></td>
                      <td>1.8987</td>
                      <td>87%</td>
                      <td>39%</td>
                      <td>45%</td>
                      <td><i className="material-icons">radio_button_unchecked</i></td>
                    </tr>
                  </tbody>
                </table>
                <div className="more-campaigns">
                  <p>See all campaigns <i className="material-icons right">arrow_forward</i></p>
                </div>
              </div>
              <footer className="footer">
                <div className="copyright">
                  © 2017 Dealer Messenger
                  <span>Contact Support <i className="material-icons">radio_button_unchecked</i>Dealer Messenger Academy</span>
                </div>
                <div className="logo">
                  <i href="home" className="logo-image material-icons left">toll</i><a href="home">HYUNDAI</a>
                </div>
              </footer>
            </div>
            <div className="col s3 notifications-feed">
              <div className="title">
                <h4>Notifications feed</h4>
                <p>User filters to see a specific type of content <i className="material-icons right">search</i></p>
              </div>
              <div className="notification-filter">
                <a className="btn" href="notif"><i className="material-icons">notifications_none</i></a>
                <a className="btn" href="notif"><i className="material-icons">message</i></a>
                <a className="btn" href="notif"><i className="material-icons">phonelink_ring</i></a>
                <a className="btn" href="notif"><i className="material-icons">touch_app</i></a>
              </div>
              <p className="all-notifications">All Notifications</p>
              <div class="divider"></div>
              <div className="daily-notifications">
                <h4><i className="material-icons">radio_button_unchecked</i>Today</h4>
                <div className="message">
                  <div className="title">
                    <i className="material-icons left">message</i>Mike Copeland 
                    <span>Wrote</span>
                    <div className="msg-info">
                      <span>15 May 2017 at 7:35 AM</span>
                      <a className="reply" href="notif">reply<i className="material-icons right">arrow_forward</i></a>
                    </div>
                  </div>
                  <div className="text-msg">
                    <p>All I've got to do is pass as an ordinary human being. What could possibly go wrong? I hate yougurt. It's just stuffs with bits in.</p>
                  </div>
                </div>
                <div className="message">
                  <div className="title">
                    <i className="material-icons left">phonelink_ring</i>Mike Copeland
                    <span>Called</span>
                    <div className="msg-info">
                      <span>15 May 2017 at 8:35 AM</span>
                      <a className="reply" href="notif">call<i className="material-icons right">arrow_forward</i></a>
                    </div>
                  </div>
                  <div className="text-msg">
                    <p>All I've got to do is pass as an ordinary human being. What could possibly go wrong? I hate yougurt. It's just stuffs with bits in.</p>
                  </div>
                </div>
                <div className="message">
                  <div className="title">
                    <i className="material-icons left">message</i>Mike Copeland
                    <span>Wrote</span>
                    <div className="msg-info">
                      <span>15 May 2017 at 7:35 AM</span>
                      <a className="reply" href="notif">reply<i className="material-icons right">arrow_forward</i></a>
                    </div>
                  </div>
                  <div className="text-msg">
                    <p>All I've got to do is pass as an ordinary human being. What could possibly go wrong? I hate yougurt. It's just stuffs with bits in.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="test3" class="col s12">Test 3</div>
          <div id="test4" class="col s12">Test 4</div>
        </div>
      </div>
    );
  }
}

export default App;
