import React, { Component, Children, cloneElement } from "react";
import { CardLink } from "reactstrap";
import { NavLink } from "react-router-dom";

import { ConfigProvider } from "../../../../utility/context/themeConfig";

export const Badge = ({ text, color }) => (
  <div className={`pcoded-badge label label-${color ? color : `primary`}`}>
    {text}
  </div>
);

class MenuHelper extends Component {
  state = {
    selectedMenuItem: -1,
    defaultSelect: true,
    inerMenu: [1, 0]
  };

  // Toggle menu with dropdown
  toggle = itemIndex => {
    // If menu is open
    if (this.state.selectedMenuItem === itemIndex) {
      this.setState({
        selectedMenuItem: -1
      });
    } else {
      // If menu is close
      this.setState({ selectedMenuItem: itemIndex, defaultSelect: false });
    }
  };
  toggleInner = (itemIndex, innerIndex) => {
    // If menu is open
    if (
      this.state.inerMenu[0] === itemIndex &&
      this.state.inerMenu[1] === innerIndex
    ) {
      this.setState({
        inerMenu: [1, 0]
      });
    } else {
      // If menu is close
      this.setState({ inerMenu: [itemIndex, innerIndex] });
    }
  };
  // Close other dropdown on single menu item click
  closeOther = singleItemIndex => {
    this.setState(prevState => {
      return {
        selectedMenuItem: singleItemIndex,
        defaultSelect: false
      };
    });
  };
  static Label = props => (
    <li className="pcoded-menu-caption nav-item">
      <label>{props.labelText}</label>
    </li>
  );

  static MenuSingle = props => (
    <ConfigProvider>
      {context => (
        <li
          className={`nav-item ${props.disabled ? "disabled" : ``} ${
            props.selected ? "active" : ``
          }`}
          onClick={() => {
            props.closeOther(props.index);
            if (context.windowWidth <= 991) {
              context.sidebarToggle();
            }
          }}
        >
          <NavLink exact to={props.path} activeClassName="active">
            <span className="pcoded-micon">{props.icon}</span>
            <span className="pcoded-mtext">{props.text}</span>
            {props.badgeText ? (
              <Badge text={props.badgeText} color={props.badgeColor} />
            ) : null}
          </NavLink>
          {props.children}
        </li>
      )}
    </ConfigProvider>
  );

  static MultiMenu = props => {
    return (
      <ConfigProvider>
        {context => (
          <li
            className={`nav-item pcoded-hasmenu ${
              props.selected ||
              (props.defaultSelect && props.selectedMenuItem === -1)
                ? `pcoded-trigger`
                : ``
            }`}
          >
            <CardLink
              className="nav-link"
              onClick={() => {
                props.toggle(props.index);
              }}
            >
              <span className="pcoded-micon">{props.Icon}</span>
              <span className="pcoded-mtext">
                {props.name}
                {props.badgeText ? (
                  <Badge text={props.badgeText} color={props.badgeColor} />
                ) : null}
              </span>
            </CardLink>
            {props.selected ||
            (props.defaultSelect && props.selectedMenuItem === -1) ? (
              <ul className="pcoded-submenu d-block">
                {Children.map(props.children, (child, index) => {
                  return (
                    <ConfigProvider>
                      {context => (
                        <li
                          key={index}
                          onClick={() => {
                            if (context.windowWidth <= 991) {
                              context.sidebarToggle();
                            }
                            props.toggleInner(props.index, index);
                          }}
                          className={
                            props.innerSelect[0] === props.index &&
                            props.innerSelect[1] === index
                              ? "active"
                              : ``
                          }
                        >
                          {child}
                        </li>
                      )}
                    </ConfigProvider>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
          </li>
        )}
      </ConfigProvider>
    );
  };

  render() {
    const childs = Children.map(this.props.children, (child, index) => {
      if (Boolean(child.type === MenuHelper.Label)) {
        return child;
      }
      if (Boolean(child.type === MenuHelper.MenuSingle)) {
        return cloneElement(child, {
          closeOther: this.closeOther,
          index: index,
          selectedMenuItem: this.state.selectedMenuItem,
          selected: index === this.state.selectedMenuItem ? true : false,
          ...child.props
        });
      }
      if (Boolean(child.type === MenuHelper.MultiMenu)) {
        return cloneElement(child, {
          toggle: this.toggle,
          toggleInner: this.toggleInner,
          index: index,
          innerSelect: this.state.inerMenu,
          selectedMenuItem: this.state.selectedMenuItem,
          selected: index === this.state.selectedMenuItem ? true : false,
          ...child.props
        });
      }
    });
    return (
      <ConfigProvider>
        {context => <ul className="nav pcoded-inner-navbar ">{childs}</ul>}
      </ConfigProvider>
    );
  }
}

export default MenuHelper;
