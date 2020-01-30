import React from 'react';
import usernameAndDate from '../client/components/username';

describe('<username />', () => {
  it('should properly format the date', () => {
    expect(usernameAndDate.dateFormatter('2019-04-06')).toEqual('Apr 06, 2019');
  });
});
