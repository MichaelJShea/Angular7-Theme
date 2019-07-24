// import external modules
import React, { Component } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import * as Icons from "react-feather";

// import internal(own) modules
import { ConfigProvider } from "../../../utility/context/themeConfig";
import SearchMain from "./components/search/search";
import Notification from "./components/notification/notification";
import MessageBox from "./components/message/message";
import Settings from "./components/settings/settings";

class Header extends Component {
  state = {
    headerCon: true
  };
  handelHeader = () => {
    this.setState({ headerCon: !this.state.headerCon });
  };

  render() {
    document.title = this.props.title + ' | Elite Able - Most Trusted Admin Template';
    let headercon;
    const breadcumbn = (
      <Col key={1} lg={4} md={11} sm={11} xs={10}>
        <div className="breadcumbn">
          <h4>{this.props.title}</h4>
          <ul>
            <li>
              <Link to="/">
                <Icons.Home size={13} />
              </Link>
            </li>
            <li>
              <Link to={this.props.path}>{this.props.name}</Link>
            </li>
          </ul>
        </div>
      </Col>
    );
    const mainnav = (
      <Col key={2} md={11} lg={8} sm={11} xs={10}>
        <div className="main-nav">
          <ul className="coms">
            <li>
              <SearchMain />
            </li>
            <li>
              <Notification />
            </li>
            <li>
              <MessageBox />
            </li>
            <li>
              <Settings />
            </li>
          </ul>
        </div>
      </Col>
    );
    if (this.state.headerCon) {
      headercon = breadcumbn;
    } else {
      headercon = mainnav;
    }
    return (
      <ConfigProvider>
        {context => (
          <header
            className={classnames(context.headerBg, {
              collapsed: !context.sidebarCollapsed && context.windowWidth > 991,
              full: context.sidebarCollapsed && context.windowWidth > 991,
              fixed: context.headerFixed,
              boxlayout: context.themeLayoutBox && context.headerFixed
            })}
          >
            <div className="container-fluid">
              {context.windowWidth <= 991 && (
                <Row>
                  <Col sm={12} className="p-0">
                    <div
                      className={classnames(
                        `sidebar-header brand-${context.sidebarBrandColor}`,
                        {
                          collapsed: context.sidebarCollapsed
                        }
                      )}
                    >
                      <Link to="/">
                        <div className="logo">
                          <span className="b-bg">E</span>
                          <span className="b-title">Elite Able</span>
                        </div>
                      </Link>
                      <button
                        onClick={() => context.sidebarToggle()}
                        className={classnames("sidebar-toggle", {
                          on: !context.sidebarCollapsed
                        })}
                      >
                        <span />
                      </button>
                    </div>
                  </Col>
                </Row>
              )}
              <Row
                className={classnames({
                  "res-header": context.windowWidth <= 991
                })}
              >
                {context.windowWidth <= 991 ? headercon : [breadcumbn, mainnav]}
                {context.windowWidth <= 991 && (
                  <Col md={1} sm={1} xs={2} style={{ paddingLeft: "0" }}>
                    <span
                      style={{
                        lineHeight: "70px",
                        display: "block",
                        textAlign: "center"
                      }}
                    >
                      <Icons.MoreVertical
                        strokeWidth={3}
                        onClick={this.handelHeader}
                        size={24}
                        style={{ cursor: "pointer" }}
                      />
                    </span>
                  </Col>
                )}
              </Row>
            </div>
          </header>
        )}
      </ConfigProvider>
    );
  }
}

export default Header;
