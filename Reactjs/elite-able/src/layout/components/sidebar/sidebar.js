// import external modules
import React, { Component } from "react";
import classnames from "classnames";

// import internal(own) modules
import { ConfigProvider } from "../../../utility/context/themeConfig";
import SidebarHeader from "./sidebarHeader";
import SidebarMenu from "./sideBarMenu/sidebarMenu";

export class Sidebar extends Component {
  render() {
    return (
      <ConfigProvider>
        {context => (
          <div
            className={classnames(
              `pcoded-navbar
              ${context.sidebarBg}
              ${`active-${context.activeColor}`}
              ${
                `${context.sidebarBrandColor}` === "dark"
                  ? ``
                  : ` ${`brand-${context.sidebarBrandColor}`}`
              }
              ${
                `${context.captionColor}` === "default"
                  ? ``
                  : ` ${`title-${context.captionColor}`}`
              }
              ${
                `${context.menuBg}` === "default"
                  ? ``
                  : ` ${`navbar-${context.menuBg}`}`
              }
              ${
                `${context.menuBgGradient}` === "default"
                  ? ``
                  : ` ${`navbar-gradient-${context.menuBgGradient}`}`
              }
              ${
                `${context.menuBgPattern}` === "default"
                  ? ``
                  : ` ${`navbar-pattern-${context.menuBgPattern}`}`
              }
              ${
                `${context.menuBgImage}` === "default"
                  ? ``
                  : ` ${`navbar-image-${context.menuBgImage}`}`
              }
              `,
              {
                "menu-item-icon-style2": context.listIcon === "line",
                "menu-item-icon-style3": context.listIcon === "check",
                "menu-item-icon-style4": context.listIcon === "arrow_shift",
                "menu-item-icon-style5": context.listIcon === "arrow_double",
                "menu-item-icon-style6": context.listIcon === "arrow_single",
                "drp-icon-style2": context.dropdownIcon === "arrow_double",
                "drp-icon-style3": context.dropdownIcon === "plus",
                "caption-hide": !context.menuCaption,
                "icon-colored": context.iconColor,
                "navbar-collapsed":
                  context.sidebarCollapsed && context.windowWidth > 991,
                "mob-open":
                  context.windowWidth <= 991 && !context.sidebarCollapsed,
                "menupos-fixed": context.sidebarFixed
              }
            )}
          >
            <div className="navbar-wrapper ">
              {context.windowWidth > 991 && <SidebarHeader />}
              <SidebarMenu />
            </div>
          </div>
        )}
      </ConfigProvider>
    );
  }
}

export default Sidebar;
