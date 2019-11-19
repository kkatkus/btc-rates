import { capitalize } from './helper';

describe('utils/helper.ts', () => {
  it('capitalize test', () => {
    expect(capitalize('')).toEqual('');
    expect(capitalize('abc')).toEqual('Abc');
  });
});
