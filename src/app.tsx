import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router";
import styles from "./app.module.css";
import { IState } from "./types";

interface IProps {
  readonly initialized: boolean;
}

const Home = () => "Welcome";

export class App extends PureComponent<IProps> {
  public render() {
    const { initialized } = this.props;

    if (!initialized) {
      return <div className={styles.loading}>Loading</div>;
    }
    return (
      <div className={styles.layout}>
        <Switch>
          <Route exact={true} path="/" render={Home} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: IState): IProps => {
  return {
    initialized: state.app.initialized,
  };
};

const ConnectedComponent = connect(mapStateToProps)(App);
export default withRouter(ConnectedComponent as any);
