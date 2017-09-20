// @flow
import React, { Component } from "react";
import Button from "material-ui/Button";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  onSearch() {}

  render() {
    return (
      <div>
        基本組件切換分頁功能測試用
        <br />
        Material-UI 測試
        <br />
        <Button raised onClick={this.onSearch.bind(this)}>
          <span>button</span>
        </Button>
      </div>
    );
  }
}

export default About;
