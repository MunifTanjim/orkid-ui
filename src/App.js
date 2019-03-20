import React, { Component } from 'react';

import Home from './Home';
import ResultList from './ResultList';
import FailedList from './FailedList';
import DeadList from './DeadList';

import { Navbar, NavbarDivider, NavbarGroup, NavbarHeading, Classes, Alignment, Button } from '@blueprintjs/core';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { activeTabIndex: 0 };
  }

  tabs = [<Home />, <ResultList />, <FailedList />, <DeadList />];

  changeActiveTab = activeTabIndex => {
    this.setState({ activeTabIndex });
  };

  render() {
    const { activeTabIndex } = this.state;

    return (
      <div>
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading className={Classes.LARGE}>
              <h4>Orkid Dashboard</h4>
            </NavbarHeading>
            <NavbarDivider />
            <Button
              className={Classes.MINIMAL}
              icon="home"
              text="Queues"
              active={activeTabIndex === 0}
              onClick={() => this.changeActiveTab(0)}
            />
            <NavbarDivider />
            <Button
              className={Classes.MINIMAL}
              icon="updated"
              text="Result List"
              active={activeTabIndex === 1}
              onClick={() => this.changeActiveTab(1)}
            />
            <NavbarDivider />
            <Button
              className={Classes.MINIMAL}
              icon="error"
              text="Failed List"
              active={activeTabIndex === 2}
              onClick={() => this.changeActiveTab(2)}
            />
            <NavbarDivider />
            <Button
              className={Classes.MINIMAL}
              icon="ban-circle"
              text="Dead List"
              active={activeTabIndex === 3}
              onClick={() => this.changeActiveTab(3)}
            />
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <Button className={Classes.MINIMAL} icon="share" text="GitHub" />
          </NavbarGroup>
        </Navbar>

        <div style={{ maxWidth: '1170px', marginLeft: 'auto', marginRight: 'auto' }}>
          {this.tabs[this.state.activeTabIndex]}
        </div>
      </div>
    );
  }
}

export default App;
