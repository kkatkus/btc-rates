import { validateValueFormat, parseValue } from './helper';

describe('features/rates/helper.ts', () => {
  it('parseValue test', () => {
    expect(parseValue(null)).toEqual('');
    expect(parseValue(undefined)).toEqual('');
    expect(parseValue('')).toEqual('');
    expect(parseValue('.')).toEqual('0.');
    expect(parseValue(',')).toEqual('0.');
    expect(parseValue(',')).toEqual('0.');
    expect(parseValue('123')).toEqual('123');
    expect(parseValue('123.')).toEqual('123.');
    expect(parseValue('123.12')).toEqual('123.12');
  });
  it('validateValueFormat test', () => {
    expect(validateValueFormat(null)).toBeFalsy();
    expect(validateValueFormat(undefined)).toBeFalsy();
    expect(validateValueFormat('')).toBeTruthy();
    expect(validateValueFormat('.')).toBeTruthy();
    expect(validateValueFormat(',')).toBeFalsy();
    expect(validateValueFormat('.0')).toBeTruthy();
    expect(validateValueFormat('.00')).toBeTruthy();
    expect(validateValueFormat('0.0')).toBeTruthy();
    expect(validateValueFormat('0.00')).toBeTruthy();
    expect(validateValueFormat('0.000')).toBeTruthy();
    expect(validateValueFormat('0.000000')).toBeTruthy();
    expect(validateValueFormat('0.0000000')).toBeFalsy();
    expect(validateValueFormat('000000.000000')).toBeTruthy();
    expect(validateValueFormat('0000000.000000')).toBeFalsy();
    expect(validateValueFormat('x')).toBeFalsy();
    expect(validateValueFormat('x.')).toBeFalsy();
    expect(validateValueFormat('x.x')).toBeFalsy();
  });
});
