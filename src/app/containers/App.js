import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BikesActions from '../actions/bikes';

import * as UiActions from '../actions/ui';

function mapStateToProps(state) {
  return state;
}
function mergeProps(stateProps, dispachProps, ownProps) {
  const result = Object.assign({}, ownProps, stateProps, dispachProps);
  result.counter = {
    ...stateProps.bikes,
    ...dispachProps.bikes,
  };
  return result;
}
function mapDispatchToProps(dispatch) {
  return {
    bikesActions: {...bindActionCreators(BikesActions, dispatch)},
    uiActions: {...bindActionCreators(UiActions, dispatch)},
  };
}
class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.object,
    bikesActions: React.PropTypes.shape({
      getBikes:React.PropTypes.func.isRequired,
    }),
    uiActions:React.PropTypes.shape({
      updateUi:React.PropTypes.func.isRequired,
      loading:React.PropTypes.func.isRequired,
    }),
    ui: React.PropTypes.object,
  };

  componentDidMount() {
    this.props.bikesActions.getBikes();
  }
  render() {
    const childrenWithProps = React.Children.map(this.props.children,
    (child) => React.cloneElement(child, {...this.props}));

    return (
      <div className="app-wrapper">
        <section className="workspace">
          {childrenWithProps}
        </section>
      </div>
    );
  }
};
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);
