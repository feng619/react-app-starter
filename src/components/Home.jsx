// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import * as actions from '../actions';

class Home extends Component {
  renderButton() {
    if (this.props.fortest) {
      return (
        <button onClick={() => this.props.sendTestAction(false)}>
          Sign Out
        </button>
      );
    }
    return (
      <button onClick={() => this.props.sendTestAction(true)}>Sign In</button>
    );
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            <p>
              透過 react-router-redux 套件的 {"store.dispatch(push('/port')"} 切換分頁
            </p>
            <button onClick={() => this.context.store.dispatch(push('/port'))}>
              port
            </button>
          </li>
          <li>
            <p>透過 react-router-dom 套件的 Link 切換分頁</p>
            <Link to="/port">port</Link>
          </li>
          <li>
            <p>測試 redux 的傳值</p>
            {this.renderButton()}
          </li>
        </ul>
      </nav>
    );
  }
}

Home.contextTypes = {
  store: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return { fortest: state.fortest };
}

export default connect(mapStateToProps, actions)(Home);
