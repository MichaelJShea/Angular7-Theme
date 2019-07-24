// import external modules
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PerfectScrollbar from "react-perfect-scrollbar";
import classnames from "classnames";
import * as Icons from "react-feather";

// import internal(own) modules
import { ConfigProvider } from "../../../utility/context/themeConfig";
class Settings extends Component {
  state = {
    settingOpen: false,
    settingToggle: () => this.setState({ settingOpen: !this.state.settingOpen })
  };
  render() {
    return (
      <ConfigProvider>
        {context =>
          context.settingOptions ? (
            <div
              className={classnames("settings", {
                open: this.state.settingOpen
              })}
            >
              <button
                className="config-btn"
                onClick={() => this.state.settingToggle()}
              >
                <FontAwesomeIcon icon="cog" className="fa-spin" />
              </button>
              <PerfectScrollbar>
                <div className="con">
                  <div className="sett">
                  <h4>Layouts</h4>
                    <div className="color-layout">
                      <ul>
                      <li>
                          <button
                            className={
                              context.themeLayoutColor === "layout-light-dark"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              context.setThemeLayoutColor("layout-light-dark")
                            }
                          >
                          </button>
                        </li>
                        <li>
                          <button
                            className={
                              context.themeLayoutColor === "layout-light"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              context.setThemeLayoutColor("layout-light")
                            }
                          >
                          </button>
                        </li>
                        <li>
                          <button
                            className={
                              context.themeLayoutColor === "layout-dark"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              context.setThemeLayoutColor("layout-dark")
                            }
                          >
                          </button>
                        </li>
                        <li>
                          <button
                            className={
                              context.themeLayoutColor === "layout-reset"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              context.setThemeLayoutColor("layout-reset")
                            }
                          >
                            Reset to Default
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sett">
                    <h4>Icon Color Normal/colorful</h4>
                    <div className="menu-title">
                      <ul>
                        <li>
                          <button
                            className={context.iconColor ? "active" : ""}
                            onClick={() => context.iconColorToggle()}
                          >
                            Icon Color
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sett">
                    <h4>Elite Able Live Menu Customizer</h4>
                    <div className="layout">
                      <ul>
                        <li>
                          <button
                            className={context.sidebarCollapsed ? "active" : ""}
                            onClick={() => context.sidebarToggle()}
                          >
                            Sidebar Collapsed
                          </button>
                        </li>
                        <li>
                          <button
                            className={context.headerFixed ? "active" : ""}
                            onClick={() => context.headerFixedToggle()}
                          >
                            Header Fixed
                          </button>
                        </li>
                        <li>
                          <button
                            className={context.sidebarFixed ? "active" : ""}
                            onClick={() => context.sidebarFixedToggle()}
                          >
                            Menu Fixed
                          </button>
                        </li>
                        <li>
                          <button
                            className={context.themeLayoutBox ? "active" : ""}
                            onClick={() => context.themeLayoutToggle()}
                          >
                            Box Layouts
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="sett">
                    <h4>header background</h4>
                    <ul className="header-color">
                      <li>
                        <button
                          className={
                            context.headerBg === "light" ? "active" : null
                          }
                          onClick={() => context.headerBgToggle("light")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.headerBg === "blue" ? "active" : null
                          }
                          onClick={() => context.headerBgToggle("blue")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.headerBg === "red" ? "active" : null
                          }
                          onClick={() => context.headerBgToggle("red")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.headerBg === "purple" ? "active" : null
                          }
                          onClick={() => context.headerBgToggle("purple")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.headerBg === "info" ? "active" : null
                          }
                          onClick={() => context.headerBgToggle("info")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.headerBg === "dark" ? "active" : null
                          }
                          onClick={() => context.headerBgToggle("dark")}
                        />
                      </li>
                    </ul>
                  </div>

                  <div className="sett">
                    <h4>menu brand color</h4>
                    <ul className="brand-color">
                      <li>
                        <button
                          className={
                            context.sidebarBrandColor === "dark"
                              ? "active"
                              : null
                          }
                          onClick={() => context.setSidebarBrandColor("dark")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.sidebarBrandColor === "blue"
                              ? "active"
                              : null
                          }
                          onClick={() => context.setSidebarBrandColor("blue")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.sidebarBrandColor === "red"
                              ? "active"
                              : null
                          }
                          onClick={() => context.setSidebarBrandColor("red")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.sidebarBrandColor === "purple"
                              ? "active"
                              : null
                          }
                          onClick={() => context.setSidebarBrandColor("purple")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.sidebarBrandColor === "info"
                              ? "active"
                              : null
                          }
                          onClick={() => context.setSidebarBrandColor("info")}
                        />
                      </li>
                    </ul>
                  </div>

                  <div className="sett">
                    <h4>Active Color</h4>
                    <ul className="active-color">
                      <li>
                        <button
                          className={
                            context.activeColor === "dark" ? "active" : null
                          }
                          onClick={() => context.setActiveColor("dark")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.activeColor === "blue" ? "active" : null
                          }
                          onClick={() => context.setActiveColor("blue")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.activeColor === "red" ? "active" : null
                          }
                          onClick={() => context.setActiveColor("red")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.activeColor === "purple" ? "active" : null
                          }
                          onClick={() => context.setActiveColor("purple")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.activeColor === "info" ? "active" : null
                          }
                          onClick={() => context.setActiveColor("info")}
                        />
                      </li>
                    </ul>
                  </div>

                  <div className="sett">
                    <h4>Menu Title Color</h4>
                    <ul className="title-color">
                      <li>
                        <button
                          className={
                            context.captionColor === "default" ? "active" : null
                          }
                          onClick={() => context.setCaptionColor("default")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.captionColor === "blue" ? "active" : null
                          }
                          onClick={() => context.setCaptionColor("blue")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.captionColor === "red" ? "active" : null
                          }
                          onClick={() => context.setCaptionColor("red")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.captionColor === "purple" ? "active" : null
                          }
                          onClick={() => context.setCaptionColor("purple")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.captionColor === "info" ? "active" : null
                          }
                          onClick={() => context.setCaptionColor("info")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.captionColor === "dark" ? "active" : null
                          }
                          onClick={() => context.setCaptionColor("dark")}
                        />
                      </li>
                    </ul>
                  </div>

                  <div className="sett">
                    <h4>Menu Title Hide/Show</h4>
                    <div className="menu-title">
                      <ul>
                        <li>
                          <button
                            className={context.menuCaption ? "active" : ""}
                            onClick={() => context.menuCaptionToggle()}
                          >
                            Menu Title
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sett">
                    <h4>Menu background</h4>
                    <ul className="header-color">
                      <li>
                        <button
                          className={
                            context.menuBg === "default" ? "active" : null
                          }
                          onClick={() => context.menuBgToggle("default")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.menuBg === "blue" ? "active" : null
                          }
                          onClick={() => context.menuBgToggle("blue")}
                        />
                      </li>
                      <li>
                        <button
                          className={context.menuBg === "red" ? "active" : null}
                          onClick={() => context.menuBgToggle("red")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.menuBg === "purple" ? "active" : null
                          }
                          onClick={() => context.menuBgToggle("purple")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.menuBg === "info" ? "active" : null
                          }
                          onClick={() => context.menuBgToggle("info")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.menuBg === "dark" ? "active" : null
                          }
                          onClick={() => context.menuBgToggle("dark")}
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="sett">
                    <h4>Menu background [ Gradient ]</h4>
                    <ul className="header-color">
                      <li>
                        <button
                          className={
                            context.menuBgGradient === "default"
                              ? "active"
                              : null
                          }
                          onClick={() =>
                            context.menuBgGradientToggle("default")
                          }
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.menuBgGradient === "blue" ? "active" : null
                          }
                          onClick={() => context.menuBgGradientToggle("blue")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.menuBgGradient === "red" ? "active" : null
                          }
                          onClick={() => context.menuBgGradientToggle("red")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.menuBgGradient === "purple"
                              ? "active"
                              : null
                          }
                          onClick={() => context.menuBgGradientToggle("purple")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.menuBgGradient === "info" ? "active" : null
                          }
                          onClick={() => context.menuBgGradientToggle("info")}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.menuBgGradient === "dark" ? "active" : null
                          }
                          onClick={() => context.menuBgGradientToggle("dark")}
                        />
                      </li>
                    </ul>
                  </div>

                  <div className="sett">
                    <h4>Menu background [ Pattern ]</h4>
                    <ul className="header-color image">
                      <li>
                        <button
                          className={
                            context.menuBgPattern === 1 ? "active" : null
                          }
                          onClick={() => context.menuBgPatternToggle(1)}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.menuBgPattern === 2 ? "active" : null
                          }
                          onClick={() => context.menuBgPatternToggle(2)}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.menuBgPattern === 3 ? "active" : null
                          }
                          onClick={() => context.menuBgPatternToggle(3)}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.menuBgPattern === 4 ? "active" : null
                          }
                          onClick={() => context.menuBgPatternToggle(4)}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.menuBgPattern === 5 ? "active" : null
                          }
                          onClick={() => context.menuBgPatternToggle(5)}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.menuBgPattern === 6 ? "active" : null
                          }
                          onClick={() => context.menuBgPatternToggle(6)}
                        />
                      </li>
                    </ul>
                  </div>

                          <div className="sett">
                    <h4>Menu background [ Image ]</h4>
                    <ul className="header-color image imgbg">
                      <li>
                        <button
                          className={
                            context.menuBgImage === 1 ? "active" : null
                          }
                          onClick={() => context.menuBgImageToggle(1)}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.menuBgImage === 2 ? "active" : null
                          }
                          onClick={() => context.menuBgImageToggle(2)}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.menuBgImage === 3 ? "active" : null
                          }
                          onClick={() => context.menuBgImageToggle(3)}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.menuBgImage === 4 ? "active" : null
                          }
                          onClick={() => context.menuBgImageToggle(4)}
                        />
                      </li>
                      <li>
                        <button
                          className={
                            context.menuBgImage === 5 ? "active" : null
                          }
                          onClick={() => context.menuBgImageToggle(5)}
                        />
                      </li>
                    </ul>
                  </div>

                  <div className="sett">
                    <h4>Menu Dropdown Icon</h4>
                    <ul className="dropdown-icon">
                      <li>
                        <div className="bal">
                          <button
                            className={
                              context.dropdownIcon === "arrow_single"
                                ? "active"
                                : null
                            }
                            onClick={() =>
                              context.setDropdownIcon("arrow_single")
                            }
                          />
                          <span>
                            <Icons.ChevronRight size={18} />
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="bal">
                          <button
                            className={
                              context.dropdownIcon === "arrow_double"
                                ? "active"
                                : null
                            }
                            onClick={() =>
                              context.setDropdownIcon("arrow_double")
                            }
                          />
                          <span>
                            <Icons.ChevronsRight size={18} />
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="bal">
                          <button
                            className={
                              context.dropdownIcon === "plus" ? "active" : null
                            }
                            onClick={() => context.setDropdownIcon("plus")}
                          />
                          <span>
                            <Icons.Plus size={18} />
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="sett">
                    <h4>Menu List Icon</h4>
                    <ul className="dropdown-icon">
                      <li>
                        <div className="bal">
                          <button
                            className={
                              context.listIcon === "line" ? "active" : null
                            }
                            onClick={() => context.setListIcon("line")}
                          />
                          <span>
                            <Icons.Minus size={18} />
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="bal">
                          <button
                            className={
                              context.listIcon === "curcile" ? "active" : null
                            }
                            onClick={() => context.setListIcon("curcile")}
                          />
                          <span>
                            <Icons.Circle size={10} />
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="bal">
                          <button
                            className={
                              context.listIcon === "check" ? "active" : null
                            }
                            onClick={() => context.setListIcon("check")}
                          />
                          <span>
                            <Icons.Check size={18} />
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="bal">
                          <button
                            className={
                              context.listIcon === "arrow_shift"
                                ? "active"
                                : null
                            }
                            onClick={() => context.setListIcon("arrow_shift")}
                          />
                          <span>
                            <Icons.CornerDownRight size={18} />
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="bal">
                          <button
                            className={
                              context.listIcon === "arrow_double"
                                ? "active"
                                : null
                            }
                            onClick={() => context.setListIcon("arrow_double")}
                          />
                          <span>
                            <Icons.ChevronsRight size={18} />
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="bal">
                          <button
                            className={
                              context.listIcon === "arrow_single"
                                ? "active"
                                : null
                            }
                            onClick={() => context.setListIcon("arrow_single")}
                          />
                          <span>
                            <Icons.ChevronRight size={18} />
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </PerfectScrollbar>
            </div>
          ) : null
        }
      </ConfigProvider>
    );
  }
}

export default Settings;
