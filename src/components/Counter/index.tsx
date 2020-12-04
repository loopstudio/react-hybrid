import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increment, incrementByAmount, selectCount } from 'components/Counter/Slices/counterSlice';
import { Counter } from './Counter';

function CounterContainer() {
  const value = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState<number>(2);

  return (
    <Counter
      onHit={() => dispatch(increment())}
      value={value}
      onChangeAmount={(e: React.ChangeEvent<HTMLInputElement>) => setIncrementAmount(Number(e.target.value))}
      onAddAmount={() =>
        dispatch(incrementByAmount(Number(incrementAmount) || 0))
      }
      incrementAmount={incrementAmount}
    />
  );
}

export default CounterContainer;
