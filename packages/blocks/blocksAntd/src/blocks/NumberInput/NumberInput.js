/*
  Copyright 2020-2021 Lowdefy, Inc

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import React from 'react';
import { InputNumber } from 'antd';
import { blockDefaultProps } from '@lowdefy/block-tools';
import Label from '../Label/Label';

const NumberInput = ({
  blockId,
  events,
  loading,
  properties,
  required,
  validation,
  value,
  methods,
}) => {
  return (
    <Label
      blockId={blockId}
      events={events}
      properties={{ title: properties.title, size: properties.size, ...properties.label }}
      validation={validation}
      required={required}
      loading={loading}
      content={{
        content: () => (
          <InputNumber
            id={`${blockId}_input`}
            className={methods.makeCssClass([{ width: '100%' }, properties.inputStyle])}
            autoFocus={properties.autoFocus}
            disabled={properties.disabled}
            placeholder={properties.placeholder}
            autoComplete="off"
            decimalSeparator={properties.decimalSeparator}
            min={properties.min}
            max={properties.max}
            precision={properties.precision}
            step={properties.step}
            size={properties.size}
            onChange={(newVal) => {
              methods.setValue(newVal);
              methods.triggerEvent({ name: 'onChange' });
            }}
            onPressEnter={() => {
              methods.triggerEvent({ name: 'onPressEnter' });
            }}
            value={value}
          />
        ),
      }}
    />
  );
};

NumberInput.defaultProps = blockDefaultProps;

export default NumberInput;
