import { validateValueFormat } from './helper';

describe('features/rates/helper.ts', () => {
  it('validateValueFormat test', () => {
    expect(validateValueFormat('')).toBeTruthy();
    expect(validateValueFormat('.')).toBeTruthy();
    expect(validateValueFormat(',')).toBeFalsy();
  });
});
