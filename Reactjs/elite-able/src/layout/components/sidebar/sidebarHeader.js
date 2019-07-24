// import external modules
import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

// import internal(own) modules
import { ConfigProvider } from "../../../utility/context/themeConfig";

class SidebarHeader extends Component {
  render() {
    return (
      <ConfigProvider>
        {context => (
          <div className="navbar-brand header-logo">
            <Link to="/" className="b-brand">
              <div className="b-bg">E</div>
              <span className="b-title">Elite Able</span>
            </Link>
            <Link
              to="#"
              onClick={() => context.sidebarToggle()}
              className={classnames("mobile-menu", {
                on: context.sidebarCollapsed
              })}
            >
              <span />
            </Link>
          </div>
        )}
      </ConfigProvider>
    );
  }
}

export default SidebarHeader;
