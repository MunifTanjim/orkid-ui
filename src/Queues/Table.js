import React, { Component } from 'react';

import QueueRow from './Row';

class QueueTable extends Component {
  render() {
    const { queueNames, handleQueueSelection } = this.props;
    return (
      <table className="bp3-html-table bp3-html-table-bordered bp3-html-table-striped" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Queue Name</th>
            <th>Waiting</th>
            <th>Processed</th>
            <th>Failed</th>
            <th>Reties</th>
            <th>Dead</th>
            <th>Active Consumers</th>
          </tr>
        </thead>
        <tbody>
          {queueNames.map(qName => {
            return <QueueRow queueName={qName} key={qName} handleQueueSelection={handleQueueSelection} />;
          })}
        </tbody>
      </table>
    );
  }
}

export default QueueTable;
