import React from 'react';
import { CounterProps } from './types';

export function Counter(props: CounterProps) {
  return (
    <div className="App">
      <p>
        Number of hits: <code>{props.value}</code>
      </p>
      <button onClick={props.onHit}>Hit!</button>
      <div>
        <input
          aria-label="Set increment amount"
          value={props.incrementAmount}
          onChange={(e) => props.onChangeAmount(e)}
        />
        <button onClick={props.onAddAmount}>Add Amount</button>
      </div>
    </div>
  );
}
