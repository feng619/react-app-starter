// @flow
import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <div>
        基本組件切換分頁功能測試用
        <br />
        Material-UI 測試
        <br />
        <SelectField
          floatingLabelText="选择项目"
          value={this.state.value}
          onChange={(event, index, data) => {
            this.setState({ value: data });
          }}
          style={{
            width: 140,
          }}
        >
          <MenuItem value={null} primaryText="" />
          <MenuItem value={1} primaryText="铁轨设施" />
          <MenuItem value={2} primaryText="油井管线设备" />
          <MenuItem value={3} primaryText="钢骨结构" />
        </SelectField>
      </div>
    );
  }
}

export default About;
