// import external modules
import React, { Component } from "react";
import { Row, Col } from "reactstrap";

// import internal(own) modules
import BasicCollapse from "./example/collapse/basicCollapse";

class Collapse extends Component {
  render() {
    return (
      <Row>
        <Col sm="12">
          <h5 className="mb-3">Basic Collapse</h5>
          <hr />
          <BasicCollapse />
        </Col>
      </Row>
    );
  }
}

export default Collapse;
