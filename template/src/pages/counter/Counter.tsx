import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  selectState,
} from './counterSlice';

import { Button, Input, Space } from 'antd';

import './Counter.less';

export function Counter() {
  const count = useAppSelector(selectCount);
  const state = useAppSelector(selectState);

  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('3');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className="counter-container">
      <div className="result">
        <Space>
          <Button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </Button>
          <span>{count}</span>
          <Button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </Button>
        </Space>
      </div>

      <Space wrap>
        <Input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </Button>
        <Button
          loading={state === 'loading'}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </Button>
        <Button onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </Button>
      </Space>
    </div>
  );
}
