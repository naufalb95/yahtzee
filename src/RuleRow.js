import React, { Component } from 'react';
import './RuleRow.css';

class RuleRow extends Component {
  render() {
    const { score, name, doScore, desc } = this.props;
    const isEnabled = score === undefined;
    return (
      <tr
        className={`RuleRow RuleRow-${isEnabled ? 'active' : 'disabled'}`}
        onClick={isEnabled ? doScore : null}
      >
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{isEnabled ? desc : score}</td>
      </tr>
    );
  }
}

export default RuleRow;
