import React from 'react';
import UsernameAndDate from '../client/components/username';

describe('<username />', () => {
  it('should properly format the date', () => {
    expect(UsernameAndDate.dateFormatter('2019-04-06')).toEqual('Apr 06, 2019');
  });
});
