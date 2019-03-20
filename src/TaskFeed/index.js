import React, { Component } from 'react';

import { Classes, Button } from '@blueprintjs/core';

import Task from './Task';

class TaskFeed extends Component {
  render() {
    const {
      tasks,
      hasNextPage,
      hasPrevPage,
      nextHandler,
      previousHandler,
      hideResult,
      hideError,
      hideQueueName
    } = this.props;

    return (
      <div>
        <div style={{ textAlign: 'right' }}>
          <Button icon="arrow-left" disabled={!hasPrevPage} onClick={previousHandler}>
            Previous
          </Button>
          <Button icon="arrow-right" disabled={!hasNextPage} onClick={nextHandler}>
            Next
          </Button>
        </div>

        <table className="bp3-html-table bp3-html-table-striped" style={{ width: '100%', tableLayout: 'fixed' }}>
          <thead>
            <tr>
              <th style={{ width: '10%' }}>ID</th>
              <th style={{ width: '10%' }}>Dedup Key</th>
              {hideQueueName ? null : <th style={{ width: '10%' }}>Queue</th>}
              <th style={{ width: '8%' }}>Retry Count</th>
              <th style={{ width: '25%' }}>Data</th>
              {hideResult ? null : <th style={{ width: '20%' }}>Result</th>}
              {hideError ? null : <th style={{ width: '20%' }}>Error</th>}
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <Task
                task={task}
                key={task.id}
                hideResult={hideResult}
                hideError={hideError}
                hideQueueName={hideQueueName}
              />
            ))}
          </tbody>
        </table>

        <div style={{ textAlign: 'right', marginBottom: '30px', marginTop: '30px' }}>
          <Button icon="arrow-left" disabled={!hasPrevPage} onClick={previousHandler}>
            Previous
          </Button>
          <Button icon="arrow-right" disabled={!hasNextPage} onClick={nextHandler}>
            Next
          </Button>
        </div>
      </div>
    );
  }
}

export default TaskFeed;
