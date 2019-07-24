import React, { Component } from "react";
import classnames from "classnames";
import { Search, X } from "react-feather";

class SearchMain extends Component {
  state = {
    searchOn: false
  };

  searchOn = () => this.setState({ searchOn: true });
  searchOff = () => this.setState({ searchOn: false });

  render() {
    return (
      <div
        className={classnames("main-search", {
          open: this.state.searchOn
        })}
      >
        <div className="input-group ">
          <input
            type="text"
            className="form-control"
            placeholder="Search . . ."
          />
          <button className="hide" onClick={() => this.searchOff()}>
            <X size={14} />
          </button>
          <button className="search" onClick={() => this.searchOn()}>
            <Search size={15} />
          </button>
        </div>
      </div>
    );
  }
}

export default SearchMain;
