// import external modules
import React, { Component } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
import { Bell, Clock, ChevronDown } from "react-feather";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";

// import internal(own) modules
import user1 from "../../../../../assets/images/user/avatar-2.jpg";

class Notification extends Component {
  render() {
    return (
      <UncontrolledDropdown className="notify">
        <DropdownToggle className="btnt-bell">
          <Bell size={15} />
          <ChevronDown size={15} />
        </DropdownToggle>
        <DropdownMenu right className="notification">
          <div className="noti-head">
            <h6>Notifications</h6>
            <div className="float-right">
              <Link to="#">mark as read</Link>
              <Link to="#">clear all</Link>
            </div>
          </div>
          <PerfectScrollbar className="noti-body" component="ul">
            <li className="n-title">
              <p>NEW</p>
            </li>
            <li className="notifications">
              <div className="media">
                <img src={user1} alt="notification" />
                <div className="media-body">
                  <p>
                    <strong>John Doe</strong>
                    <span>
                      <Clock size={11} />5 min
                    </span>
                  </p>
                  <p>New ticket Added</p>
                </div>
              </div>
            </li>
            <li className="n-title">
              <p>EARLIER</p>
            </li>
            <li className="notifications">
              <div className="media">
                <img src={user1} alt="notification" />
                <div className="media-body">
                  <p>
                    <strong>John Doe</strong>
                    <span>
                      <Clock size={11} />5 min
                    </span>
                  </p>
                  <p>New ticket Added</p>
                </div>
              </div>
            </li>
            <li className="notifications">
              <div className="media">
                <img src={user1} alt="notification" />
                <div className="media-body">
                  <p>
                    <strong>John Doe</strong>
                    <span>
                      <Clock size={11} />5 min
                    </span>
                  </p>
                  <p>Prchace New Theme and make payment</p>
                </div>
              </div>
            </li>
            <li className="notifications">
              <div className="media">
                <img src={user1} alt="notification" />
                <div className="media-body">
                  <p>
                    <strong>John Doe</strong>
                    <span>
                      <Clock size={11} />5 min
                    </span>
                  </p>
                  <p>Prchace New Theme and make payment</p>
                </div>
              </div>
            </li>
            <li className="notifications">
              <div className="media">
                <img src={user1} alt="notification" />
                <div className="media-body">
                  <p>
                    <strong>John Doe</strong>
                    <span>
                      <Clock size={11} />5 min
                    </span>
                  </p>
                  <p>Prchace New Theme and make payment</p>
                </div>
              </div>
            </li>
          </PerfectScrollbar>
          <div className="noti-footer">
            <Link to="#">show all</Link>
          </div>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

export default Notification;
