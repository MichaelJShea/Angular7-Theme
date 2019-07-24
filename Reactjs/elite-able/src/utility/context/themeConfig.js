import React, { Component, createContext } from "react";

import Config from "../../templateConfig";

const ConfigContext = createContext(null);

class ThemeConfig extends Component {
  state = {
    windowWidth: document.getElementById("root").clientWidth,
    themeLayoutColor: Config.themeLayoutColor,
    sidebarBg: "",
    setThemeLayoutColor: value => {
      this.setState({ themeLayoutColor: value });
      if (value === "layout-light-dark") {
        this.setState({ headerBg: "light", menuBg: "default", sidebarBg: "" });
      }
      if (value === "layout-light") {
        this.setState({
          headerBg: "light",
          sidebarBg: "menu-light",
          menuBg: ``,
          menuBgGradient: "default",
          menuBgPattern: "default",
          menuBgImage: "default"
        });
      }
      if (value === "layout-dark") {
        this.setState({
          headerBg: "dark",
          menuBg: "default",
          sidebarBg: "",
          menuBgGradient: "default",
          menuBgPattern: "default",
          menuBgImage: "default"
        });
      }
      if (value === "layout-reset") {
        this.setState({
          headerBg: "light",
          sidebarBg: "",
          menuBg: "default",
          menuBgGradient: "default",
          menuBgPattern: "default",
          menuBgImage: "default"
        });
      }
    },
    settingOptions: Config.settingOptions,
    themeLayoutBox: Config.themeLayoutBox,
    themeLayoutToggle: () =>
      this.state.themeLayoutBox
        ? this.setState({ themeLayoutBox: false })
        : this.setState({ themeLayoutBox: true }),
    sidebarCollapsed: Config.sidebarCollapsed,
    sidebarToggle: () =>
      this.state.sidebarCollapsed
        ? this.setState({ sidebarCollapsed: false })
        : this.setState({ sidebarCollapsed: true }),
    sidebarFixed: Config.sidebarFixed,
    sidebarFixedToggle: () =>
      this.state.sidebarFixed
        ? this.setState({ sidebarFixed: false })
        : this.setState({ sidebarFixed: true }),
    headerFixed: Config.headerFixed,
    headerFixedToggle: () =>
      this.state.headerFixed
        ? this.setState({ headerFixed: false })
        : this.setState({ headerFixed: true }),
    sidebarBrandColor: Config.sidebarBrandColor,
    setSidebarBrandColor: value => this.setState({ sidebarBrandColor: value }),
    headerBg: Config.headerBg,
    headerBgToggle: value => this.setState({ headerBg: value }),
    dropdownIcon: Config.menuSettings.dropdownIcon,
    setDropdownIcon: value => this.setState({ dropdownIcon: value }),

    listIcon: Config.menuSettings.listIcon,
    setListIcon: value => this.setState({ listIcon: value }),

    menuCaption: Config.menuSettings.menuCaption,
    menuCaptionToggle: () =>
      this.state.menuCaption
        ? this.setState({ menuCaption: false })
        : this.setState({ menuCaption: true }),
    captionColor: Config.menuSettings.captionColor,
    setCaptionColor: value => this.setState({ captionColor: value }),
    activeColor: Config.menuSettings.activeColor,
    setActiveColor: value => this.setState({ activeColor: value }),
    iconColor: Config.menuSettings.iconColor,
    iconColorToggle: () =>
      this.state.iconColor
        ? this.setState({ iconColor: false })
        : this.setState({ iconColor: true }),
    menuBg: Config.menuSettings.menuBg,
    menuBgGradient: Config.menuSettings.menuBgGradient,
    menuBgPattern: Config.menuSettings.menuBgPattern,
    menuBgImage: Config.menuSettings.menuBgImage,
    menuBgToggle: value => {
      this.setState({
        menuBg: value,
        activeColor: ``,
        captionColor: ``,
        menuBgGradient: "default",
        menuBgPattern: "default",
        menuBgImage: "default"
      });
    },
    menuBgGradientToggle: value => {
      this.setState({
        menuBgGradient: value,
        activeColor: ``,
        captionColor: ``,
        menuBg: "default",
        menuBgPattern: "default",
        menuBgImage: "default"
      });
    },
    menuBgPatternToggle: value => {
      this.setState({
        menuBgPattern: value,
        activeColor: ``,
        captionColor: ``,
        menuBg: "default",
        menuBgGradient: "default",
        menuBgImage: "default"
      });
    },
    menuBgImageToggle: value => {
      this.setState({
        menuBgImage: value,
        activeColor: ``,
        captionColor: ``,
        menuBg: "default",
        menuBgGradient: "default",
        menuBgPattern: "default"
      });
    }
  };
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    let width = document.getElementById("root").clientWidth;
    this.setState({
      windowWidth: width
    });
    if (width <= 1200) {
      this.setState({
        sidebarCollapsed: true,
        themeLayoutBox: false
      });
    } else {
      this.setState({
        sidebarCollapsed: Config.sidebarCollapsed,
        themeLayoutBox: Config.themeLayoutBox
      });
    }
    if (width <= 991) {
      this.setState({
        settingOptions: false
      });
    } else {
      this.setState({
        settingOptions: Config.settingOptions
      });
    }
  };
  render() {
    return (
      <ConfigContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ConfigContext.Provider>
    );
  }
}

const ConfigProvider = ConfigContext.Consumer;

export { ThemeConfig, ConfigProvider };
