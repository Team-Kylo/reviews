/* eslint-disable no-undef */
import React from 'react';
import { dateFormatter } from '../client/components/username';

describe('<username />', () => {
  it('should properly format the date', () => {
    expect(dateFormatter('2019-04-06')).toEqual('Apr 06, 2019');
  });
});
