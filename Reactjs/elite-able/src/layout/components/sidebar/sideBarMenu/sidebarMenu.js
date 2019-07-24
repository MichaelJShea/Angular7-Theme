import React, { Component } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { ConfigProvider } from "../../../../utility/context/themeConfig";
import Menus from "./menus";
import "react-perfect-scrollbar/dist/css/styles.css";

class SidebarMenu extends Component {
  render() {
    return (
      <ConfigProvider>
        {context => (
          <PerfectScrollbar className="navbar-content scroll-div">
            <Menus />
          </PerfectScrollbar>
        )}
      </ConfigProvider>
    );
  }
}

export default SidebarMenu;
