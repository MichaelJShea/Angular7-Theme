// import external modules
import React, { Component } from "react";
import classnames from "classnames";

// import internal(own) modules
import { ThemeConfig, ConfigProvider } from "../utility/context/themeConfig";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Settings from "./components/settings/settings";

export class MainLayout extends Component {
  render() {
    return (
      <ThemeConfig>
        <ConfigProvider>
          {context => (
            <div
              className={classnames({
                container: context.themeLayoutBox
              })}
            >
              <div
                className={classnames("wrapper", {
                  "layout-light":
                    context.themeLayoutColor === "layout-light" ||
                    context.themeLayoutColor === "layout-light-dark" ||
                    context.themeLayoutColor === "layout-reset",
                  "layout-dark": context.themeLayoutColor === "layout-dark"
                })}
              >
                <Sidebar />
                <Header {...this.props} />
                <div
                  className={classnames("main-wrapper", {
                    full: context.sidebarCollapsed && context.windowWidth > 991,
                    collapsed:
                      !context.sidebarCollapsed && context.windowWidth > 991,
                    "header-fixed": context.headerFixed
                  })}
                >
                  <div className="container-fluid">{this.props.children}</div>
                </div>
                <Settings />
              </div>
            </div>
          )}
        </ConfigProvider>
      </ThemeConfig>
    );
  }
}

export default MainLayout;
