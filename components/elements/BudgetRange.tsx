'use client';

import React, { useState } from 'react';
import 'rc-slider/assets/index.css';
import { Range } from 'rc-slider';

const BudgetRange = () => {
  const [value, setValue] = useState<[number, number]>([0, 1500]);

  return (
    <div className="form-group col-lg-12">
      <label>Budget Range</label>
      <div className="range-slider-one">
        <input
          type="text"
          className="range-amount"
          value={`$${value[0]} - $${value[1]}`}
          readOnly
        />
        <Range
          className="distance-range-slider"
          value={value}
          onChange={(val: number | number[]) => setValue(val as [number, number])}
          min={0}
          max={2000}
          step={1}
          pushable={10}
        />
      </div>
    </div>
  );
};

export default BudgetRange;

