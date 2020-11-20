import React from 'react';
import { AppProps } from './types';

export function App(props: AppProps) {
  return (
    <div className="App">
        <p>
          Number of hits: <code>{props.value}</code>
        </p>
        <button onClick={props.onHit}>Hit!</button>
    </div>
  );
}
